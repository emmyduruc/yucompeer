import { PrismaClient } from '@prisma/client';

export enum PricingTierSupportEnum {
  STANDARD = 'STANDARD',
  PRIORITY = 'PRIORITY',
}

const prisma = new PrismaClient();

async function main() {
  await prisma.provider.deleteMany();
  await prisma.tool.deleteMany();
  await prisma.category.deleteMany();

  const categories = [
    {
      name: 'Databases',
      description: `Databases are foundational components of software applications, used to store, manage, and retrieve data. 
      They come in two primary types: relational (SQL) and non-relational (NoSQL) databases. Relational databases, such as 
      MySQL and PostgreSQL, organize data in tables with defined relationships, making them suitable for structured data. 
      Non-relational databases, like MongoDB and DynamoDB, store unstructured or semi-structured data, offering flexibility for dynamic schemas. 
  
      Additionally, databases can be serverless or self-managed, offering a range of options for scalability and maintenance. 
      The table below allows users to compare database providers, highlighting pricing tiers, features, and use cases. 
      This simplifies the process of selecting the most suitable database technology for your projects, saving time and effort by presenting 
      detailed information in one place.`,
    },
    {
      name: 'Cloud Services',
      description: `Cloud services provide scalable and cost-effective solutions for deploying, managing, and running applications 
      without the need for on-premise infrastructure. They encompass offerings such as virtual machines, storage, networking, 
      AI tools, and database management. Popular platforms like AWS, Google Cloud Platform, and DigitalOcean offer a range of pricing tiers, 
      including free credits for new users. 
  
      The table below lets users compare cloud service providers, helping them decide on the best platform for their requirements 
      by analyzing features, pricing, and suitability for specific workloads such as AI, IoT, or web hosting.`,
    },
    {
      name: 'Payment Services',
      description: `Payment services enable businesses to accept, process, and manage online payments securely. They provide 
      integrations for credit/debit cards, digital wallets, and bank transfers. Popular providers like Stripe, PayPal, and Apple Pay 
      offer features such as subscription billing, fraud detection, and global reach. 
  
      The table below allows users to compare payment gateway providers to determine the best fit for their business, based on 
      transaction fees, features, and regional availability. This simplifies the decision-making process, ensuring seamless payment experiences.`,
    },
    {
      name: 'CMSs',
      description: `Content Management Systems (CMSs) simplify the creation, management, and organization of digital content. 
      They are widely used for websites, blogs, and e-commerce platforms. Popular CMSs include WordPress, Strapi, and Contentful. 
      These platforms provide templates, plugins, and integrations for SEO, analytics, and more. 
  
      Below, users can compare CMS options based on pricing tiers, customization capabilities, and ease of use to determine which 
      system best aligns with their needs for website or application development.`,
    },
    {
      name: 'Project Management Tools',
      description: `Project management tools streamline the planning, tracking, and execution of tasks within teams. Platforms like Jira, ClickUp, 
      and Trello offer features such as task assignment, progress tracking, and collaboration to enhance productivity. 
  
      The table below lets users compare these tools, providing detailed insights into pricing tiers, integrations, and feature sets. 
      This enables teams to select the most efficient solution for managing workflows and meeting project deadlines.`,
    },
    {
      name: 'Development Workflow Tools',
      description: `Development workflow tools, such as GitHub, GitLab, and Bitbucket, are essential for managing source code, collaboration, 
      and version control in software development. These tools support continuous integration, deployment (CI/CD), and code reviews. 
  
      The table below provides a comparison of these platforms, helping users identify the best fit for their development needs 
      based on pricing, scalability, and team collaboration features.`,
    },
    {
      name: 'IDEs',
      description: `Integrated Development Environments (IDEs) are essential tools for developers to write, debug, and test code. 
      Popular IDEs such as Visual Studio Code, IntelliJ IDEA, and PyCharm offer features like syntax highlighting, code completion, 
      and version control integration. 
  
      The table below allows users to compare IDEs based on pricing (some are free), supported languages, and developer productivity features. 
      This ensures developers can select the IDE that enhances their workflow and efficiency.`,
    },
    {
      name: 'No-Code Platforms',
      description: `No-code platforms, like Webflow, Bubble, and Glide, empower users to create websites, mobile apps, and business tools 
      without writing any code. They feature drag-and-drop interfaces, pre-built templates, and integrations with popular services. 
  
      The table below provides comparisons of no-code platforms based on pricing, scalability, and ease of use, 
      enabling users to choose the most suitable solution for their projects.`,
    },
  ];

  const categoryRecords = await Promise.all(
    categories.map((cat) => prisma.category.create({ data: cat })),
  );

  // Databases
  const databases = [
    {
      tool: {
        name: 'PostgreSQL',
        description:
          'PostgreSQL is an open-source, object-relational database system known for its reliability, extensibility, and high performance. It supports advanced features like ACID compliance, complex queries, and extensible data types. PostgreSQL is a robust solution for web, mobile, and analytic applications, making it a go-to choice for developers building scalable applications.',
        type: 'Relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Supabase',
          description:
            'Supabase is a powerful backend-as-a-service platform built on top of PostgreSQL. It provides developers with instant APIs, real-time functionality, and built-in authentication and storage. Supabase is ideal for creating scalable applications quickly without worrying about infrastructure.',
          imageUrl:
            'https://cdn.prod.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d41_646dfce3b9c4849f6e401bff_supabase-logo-icon_1.png',
          features: [
            'PostgreSQL database',
            'Authentication',
            'File storage',
            'Realtime database updates',
            'Edge functions (serverless)',
            'RESTful APIs',
            'Webhooks',
            'CLI for management',
            'Database extensions',
            'Row-level security',
            'Scheduled tasks',
          ],
          fitsFor: [
            'Web applications',
            'Mobile backends',
            'APIs for modern apps',
            'Serverless solutions',
          ],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: [
                'Unlimited API requests',
                '50,000 monthly active users',
                '500MB database space',
                '5GB file storage',
                'Community support',
              ],
              limitations:
                'Projects paused after 1 week of inactivity and Limit of 2 active projects',
            },
            {
              tierName: 'Pro',
              price: '25/month',
              features: [
                '100,000 monthly active users (then 0.00325 per MAU)',
                '8GB disk size per project (then 0.125 per GB)',
                '250GB bandwidth (then 0.09 per GB)',
                '100GB file storage (then 0.021 per GB)',
                'Email support',
                'Daily backups stored for 7 days',
                '7-day log retention',
              ],
              limitations: 'Additional costs for overages',
            },
            {
              tierName: 'Team',
              price: '599/month',
              features: [
                'SOC2 compliance',
                'HIPAA (available as a paid add-on)',
                'Read-only and billing member roles',
                'SSO for Supabase Dashboard',
                'Priority email support & SLAs',
                'Daily backups stored for 14 days',
                '28-day log retention',
              ],
              limitations: 'Additional costs for HIPAA compliance',
            },
            {
              tierName: 'Enterprise',
              price: 'Custom',
              features: [
                'Dedicated support manager',
                'Uptime SLAs',
                'On-premise support',
                '24/7 enterprise support',
                'Private Slack channel',
                'Custom security questionnaires',
              ],
              limitations: 'Custom pricing based on requirements',
            },
          ],
        },
      ],
    },

    {
      tool: {
        name: 'MySQL',
        description: 'Open-source relational database management system.',
        type: 'Relational',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'MySQL',
          description:
            'Popular open-source relational database, ideal for web applications.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/de/thumb/d/dd/MySQL_logo.svg/1200px-MySQL_logo.svg.png',
          features: ['Relational storage', 'High performance'],
          fitsFor: ['Web apps', 'General-purpose applications'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Community',
              price: '0',
              features: ['Open source'],
              limitations: 'No support',
            },
            {
              tierName: 'Enterprise',
              price: '599',
              features: ['Support'],
              limitations: null,
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Redis',
        description:
          'Redis is an in-memory key-value store designed for high performance and scalability. It is ideal for caching, real-time analytics, and session management. Redis supports advanced data structures like lists, sets, and sorted sets, making it versatile for various use cases.',
        type: 'Non-relational',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Redis Enterprise Cloud',
          description:
            'Redis Enterprise Cloud offers a fully managed Redis experience, providing high availability, seamless scaling, and built-in support for Redis modules.',
          imageUrl:
            'https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png',
          features: [
            'Key-value storage',
            'Pub/Sub messaging',
            'Lua scripting',
            'Active-active geo-distribution',
            'Redis modules support',
          ],
          fitsFor: [
            'Caching',
            'Session management',
            'Real-time analytics',
            'Search applications',
          ],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Essentials',
              price: '5/month',
              features: [
                'Single 12GB database',
                '16,000 operations per second',
                '10,000 connections',
                '99.99% uptime',
                'On-demand and daily backups',
              ],
              limitations: 'Basic support, limited scalability',
            },
            {
              tierName: 'Pro',
              price: '0.881/hour',
              features: [
                'Unlimited databases of unlimited size',
                'Unlimited operations per second',
                'Unlimited connections',
                '99.999% uptime',
                'Dedicated VPC',
                'Active-active geo-replication',
                'Auto-tiering',
              ],
              limitations: 'Usage-based pricing for high throughput',
            },
            {
              tierName: 'Enterprise',
              price: 'Contact sales',
              features: [
                'Custom configurations for enterprise needs',
                '99.999% uptime SLA',
                'Advanced security and compliance',
                'Customer success packages',
                'Annual discounts',
                'Premium support',
              ],
              limitations: 'Enterprise-level subscription required',
            },
          ],
        },
      ],
    },

    {
      tool: {
        name: 'CockroachDB',
        description:
          'CockroachDB is a distributed SQL database designed to handle global-scale applications with high availability and resilience. It offers multi-region support and ensures strong consistency with ACID compliance.',
        type: 'Relational',
        skillLevel: 'Advanced',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'CockroachDB',
          description:
            'CockroachDB provides a distributed SQL platform designed for modern applications requiring horizontal scaling, global data distribution, and high availability.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/3/31/Cockroach_Labs_Logo.png',
          features: [
            'Global replication',
            'Horizontal scaling',
            'High availability',
            'ACID compliance',
            'Multi-region support',
          ],
          fitsFor: [
            'Distributed systems',
            'Global-scale apps',
            'High availability applications',
            'Multi-region architectures',
          ],
          skillLevel: 'Advanced',
          pricingTiers: [
            {
              tierName: 'Basic',
              price: '0',
              features: [
                '50 million Request Units (RUs) per month',
                '10GB storage free per month',
                'On-demand compute and storage scaling',
                'AWS and GCP multi-region support for select regions',
                'IP allowlist access control',
                '99.99% availability',
              ],
              limitations:
                'Limited to minimal operational and security requirements.',
            },
            {
              tierName: 'Standard (Preview)',
              price: '146/month',
              features: [
                'Provisioned compute with scaling up to 60 vCPUs',
                'On-demand storage',
                'AWS and GCP multi-region support for select regions',
                'Private connectivity',
                'Metrics and log export to DataDog',
                '99.99% availability',
              ],
              limitations:
                'Suitable for most applications requiring scalable infrastructure.',
            },
            {
              tierName: 'Advanced',
              price: '476/month',
              features: [
                'Provisioned compute and storage with unlimited scaling',
                'AWS, GCP, and Azure multi-region support for all regions',
                'Private connectivity',
                'Metrics and log export to DataDog',
                'Up to 99.999% availability',
                'CMEK and controls for PCI / HIPAA compliance',
              ],
              limitations:
                'Targeted at applications with sophisticated security needs.',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Firebase',
        description:
          'Firebase is a comprehensive backend-as-a-service (BaaS) platform by Google, designed to simplify app development with features like real-time databases, cloud functions, hosting, and analytics.',
        type: 'Non-relational',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Firebase',
          description:
            'Firebase offers a serverless platform with real-time NoSQL databases, cloud storage, hosting, and analytics tailored for small to medium-scale applications.',
          imageUrl:
            'https://www.ichdata.com/wp-content/uploads/2017/06/2024070803153850.png',
          features: [
            'Realtime database',
            'Cloud Functions',
            'Cloud Storage',
            'Hosting',
            'Authentication',
            'Performance Monitoring',
            'Analytics',
          ],
          fitsFor: [
            'Small apps',
            'Serverless backends',
            'Mobile apps',
            'Web apps',
          ],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Spark (No-cost)',
              price: '0',
              features: [
                'Realtime Database: 1GB stored, 50K reads/day, 20K writes/day',
                'Cloud Firestore: 1GB storage, 50K reads/day, 20K writes/day, 1GB downloaded',
                'Cloud Functions: Up to 2M invocations/month, 400K GB-seconds/month',
                'Hosting: 10GB stored, 360MB/day data transfer',
                'Cloud Storage: 5GB storage, 50K downloads/day',
                'Authentication: Free for 50K MAUs (Monthly Active Users)',
              ],
              limitations:
                'Generous limits for prototyping and small-scale apps. Limited to predefined quotas.',
            },
            {
              tierName: 'Blaze (Pay-as-you-go)',
              price: 'Based on usage',
              features: [
                'Realtime Database: $5/GB stored, $1/GB downloaded',
                'Cloud Firestore: Charged per operations and storage',
                'Cloud Functions: $0.40/million invocations, $0.0000025/GB-second',
                'Hosting: $0.15/GB transferred, $0.026/GB stored',
                'Cloud Storage: $0.026/GB stored, $0.12/GB downloaded',
                'Authentication: Charges based on additional MAUs beyond free limits',
              ],
              limitations:
                'Pay-as-you-go plan suitable for scaling. Costs can increase rapidly with heavy usage.',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Oracle Database',
        description:
          'Oracle Database is an enterprise-grade relational database known for its advanced analytics, high availability, and support for mission-critical workloads. It is ideal for large-scale enterprise applications, big data solutions, and workloads requiring robust performance and reliability. Oracle Database offers flexible deployment options including on-premises and cloud-based solutions.',
        type: 'Relational',
        skillLevel: 'Advanced',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Oracle Database',
          description:
            'Oracle Database offers a wide range of solutions, including advanced analytics, multi-model support, and high availability. It provides flexible pricing based on OCPU and storage usage, making it suitable for diverse enterprise needs.',
          imageUrl: 'https://m.media-amazon.com/images/I/41QodfboFdL.png',
          features: [
            'Advanced analytics',
            'Cloud and on-premises support',
            'Multi-model database',
            'High availability',
            'Robust performance',
          ],
          fitsFor: [
            'Enterprise applications',
            'Mission-critical workloads',
            'Big data solutions',
            'High availability',
          ],
          skillLevel: 'Advanced',
          pricingTiers: [
            {
              tierName: 'Base Database Service - Virtual Machine',
              price: '0.2151 per OCPU per hour',
              features: ['Basic database service with enterprise features'],
              limitations: 'Pricing increases for advanced performance tiers',
            },
            {
              tierName: 'Base Database Service on Arm - Enterprise',
              price: '0.2151 per OCPU per hour',
              features: ['Enterprise-grade database service on Arm'],
              limitations: 'Limited to Arm-based virtual machines',
            },
            {
              tierName: 'Base Database Service on Arm - High Performance',
              price: '0.4436 per OCPU per hour',
              features: ['High-performance database operations on Arm'],
              limitations: 'Additional cost for high performance',
            },
            {
              tierName: 'Database Enterprise Edition',
              price: '0.4301 per OCPU per hour',
              features: ['Includes advanced enterprise features'],
              limitations: 'License required for enterprise features',
            },
            {
              tierName: 'Database Enterprise Edition High Performance',
              price: '0.8871 per OCPU per hour',
              features: ['Optimized for high performance and analytics'],
              limitations: 'Requires additional high-performance configuration',
            },
            {
              tierName: 'Block Volume Storage',
              price: '0.0255 per GB per month',
              features: ['Standard block storage for databases'],
              limitations: 'Does not include performance enhancements',
            },
            {
              tierName: 'Block Volume Performance Units',
              price: '0.0017 per GB per month',
              features: [
                'Performance-optimized storage',
                'Options for 10 or 20 VPUs for balanced and high performance',
              ],
              limitations: 'Performance optimization incurs additional costs',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Azure Cosmos DB',
        description:
          'Azure Cosmos DB is a globally distributed, multi-model database service by Microsoft, designed to offer low latency and high availability. It supports NoSQL, Cassandra, Gremlin, Table, PostgreSQL vCore, and MongoDB APIs, providing flexibility for a variety of use cases such as IoT apps, enterprise applications, and globally distributed apps.',
        type: 'Non-relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Azure Cosmos DB',
          description:
            'Azure Cosmos DB provides a scalable, globally distributed database with options for serverless, provisioned throughput, and autoscale models. It offers built-in high availability, backup and recovery, and support for multiple APIs, making it suitable for both small-scale and large-scale applications.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Azure_Cosmos_DB.svg/800px-Azure_Cosmos_DB.svg.png',
          features: [
            'Global distribution',
            'Multi-model support',
            'Automatic scaling',
            'High availability',
            'Backup and recovery',
          ],
          fitsFor: ['IoT apps', 'Enterprise solutions', 'Global apps'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: [
                '5GB storage',
                '1000 RU/s throughput',
                '25GB monthly data egress',
              ],
              limitations: 'Limited to non-production workloads',
            },
            {
              tierName: 'Autoscale Provisioned Throughput',
              price: '5.84/month per 100 RU/s',
              features: [
                'Automatically scales throughput',
                'Single-region write account',
                'Supports multiple APIs',
              ],
              limitations: 'Costs increase with peak usage',
            },
            {
              tierName: 'Standard Provisioned Throughput',
              price: '5.84/month per 100 RU/s',
              features: [
                'Manually scales throughput',
                'Single-region write account',
                'Supports multiple APIs',
              ],
              limitations: 'Requires manual provisioning',
            },
            {
              tierName: 'Serverless',
              price: '0.25 per million RU/s',
              features: [
                'Pay-per-request model',
                'Supports all APIs',
                'No minimum capacity required',
              ],
              limitations: 'Not suited for sustained high workloads',
            },
            {
              tierName: 'PostgreSQL vCore',
              price: '13.943/month (starting)',
              features: [
                'Single node or multi-node setup',
                'Supports PostgreSQL APIs',
                'Scalable vCore configurations',
              ],
              limitations: 'Additional costs for storage and backup',
            },
            {
              tierName: 'MongoDB vCore',
              price: '111.544/month (starting)',
              features: [
                'Supports MongoDB APIs',
                'Horizontally scalable clusters',
                'Optimized for aggregation pipelines',
              ],
              limitations: 'Cluster management required',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'PlanetScale',
        description:
          'PlanetScale is a serverless MySQL database platform designed for modern applications. It offers developers powerful features like branching, sharding, and multi-region support, making it ideal for scaling web apps and global databases.',
        type: 'Relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'PlanetScale',
          description:
            'PlanetScale provides a serverless MySQL database platform that simplifies database management with features like sharding, branching, and global scalability. It is ideal for fast-growing applications requiring reliability and performance.',
          imageUrl:
            'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/iidhf24ewhnqtjgrrfbp',
          features: [
            'Branching',
            'Sharding',
            'Automatic scaling',
            'Multi-region deployment',
            'Global availability zones',
            'Vitess expertise',
          ],
          fitsFor: [
            'Scalable web apps',
            'Global databases',
            'Enterprise applications',
          ],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Starter',
              price: '0',
              features: [
                '10 GB storage',
                'Single database',
                'Shared resources',
                'Limited regions',
              ],
              limitations: 'Limited scalability and single database only.',
            },
            {
              tierName: 'Pro',
              price: '47/month',
              features: [
                '10 GB storage',
                '3 availability zones',
                '1 primary database (1/8 vCPU, 1 GB memory)',
                '2 replicas (1/8 vCPU, 1 GB memory each)',
                'Multi-region support',
                'Automated failover between nodes',
              ],
              limitations:
                'Storage and vCPU scaling may incur additional costs.',
            },
            {
              tierName: 'Enterprise',
              price: 'Custom pricing',
              features: [
                'Advanced sharding design consultation',
                'Vitess expertise',
                'Migration assistance',
                'Slack-based support',
                'Business support',
                'Custom bulk discounts',
                'Additional regions deployment',
              ],
              limitations: 'Requires custom agreement with PlanetScale.',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Neon',
        description:
          'Serverless PostgreSQL database with features like branching and autoscaling.',
        type: 'Relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Neon',
          description:
            'Serverless PostgreSQL database with features like branching and autoscaling.',
          imageUrl:
            'https://avatars.githubusercontent.com/u/77690634?s=200&v=4',
          features: ['Branching', 'Autoscaling', 'Performance Insights'],
          fitsFor: ['Modern apps', 'Serverless architectures'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['5GB storage'],
              limitations: 'Limited throughout',
            },
            {
              tierName: 'Launch',
              price: '19/month',
              features: [
                'Includes 10 GiB storage, if 10GiB is exhausted there is an addtional cost of $1.75 per GiB storage',
                'Includes 300 compute hours',
                'Scale to 4 vCPU',
                'Protect up to 2 branches',
                'Restore up to 7 days',
              ],
              limitations: 'Standard support',
            },
            {
              tierName:
                'Scale (Add performance and capacity for growing applications.)',
              price: '69/month',
              features: [
                'Includes 50 GiB storage, if 50GiB is exhausted there is an addtional cost for $1.50 per GiB',
                'Includes 750 compute hours',
                'Scale to 8 vCPU',
                'Protect up to 5 branches',
                'Restore up to 14 days',
                'IP Allow Rules',
                'Datadog integration',
              ],
              support: PricingTierSupportEnum.STANDARD,
              limitations: 'Standard support',
            },
            {
              tierName: 'Business',
              price: '700/month',
              features: [
                'Includes 500 GiB storage, if 500GiB is exhausted there is an addtional cost for $0.50 per GiB',
                'Includes 1000 compute hours',
                'Scale to 10 vCPU',
                'Protect up to 5 branches',
                'Restore up to 30 days',
                'IP Allow Rules',
                'Datadog integration',
                'Compliance (SOC 2, ISO)',
                'HIPAA - early 2025',
                'Private networking',
                '99.95% SLA',
              ],
              support: PricingTierSupportEnum.PRIORITY,
              limitations: 'Standard support',
            },
          ],
        },
      ],
    },

    {
      tool: {
        name: 'MongoDB Atlas',
        description:
          'MongoDB Atlas is a fully managed NoSQL database service built on the popular MongoDB database. It offers flexibility in data modeling, supports dynamic schemas, and provides robust scalability for applications with complex querying needs.',
        type: 'Non-relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'MongoDB Atlas',
          description:
            'MongoDB Atlas is a globally distributed cloud database service offering a variety of plans tailored for development and production needs. It provides flexibility, scalability, and advanced security features to support modern application development.',
          imageUrl: 'https://www.mongodb.com/assets/images/global/favicon.ico',
          features: [
            'Dynamic schema support',
            'Scalability with sharding',
            'Multi-cloud support across AWS, Google Cloud, and Azure',
            'Built-in security features like encryption and auditing',
            'Advanced analytics and performance optimization',
          ],
          fitsFor: [
            'Modern applications',
            'IoT applications',
            'Mobile apps',
            'Real-time analytics',
          ],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0/hour',
              features: [
                'Storage: 512 MB',
                'RAM: Shared',
                'vCPU: Shared',
                'Automated failover',
                'Cloud availability on AWS, Google Cloud, Azure',
                'Snapshots every 6 hours',
                'Basic deployments without downtime upgrades',
              ],
              support: PricingTierSupportEnum.STANDARD,
              limitations:
                'Limited to basic features and shared infrastructure.',
            },
            {
              tierName: 'Dedicated',
              price: '0.08/hour',
              features: [
                'Storage: Unlimited scaling with up to 4TB per shard',
                'RAM: Up to 768 GB per shard',
                'vCPU: Unlimited scaling with up to 96 vCPU per shard',
                '99.99% Uptime SLA',
                'Cloud availability on AWS, Google Cloud, Azure',
                'Snapshots customizable up to every hour/Continuous',
                'Snapshot retention up to 15 years',
                'Point-in-time restores available',
                'Support for deployments with no downtime upgrades',
                'Global writes and workload isolation (analytics, search nodes)',
                'Backup retention up to 15 years',
              ],
              support: PricingTierSupportEnum.PRIORITY,
              limitations:
                'Costs increase with usage and scaling requirements.',
            },
            {
              tierName: 'Serverless',
              price: '0.10/million reads',
              features: [
                'Storage: Up to 1TB',
                'RAM: Scaled based on actual usage',
                'vCPU: Scaled based on actual usage',
                'Multi-cloud support on AWS, Google Cloud, Azure',
                'Global writes and workload isolation',
                'Automated data tiering',
                'Snapshots and point-in-time restores',
                'Backup retention for 35 days',
              ],
              support: PricingTierSupportEnum.PRIORITY,
              limitations:
                'Usage-based pricing can lead to higher costs for large-scale workloads.',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'DynamoDB',
        description:
          'DynamoDB is a fully managed NoSQL database provided by AWS, offering high performance, scalability, and availability. It is tailored for applications with unpredictable workloads, such as real-time bidding or gaming.',
        type: 'Non-relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'DynamoDB',
          description:
            'A serverless key-value and document database by AWS, designed for applications requiring millisecond response times and infinite scalability. DynamoDB provides automatic scaling and high durability for mission-critical applications.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png',
          features: [
            'Global tables',
            'Event-driven architecture',
            'Auto-scaling',
            'Encryption at rest',
            'Backup and restore',
          ],
          fitsFor: ['Real-time bidding', 'E-commerce', 'IoT'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['25GB storage', '25 write units', '25 read units'],
              limitations: 'Read/write limits',
            },
            {
              tierName: 'On-demand',
              price: '0.25',
              features: ['Pay-per-request', 'Scalable read/write capacity'],
              limitations: 'Cost increases with high usage',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Cassandra',
        description:
          'Apache Cassandra is an open-source, highly scalable NoSQL database ideal for handling large volumes of structured data across multiple nodes. It is designed to ensure availability and reliability even during outages.',
        type: 'Non-relational',
        skillLevel: 'Advanced',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'DataStax Astra',
          description:
            'A managed cloud service based on Apache Cassandra, offering fast setup, serverless capabilities, and automated scalability for distributed applications.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/640px-Cassandra_logo.svg.png',
          features: [
            'Global distribution',
            'Serverless scaling',
            'Advanced security features',
          ],
          fitsFor: ['Big data', 'High-throughput workloads'],
          skillLevel: 'Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['5GB storage', 'Limited throughput'],
              limitations: 'Shared infrastructure',
            },
            {
              tierName: 'Enterprise',
              price: '500',
              features: ['Dedicated clusters', 'Enhanced security'],
              limitations: 'High costs for small teams',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Couchbase',
        description:
          'Couchbase is a NoSQL database that combines the flexibility of JSON with the power of SQL querying. It is built for enterprise-level applications requiring speed and scalability.',
        type: 'Non-relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Couchbase Capella',
          description:
            'A managed NoSQL database platform offering automatic scaling, integrated caching, and built-in analytics. Capella is designed for developers building modern, high-performance applications.',
          imageUrl:
            'https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Couchbase-Monitoring.component.complex-narrative-xl.ts=1691179216889.png/content/adobe-cms/de/de/products/instana/supported-technologies/couchbase-monitoring/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage',
          features: [
            'SQL-like querying',
            'Integrated caching',
            'High availability',
          ],
          fitsFor: [
            'Enterprise apps',
            'Mobile apps',
            'IoT',
            'Real-time analytics',
          ],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['1GB storage', 'Developer tier'],
              limitations: 'Limited support',
            },
            {
              tierName: 'Professional',
              price: '200',
              features: ['10GB storage', 'Advanced support'],
              limitations: 'Additional costs for higher tiers',
            },
          ],
        },
      ],
    },
  ];

  // Cloud Services
  const cloudServices = [
    {
      tool: {
        name: 'AWS',
        description: 'Comprehensive cloud computing platform by Amazon.',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'AWS',
          description:
            'Amazon Web Services (AWS) provides a highly reliable, scalable, and low-cost infrastructure platform in the cloud. It offers hundreds of services ranging from compute power to machine learning.',
          imageUrl: 'https://saviynt.com/hubfs/aws.png',
          features: [
            'Compute',
            'Storage',
            'Databases',
            'Machine Learning',
            'IoT',
          ],
          fitsFor: ['Large-scale apps', 'Enterprise solutions', 'Startups'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free Tier',
              price: '0',
              features: [
                '750 hours EC2 t2.micro',
                '5GB S3',
                '30GB EBS',
                'RDS Free Tier',
                'DynamoDB Free Tier',
                '1 Million Lambda invocations',
              ],
              limitations: '12 months for most services',
            },
            {
              tierName: 'Pay-as-you-go',
              price: 'Varies by usage',
              features: [
                'Elastic Compute Units',
                'Storage billed per GB',
                'Networking costs',
              ],
              limitations: 'Costs can increase rapidly with heavy usage',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Google Cloud Platform',
        description: 'Cloud computing services by Google.',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'GCP',
          description:
            "Google Cloud Platform offers compute, storage, and application development tools powered by Google's robust global network.",
          imageUrl:
            'https://miit.edu.mu/wp-content/uploads/2023/08/google-cloud-logo-0.png',
          features: [
            'Compute Engine',
            'AI tools',
            'Big Data Processing',
            'Cloud Run',
            'Kubernetes Engine',
          ],
          fitsFor: [
            'AI-heavy apps',
            'Data processing workflows',
            'Web apps',
            'Mobile backends',
          ],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free Tier',
              price: '0',
              features: [
                '$300 in free credits (valid for 90 days)',
                'F1-micro instance free tier',
                '5GB Cloud Storage',
                '1GB BigQuery',
              ],
              limitations: 'Usage limits and credit expiry after 90 days',
            },
            {
              tierName: 'Sustained Use Discounts',
              price: 'Varies',
              features: ['Automatic discounts for sustained workloads'],
              limitations: 'Requires sustained usage',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'DigitalOcean',
        description:
          'Cloud computing platform providing virtual machines and storage solutions for developers.',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'DigitalOcean',
          description:
            'DigitalOcean offers developer-friendly cloud services that make it simple to deploy, manage, and scale applications.',
          imageUrl:
            'https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/663493a39256fb822704088b_DigitalOcean.webp',
          features: ['Droplets (VMs)', 'Kubernetes', 'Managed Databases'],
          fitsFor: ['Small to medium businesses', 'Startups', 'Developers'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Starter',
              price: '5',
              features: ['1 vCPU', '1GB RAM', '25GB SSD', '1TB Bandwidth'],
              limitations: 'Single droplet only',
            },
            {
              tierName: 'Pro',
              price: '20',
              features: ['4 vCPUs', '8GB RAM', '80GB SSD', '5TB Bandwidth'],
              limitations: 'No additional managed services',
            },
            {
              tierName: 'Credits',
              price: '0',
              features: ['$200 free credit (valid for 60 days)'],
              limitations: 'Credits expire after 60 days',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Netlify',
        description:
          'A cloud platform for modern web development that automates deployments and scales effortlessly.',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Netlify',
          description:
            'Netlify provides a platform for building, deploying, and managing modern web projects.',
          imageUrl:
            'https://cdn.cosmicjs.com/547d4e20-dd7e-11ee-b074-b5c8fe3ef189-netlify-light.png',
          features: ['Serverless Functions', 'Deploy Previews', 'CDN'],
          fitsFor: ['Static websites', 'Jamstack apps', 'Portfolio sites'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['Unlimited personal projects', '100GB bandwidth'],
              limitations: 'Limited team collaboration',
            },
            {
              tierName: 'Pro',
              price: '19',
              features: ['Collaborative tools', '1TB bandwidth'],
              limitations: 'Higher costs for enterprise use',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Vercel',
        description:
          'A platform for frontend frameworks and static sites, optimized for Jamstack workflows.',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Vercel',
          description:
            'Vercel provides a global edge network for high-performance website hosting and static site generation.',
          imageUrl:
            'https://ml.globenewswire.com/Resource/Download/3a54c241-a668-4c94-9747-3d3da9da3bf2',
          features: ['Serverless Functions', 'Edge Functions'],
          fitsFor: ['React apps', 'Next.js apps', 'Static sites'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Hobby',
              price: '0',
              features: ['Personal projects', 'Limited bandwidth'],
              limitations: 'Single user only',
            },
            {
              tierName: 'Pro',
              price: '20',
              features: ['Collaborative teams', 'Unlimited bandwidth'],
              limitations: 'Costlier for larger teams',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Linode',
        description:
          'Infrastructure as a service (IaaS) platform offering virtual private servers.',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Linode',
          description:
            'Linode specializes in cloud hosting solutions with simple pricing and reliable performance.',
          imageUrl:
            'https://assets.wheelhouse.com/media/_solution_logo_09262023_9626387.png',
          features: ['VMs', 'Load Balancers', 'Storage'],
          fitsFor: ['Developers', 'Small businesses'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Standard',
              price: '5',
              features: ['1GB RAM', '25GB SSD', '1TB Bandwidth'],
              limitations: 'Limited managed services',
            },
            {
              tierName: 'High Memory',
              price: '30',
              features: ['24GB RAM', '10TB Bandwidth'],
              limitations: 'Higher memory costs',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Azure',
        description:
          'Microsoft Azure offers a wide range of cloud services for application development and management.',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Azure',
          description:
            'Microsoft Azure provides scalable cloud resources, machine learning tools, and enterprise-grade solutions.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/800px-Microsoft_Azure.svg.png',
          features: ['VMs', 'Databases', 'AI services', 'Kubernetes'],
          fitsFor: ['Enterprise apps', 'Data analytics'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['$200 credits', '25GB storage'],
              limitations: '30-day trial',
            },
            {
              tierName: 'Standard',
              price: 'Varies by usage',
              features: ['Pay-as-you-go'],
              limitations: 'Can get expensive with heavy usage',
            },
          ],
        },
      ],
    },
  ];

  // Payment Services
  const paymentServices = [
    {
      tool: {
        name: 'Stripe',
        description: 'Online payment processing for internet businesses.',
        categoryId: categoryRecords.find((c) => c.name === 'Payment Services')!
          .id,
      },
      providers: [
        {
          name: 'Stripe',
          description: 'Payment gateway for seamless transactions.',
          imageUrl: 'https://logos-marques.com/stripe-logo/stripe-logo/',
          features: [
            'Integrated payments',
            'Subscription billing',
            'Payouts',
            'Connect',
            'Radar',
          ],
          fitsFor: [
            'E-commerce',
            'Subscription services',
            'Marketplaces',
            'On-demand services',
            'Platforms',
            'Nonprofits',
          ],
          pricingTiers: [
            {
              tierName: 'Standard',
              price: '2.9',
              features: [
                '2.9% + 30¢ per transaction',
                'No setup fees',
                'No monthly fees',
                'No hidden costs',
              ],
              limitations: 'Per transaction cost',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'PayPal',
        description: 'Online payment system for global transactions.',
        categoryId: categoryRecords.find((c) => c.name === 'Payment Services')!
          .id,
      },
      providers: [
        {
          name: 'PayPal',
          description: 'Simplified payments for online businesses.',
          imageUrl:
            'https://qpro.nl/wp-content/uploads/2024/02/Paypal_2014_logo-e1708092007619.png.webp',
          features: ['One-click checkout', 'Global reach'],
          fitsFor: [
            'E-commerce',
            'Cross-border transactions',
            'Marketplaces',
            'Nonprofits',
          ],
          pricingTiers: [
            {
              tierName: 'Standard',
              price: '2.9',
              features: [
                '2.9% + 30¢ per transaction',
                'No setup fees',
                'No monthly fees',
                'No hidden costs',
              ],
              limitations: 'High transaction fees',
            },
          ],
        },
      ],
    },
  ];

  // CMSs
  const cmsTools = [
    {
      tool: {
        name: 'WordPress',
        description: 'Open-source CMS for websites and blogs.',
        categoryId: categoryRecords.find((c) => c.name === 'CMSs')!.id,
      },
      providers: [
        {
          name: 'WordPress.com',
          description: 'Managed hosting for WordPress websites.',
          imageUrl:
            'https://help.brevo.com/hc/article_attachments/12685441277458',
          features: [
            'Themes',
            'Plugins',
            'Managed hosting',
            'SEO tools',
            'Analytics',
            'E-commerce',
          ],
          fitsFor: [
            'Small businesses',
            'Personal blogs',
            'E-commerce',
            'News',
            'Portfolio',
          ],
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: [
                'Basic themes',
                'Community support',
                '3GB storage',
                'Free domain',
                'Jetpack essentials',
                'Dozens of free themes',
              ],
              limitations: 'Limited customization',
            },
            {
              tierName: 'Business',
              price: '25',
              features: [
                'Custom plugins',
                'Unlimited themes',
                '200GB storage',
                'SEO tools',
                'Google Analytics',
                'E-commerce',
              ],
              limitations: 'Higher costs',
            },
          ],
        },
      ],
    },
  ];

  const allData = [
    ...databases,
    ...cloudServices,
    ...paymentServices,
    ...cmsTools,
  ];

  // Insert Tools and Providers
  for (const data of allData) {
    const tool = await prisma.tool.create({
      data: {
        ...data.tool,
        providers: {
          create: data.providers.map((provider) => ({
            ...provider,
            pricingTiers: { create: provider.pricingTiers },
          })),
        },
      },
    });

    console.log(`Seeded tool: ${tool.name}`);
  }

  console.log('Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
