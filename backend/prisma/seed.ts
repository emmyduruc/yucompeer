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
      name: 'Project Management',
      description: `Project management streamline the planning, tracking, and execution of tasks within teams. Platforms like Jira, ClickUp, 
      and Trello offer features such as task assignment, progress tracking, and collaboration to enhance productivity. 
  
      The table below lets users compare these tools, providing detailed insights into pricing tiers, integrations, and feature sets. 
      This enables teams to select the most efficient solution for managing workflows and meeting project deadlines.`,
    },
    {
      name: 'Programming',
      description: `Programming, such as GitHub, GitLab, and Bitbucket, are essential for managing source code, collaboration, 
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
      name: 'No Code',
      description: `No code, like Webflow, Bubble, and Glide, empower users to create websites, mobile apps, and business tools 
      without writing any code. They feature drag-and-drop interfaces, pre-built templates, and integrations with popular services. 
  
      The table below provides comparisons of no-code based on pricing, scalability, and ease of use, 
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
        description:
          'Amazon Web Services (AWS) is a comprehensive cloud computing platform offering a wide range of services, including computing power, storage options, and machine learning capabilities. It provides scalable solutions suitable for startups to large enterprises, enabling users to build sophisticated applications with increased flexibility, scalability, and reliability. Note: AWS pricing is dynamic and can vary based on factors such as region, usage patterns, and specific service configurations. For the most accurate and up-to-date pricing information, it’s recommended to use the AWS Pricing Calculator and refer to the AWS Pricing page.',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'AWS',
          description:
            'AWS offers a broad set of global cloud-based products, including compute, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security, and enterprise applications. These services help organizations move faster, lower IT costs, and scale applications.',
          imageUrl: 'https://saviynt.com/hubfs/aws.png',
          features: [
            'Compute services (e.g., EC2)',
            'Storage services (e.g., S3)',
            'Database services (e.g., RDS)',
            'Machine Learning services (e.g., SageMaker)',
            'IoT services (e.g., IoT Core)',
            'Networking services (e.g., VPC)',
            'Content Delivery (e.g., CloudFront)',
            'Developer Tools (e.g., CodeBuild)',
            'Management Tools (e.g., CloudWatch)',
            'Security & Identity (e.g., IAM)',
          ],
          fitsFor: [
            'Large-scale applications',
            'Enterprise solutions',
            'Startups',
            'Data analytics',
            'Machine learning workloads',
          ],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free Tier',
              price: '0',
              features: [
                '750 hours per month of EC2 t2.micro or t3.micro instances for 12 months',
                '5GB of standard storage in S3 with 20,000 GET and 2,000 PUT requests per month for 12 months',
                '30GB of EBS storage for 12 months',
                '750 hours per month of RDS Single-AZ db.t2.micro or db.t3.micro instances with 20GB storage for 12 months',
                '25GB of DynamoDB storage with 25 provisioned Write Capacity Units and 25 Read Capacity Units, plus 2.5 million stream read requests per month, always free',
                '1 million Lambda requests and 3.2 million seconds of compute time per month, always free',
              ],
              limitations:
                'Some services are free for 12 months; others have always-free limits. Usage beyond free tier limits incurs standard charges.',
            },
            {
              tierName: 'On-Demand',
              price: 'Varies by service and usage',
              features: [
                'No upfront costs',
                'Pay for compute capacity by the hour or second (minimum of 60 seconds) with no long-term commitments',
                'Scale compute capacity up or down automatically according to demand',
              ],
              limitations:
                'Costs can increase with heavy or unpredictable usage; monitoring and cost management are recommended.',
            },
            {
              tierName: 'Savings Plans',
              price: 'Varies based on commitment',
              features: [
                'Up to 72% savings over On-Demand pricing in exchange for a commitment to a consistent amount of usage (measured in $/hour) for a 1- or 3-year term',
                'Compute Savings Plans apply to usage across Amazon EC2, AWS Lambda, and AWS Fargate',
                'EC2 Instance Savings Plans provide the lowest prices but are less flexible, applying to specific instance families in a region',
              ],
              limitations:
                'Requires commitment to consistent usage; changes in usage patterns can affect savings.',
            },
            {
              tierName: 'Spot Instances',
              price: 'Up to 90% discount compared to On-Demand prices',
              features: [
                'Access unused EC2 capacity at reduced rates',
                'Suitable for fault-tolerant, flexible applications such as big data, containerized workloads, CI/CD, web servers, high-performance computing (HPC), and test & development workloads',
              ],
              limitations:
                'Instances can be interrupted by AWS with a two-minute warning when AWS needs the capacity back; not suitable for all workloads.',
            },
            {
              tierName: 'Reserved Instances',
              price: 'Varies based on term and payment option',
              features: [
                'Significant discount (up to 75%) compared to On-Demand pricing in exchange for a 1- or 3-year commitment',
                'Options for All Upfront, Partial Upfront, or No Upfront payments',
                'Convertible Reserved Instances allow changing the instance type, operating system, and tenancy during the term',
              ],
              limitations:
                'Less flexibility; commitment to specific instance attributes required.',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Google Cloud Platform (GCP)',
        description:
          'Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products. GCP offers a range of services including computing, storage, and machine learning. Note: GCP pricing varies based on the specific services utilized and consumption levels, ranging from €0 to over €2,000 depending on usage. For precise and current pricing details, it’s recommended to use the GCP Pricing Calculator and refer to the GCP Pricing page.',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Google Cloud Platform',
          description:
            'GCP provides a comprehensive suite of cloud services, including compute, storage, databases, machine learning, and networking, enabling businesses to build, deploy, and scale applications efficiently.',
          imageUrl:
            'https://cloud.google.com/images/social-icon-google-cloud-1200-630.png',
          features: [
            'Compute Engine',
            'Cloud Storage',
            'BigQuery',
            'Kubernetes Engine',
            'Cloud Functions',
            'AI Platform',
            'Cloud Pub/Sub',
            'Cloud Spanner',
            'Cloud Run',
            'Anthos',
          ],
          fitsFor: [
            'Scalable web applications',
            'Data analytics',
            'Machine learning workloads',
            'Enterprise solutions',
            'Startups',
          ],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free Tier',
              price: '0',
              features: [
                '300 USD in free credits for new customers',
                '20+ free products with monthly usage limits',
                '750 hours per month of f1-micro instance usage',
                '5GB of Regional Storage per month',
                '50GB of Cloud Storage per month',
                '1 million Cloud Functions invocations per month',
              ],
              limitations:
                'Usage limits apply; overages are billed at standard rates.',
            },
            {
              tierName: 'On-Demand',
              price: 'Varies by service and usage',
              features: [
                'Pay-as-you-go pricing with no upfront costs',
                'Per-second billing for Compute Engine instances',
                'Automatic sustained use discounts',
                'Custom machine types to optimize costs',
              ],
              limitations:
                'Costs can increase with higher usage; monitoring recommended.',
            },
            {
              tierName: 'Committed Use Contracts',
              price: 'Varies based on commitment',
              features: [
                'Up to 57% savings for 1- or 3-year commitments',
                'Applicable to Compute Engine resources',
                'Predictable costs for consistent workloads',
              ],
              limitations:
                'Requires commitment to specific resources; less flexibility.',
            },
            {
              tierName: 'Preemptible VMs',
              price: 'Up to 80% discount compared to standard VMs',
              features: [
                'Short-lived instances suitable for batch jobs and fault-tolerant workloads',
                'Lower cost for non-critical applications',
              ],
              limitations:
                'Instances can be terminated by GCP at any time; not suitable for all workloads.',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'DigitalOcean',
        description:
          'DigitalOcean is a cloud computing platform offering a range of services tailored for developers, startups, and small to medium-sized businesses. It provides scalable virtual machines, managed databases, and various developer tools to simplify the deployment and management of applications. Note: DigitalOcean’s pricing varies based on the specific services utilized and consumption levels, ranging from €0 to over €2,000 depending on usage. For precise and current pricing details, it’s recommended to use the DigitalOcean Pricing Calculator and refer to the DigitalOcean Pricing page.',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'DigitalOcean',
          description:
            'DigitalOcean offers developer-friendly cloud services that make it simple to deploy, manage, and scale applications. With a focus on simplicity and performance, it provides a range of products including Droplets (virtual machines), Kubernetes, and Managed Databases.',
          imageUrl:
            'https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/663493a39256fb822704088b_DigitalOcean.webp',
          features: [
            'Droplets (Virtual Machines)',
            'Kubernetes',
            'Managed Databases',
            'App Platform',
            'Block Storage',
            'Object Storage (Spaces)',
            'Load Balancers',
            'VPC Networking',
            'Monitoring and Alerts',
            'API Access',
          ],
          fitsFor: [
            'Small to medium businesses',
            'Startups',
            'Developers',
            'Web applications',
            'E-commerce sites',
          ],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free Trial',
              price: '0',
              features: [
                '60-day trial with $200 credit',
                'Access to all products and services',
              ],
              limitations:
                'Requires valid credit card; credits expire after 60 days',
            },
            {
              tierName: 'Basic Droplets',
              price: '5',
              features: ['1 vCPU', '1GB RAM', '25GB SSD', '1TB Bandwidth'],
              limitations: 'Shared CPU; suitable for low-traffic applications',
            },
            {
              tierName: 'General Purpose Droplets',
              price: '60',
              features: ['2 vCPUs', '8GB RAM', '25GB SSD', '4TB Bandwidth'],
              limitations: 'None; suitable for balanced workloads',
            },
            {
              tierName: 'CPU-Optimized Droplets',
              price: '40',
              features: [
                '2 dedicated vCPUs',
                '4GB RAM',
                '25GB NVMe SSD',
                '4TB Bandwidth',
              ],
              limitations: 'Optimized for CPU-intensive tasks',
            },
            {
              tierName: 'Memory-Optimized Droplets',
              price: '84',
              features: [
                '2 vCPUs',
                '16GB RAM',
                '50GB NVMe SSD',
                '5TB Bandwidth',
              ],
              limitations: 'Optimized for memory-intensive applications',
            },
            {
              tierName: 'App Platform Free Tier',
              price: '0',
              features: [
                'Deploy up to 3 static sites',
                '1 GiB outbound data transfer per app/month',
              ],
              limitations: 'Static sites only; additional apps at $3/month',
            },
            {
              tierName: 'App Platform Basic Tier',
              price: '5',
              features: ['1 vCPU', '512MB RAM', '10GB SSD', '500GB Bandwidth'],
              limitations: 'Shared CPU; suitable for small applications',
            },
            {
              tierName: 'App Platform Professional Tier',
              price: '12',
              features: ['1 vCPU', '1GB RAM', '25GB SSD', '1TB Bandwidth'],
              limitations: 'Includes autoscaling and multiple containers',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Netlify',
        description:
          'Netlify is a cloud platform that revolutionizes modern web development by automating builds, deployments, and scaling of websites and applications. Designed for developers, it simplifies workflows with features like serverless functions, continuous deployment, and deploy previews. Note: Netlify’s pricing varies based on features and bandwidth usage, ranging from free for individual developers to enterprise-level plans with custom pricing. Refer to the Netlify Pricing page for the most up-to-date and specific pricing information.',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Netlify',
          description:
            'Netlify is a platform built for developers to build, deploy, and scale modern web projects seamlessly. It supports the Jamstack architecture, making it an ideal choice for static sites and serverless applications.',
          imageUrl:
            'https://cdn.cosmicjs.com/547d4e20-dd7e-11ee-b074-b5c8fe3ef189-netlify-light.png',
          features: [
            'Serverless Functions',
            'Deploy Previews',
            'Integrated CDN',
            'Continuous Deployment',
            'Custom Domains',
            'Split Testing',
            'Forms Handling',
            'Analytics',
            'Edge Handlers',
            'Environment Variables Management',
          ],
          fitsFor: [
            'Static websites',
            'Jamstack apps',
            'Portfolio sites',
            'E-commerce platforms',
            'Business websites',
          ],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: [
                'Unlimited personal projects',
                '100GB bandwidth per month',
                '1 team member',
                '1 build per minute',
                'Free continuous deployment',
                'Deploy Previews',
              ],
              limitations:
                'Limited team collaboration; 125k serverless function executions per month',
            },
            {
              tierName: 'Pro',
              price: '19',
              features: [
                'Unlimited team members',
                '1TB bandwidth per month',
                'Priority email support',
                'Unlimited build minutes',
                'Password-protected sites',
              ],
              limitations:
                'Additional bandwidth and serverless usage charged separately',
            },
            {
              tierName: 'Business',
              price: '99',
              features: [
                'Advanced collaboration tools',
                'Unlimited team members',
                '1.5TB bandwidth per month',
                'SAML Single Sign-On',
                'Build prioritization',
                'Audit logs',
                'Enterprise-grade security',
              ],
              limitations: 'Additional costs for bandwidth overages',
            },
            {
              tierName: 'Enterprise',
              price: 'Custom',
              features: [
                'Custom SLA',
                'Dedicated support engineer',
                'Enterprise-grade security and compliance',
                'Custom bandwidth and build minutes',
                'Custom pricing for large-scale projects',
              ],
              limitations: 'Requires consultation for pricing',
            },
          ],
        },
      ],
    },

    {
      tool: {
        name: 'Vercel',
        description:
          'A platform optimized for frontend frameworks and static sites, enabling developers to build and deploy Jamstack applications with global scalability and serverless architecture.',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Vercel',
          description:
            'Vercel offers a global edge network for high-performance website hosting and static site generation. Perfect for modern web development workflows like Next.js.',
          imageUrl:
            'https://ml.globenewswire.com/Resource/Download/3a54c241-a668-4c94-9747-3d3da9da3bf2',
          features: [
            'Serverless Functions',
            'Edge Functions',
            'Automatic scaling',
            'CI/CD integration',
          ],
          fitsFor: ['React apps', 'Next.js apps', 'Static sites'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Hobby',
              price: '0',
              features: ['Free personal projects', '100GB bandwidth/month'],
              limitations: 'Single user only',
            },
            {
              tierName: 'Pro',
              price: '20',
              features: ['Collaborative teams', 'Unlimited bandwidth'],
              limitations: 'Additional costs for enterprise features',
            },
            {
              tierName: 'Enterprise',
              price: 'Custom',
              features: [
                'Enterprise-grade security',
                'Custom SLA',
                'Priority support',
              ],
              limitations: 'Custom pricing based on requirements',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Linode',
        description:
          'Linode is a developer-focused cloud hosting platform offering virtual private servers with predictable pricing and reliable performance.',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Linode',
          description:
            'Linode provides affordable cloud hosting with a focus on simplicity and reliability for developers and small businesses.',
          imageUrl:
            'https://assets.wheelhouse.com/media/_solution_logo_09262023_9626387.png',
          features: [
            'Virtual Machines (VMs)',
            'Load Balancers',
            'Block Storage',
          ],
          fitsFor: ['Small businesses', 'Developers', 'Startups'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Standard',
              price: '5',
              features: ['1GB RAM', '25GB SSD', '1TB Bandwidth'],
              limitations: 'Basic compute only',
            },
            {
              tierName: 'High Memory',
              price: '30',
              features: ['24GB RAM', '10TB Bandwidth'],
              limitations: 'Optimized for high-memory workloads',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Azure',
        description:
          'Microsoft Azure offers a comprehensive suite of cloud computing services for building, deploying, and managing applications on a global scale. Note: Azure pricing depends on service configurations, with costs ranging from free tiers to enterprise-level pricing. Refer to the Azure Pricing Calculator for accurate estimates.',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Azure',
          description:
            'Azure is a cloud platform offering services like VMs, databases, AI tools, and enterprise-grade solutions with global availability.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/800px-Microsoft_Azure.svg.png',
          features: [
            'Virtual Machines',
            'Kubernetes Services',
            'AI and ML capabilities',
            'Databases',
            'Content Delivery Network (CDN)',
          ],
          fitsFor: [
            'Large-scale enterprise applications',
            'Data analytics',
            'Global applications',
          ],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['$200 credits', '25GB storage'],
              limitations: '30-day trial',
            },
            {
              tierName: 'Pay-as-you-go',
              price: 'Varies',
              features: ['Flexible pricing based on usage'],
              limitations: 'Can become expensive for heavy usage',
            },
            {
              tierName: 'Enterprise',
              price: 'Custom',
              features: ['Custom configurations and SLAs'],
              limitations: 'Pricing varies by requirements',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Render',
        description:
          'Render is a unified cloud platform to build and deploy web apps, APIs, and static sites, combining ease of use with powerful scaling options.',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Render',
          description:
            'Render provides an all-in-one cloud solution for developers to deploy scalable web apps, static sites, and APIs effortlessly.',
          imageUrl: 'https://render.com/images/logos/logo-on-white.png',
          features: [
            'Managed web services',
            'Static site hosting',
            'Cron jobs',
            'Private services',
            'Deploy previews',
          ],
          fitsFor: [
            'Developers',
            'Startups',
            'Web applications',
            'APIs',
            'Static websites',
          ],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Starter',
              price: '7',
              features: ['1 CPU', '512MB RAM', '100GB bandwidth'],
              limitations: 'Basic projects',
            },
            {
              tierName: 'Pro',
              price: '25',
              features: ['4 CPUs', '8GB RAM', 'Unlimited bandwidth'],
              limitations: 'Additional fees for scaling',
            },
            {
              tierName: 'Enterprise',
              price: 'Custom',
              features: ['Custom SLAs', 'Advanced security'],
              limitations: 'Custom pricing for large-scale deployments',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Hostinger',
        description:
          'Hostinger offers budget-friendly cloud hosting services with features like custom control panels and managed solutions.',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'Hostinger',
          description:
            'Hostinger delivers affordable cloud hosting solutions with an emphasis on performance and ease of use for individuals and small businesses.',
          imageUrl: 'https://hostinger.com/assets/images/logo/logo-icon.svg',
          features: [
            'Custom Control Panel',
            'Managed Hosting',
            'Free SSL',
            'Daily Backups',
          ],
          fitsFor: ['Small businesses', 'Freelancers', 'Portfolio sites'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Startup',
              price: '9.99',
              features: ['3GB RAM', '2 CPUs', '200GB SSD'],
              limitations: 'Entry-level workloads',
            },
            {
              tierName: 'Professional',
              price: '19.99',
              features: ['6GB RAM', '4 CPUs', '250GB SSD'],
              limitations: 'Higher workloads incur extra costs',
            },
            {
              tierName: 'Global',
              price: '39.99',
              features: ['16GB RAM', '8 CPUs', 'Unlimited bandwidth'],
              limitations: 'For global applications',
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
        description:
          'Stripe is a comprehensive online payment platform that supports payments, subscription billing, payouts, and a range of additional tools for fraud prevention and financial management.',
        categoryId: categoryRecords.find((c) => c.name === 'Payment Services')!
          .id,
      },
      providers: [
        {
          name: 'Stripe',
          description:
            'Stripe offers developer-friendly APIs and tools to manage payments and business transactions.',
          imageUrl: 'https://logos-marques.com/stripe-logo/stripe-logo/',
          features: [
            'Integrated payments',
            'Subscription billing',
            'Payouts',
            'Connect',
            'Radar (fraud prevention)',
            'Terminal (physical card payments)',
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
            {
              tierName: 'Custom Pricing',
              price: 'Negotiable',
              features: ['Volume discounts', 'Custom payment models'],
              limitations: 'Requires negotiation with Stripe sales',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'PayPal',
        description:
          'PayPal is a globally recognized online payment system that enables fast, secure transactions for individuals and businesses.',
        categoryId: categoryRecords.find((c) => c.name === 'Payment Services')!
          .id,
      },
      providers: [
        {
          name: 'PayPal',
          description:
            'PayPal provides seamless integration for online transactions and is widely accepted by merchants globally.',
          imageUrl:
            'https://qpro.nl/wp-content/uploads/2024/02/Paypal_2014_logo-e1708092007619.png.webp',
          features: ['One-click checkout', 'Global reach', 'Recurring billing'],
          fitsFor: [
            'E-commerce',
            'Cross-border transactions',
            'Marketplaces',
            'Nonprofits',
            'Freelancers',
          ],
          pricingTiers: [
            {
              tierName: 'Standard',
              price: '2.9',
              features: [
                '2.9% + 30¢ per transaction',
                'No setup fees',
                'No monthly fees',
              ],
              limitations: 'High transaction fees',
            },
            {
              tierName: 'Microtransactions',
              price: '5',
              features: ['5% + 5¢ for transactions under $10'],
              limitations: 'For small payments only',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Mollie',
        description:
          'Mollie is a European payment service provider that simplifies online payment processing with easy integrations.',
        categoryId: categoryRecords.find((c) => c.name === 'Payment Services')!
          .id,
      },
      providers: [
        {
          name: 'Mollie',
          description:
            'Mollie offers a wide range of payment methods, including credit cards, bank transfers, and local options like iDEAL and Klarna.',
          imageUrl: 'https://www.mollie.com/assets/images/logo.svg',
          features: [
            'Multi-currency support',
            'Recurring payments',
            'API integrations',
            'Fraud detection',
          ],
          fitsFor: ['E-commerce', 'Small businesses', 'Subscription services'],
          pricingTiers: [
            {
              tierName: 'Standard',
              price: '1.8',
              features: ['1.8% + fixed fee per transaction', 'No monthly fees'],
              limitations: 'Fees vary based on payment method',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Google Pay',
        description:
          'Google Pay is a digital wallet platform that enables users to make payments quickly and securely using their Google account.',
        categoryId: categoryRecords.find((c) => c.name === 'Payment Services')!
          .id,
      },
      providers: [
        {
          name: 'Google Pay',
          description:
            'Google Pay integrates with various online and in-store payment systems, offering seamless user experiences.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Pay_logo.svg/1200px-Google_Pay_logo.svg.png',
          features: [
            'Contactless payments',
            'Online payments',
            'Peer-to-peer transfers',
          ],
          fitsFor: ['E-commerce', 'Retail businesses', 'Mobile apps'],
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['No fees for users'],
              limitations: 'Business transaction fees vary by provider',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Apple Pay',
        description:
          'Apple Pay is a secure, contactless payment platform available for iOS devices.',
        categoryId: categoryRecords.find((c) => c.name === 'Payment Services')!
          .id,
      },
      providers: [
        {
          name: 'Apple Pay',
          description:
            'Apple Pay integrates seamlessly into apps and websites, enabling fast and secure transactions.',
          imageUrl:
            'https://developer.apple.com/assets/elements/icons/apple-pay/apple-pay-128x128_2x.png',
          features: [
            'Contactless payments',
            'Face ID and Touch ID authentication',
            'Secure transactions with tokenization',
          ],
          fitsFor: ['Retail businesses', 'E-commerce', 'Mobile apps'],
          pricingTiers: [
            {
              tierName: 'Standard',
              price: '0',
              features: ['No additional fees for merchants'],
              limitations: 'Requires integration with a payment processor',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Klarna',
        description:
          'Klarna is a payment platform specializing in "Buy Now, Pay Later" services and flexible payment plans.',
        categoryId: categoryRecords.find((c) => c.name === 'Payment Services')!
          .id,
      },
      providers: [
        {
          name: 'Klarna',
          description:
            'Klarna offers flexible payment options for customers, including installment plans and deferred payments.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Klarna_logo.svg/2560px-Klarna_logo.svg.png',
          features: [
            'Buy Now, Pay Later',
            'Installment payments',
            'Full purchase protection',
          ],
          fitsFor: ['E-commerce', 'Fashion', 'Electronics'],
          pricingTiers: [
            {
              tierName: 'Merchant Pricing',
              price: 'Varies',
              features: ['Custom pricing for merchants'],
              limitations: 'Fees depend on sales volume and region',
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
        description:
          'WordPress is a widely-used open-source CMS platform for building websites and blogs. It offers extensive customization options through themes and plugins, making it ideal for everything from personal blogs to e-commerce sites.',
        categoryId: categoryRecords.find((c) => c.name === 'CMSs')!.id,
      },
      providers: [
        {
          name: 'WordPress.com',
          description:
            'Managed hosting service for WordPress websites, providing tools for seamless website management and optimization.',
          imageUrl:
            'https://help.brevo.com/hc/article_attachments/12685441277458',
          features: [
            'Themes',
            'Plugins',
            'Managed hosting',
            'SEO tools',
            'Analytics',
            'E-commerce capabilities',
          ],
          fitsFor: [
            'Small businesses',
            'Personal blogs',
            'E-commerce',
            'News websites',
            'Portfolio sites',
          ],
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: [
                'Basic themes',
                'Community support',
                '3GB storage',
                'Free domain (subdomain)',
                'Jetpack essentials',
                'Dozens of free themes',
              ],
              limitations: 'Limited customization and branding options',
            },
            {
              tierName: 'Business',
              price: '25',
              features: [
                'Custom plugins',
                'Unlimited themes',
                '200GB storage',
                'SEO tools',
                'Google Analytics integration',
                'E-commerce support',
              ],
              limitations: 'Higher costs for premium features',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Strapi',
        description:
          'Strapi is an open-source, headless CMS that provides developers with the flexibility to build customized APIs and manage content effectively. It’s highly extensible and developer-focused, making it a popular choice for modern applications.',
        categoryId: categoryRecords.find((c) => c.name === 'CMSs')!.id,
      },
      providers: [
        {
          name: 'Strapi Cloud',
          description:
            'A managed hosting solution for deploying Strapi applications with ease.',
          imageUrl:
            'https://strapi.io/assets/2e7ccf6b86a052abbd225d51e4b39a65.svg',
          features: [
            'Headless CMS',
            'Customizable APIs',
            'Admin panel',
            'Rich text editor',
            'Media library',
            'Multi-language support',
          ],
          fitsFor: [
            'Developers',
            'API-driven apps',
            'E-commerce',
            'Custom projects',
          ],
          pricingTiers: [
            {
              tierName: 'Self-hosted',
              price: '0',
              features: ['Open source', 'Complete control', 'Custom hosting'],
              limitations:
                'Requires technical knowledge for setup and maintenance',
            },
            {
              tierName: 'Pro Cloud',
              price: '99',
              features: [
                'Managed hosting',
                'Scaling options',
                'Automatic backups',
                '24/7 support',
              ],
              limitations: 'Limited to hosted environments',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Flamelink',
        description:
          'Flamelink is a Firebase CMS that allows developers to manage content efficiently for Firebase-powered apps. It is ideal for real-time apps, mobile applications, and IoT projects.',
        categoryId: categoryRecords.find((c) => c.name === 'CMSs')!.id,
      },
      providers: [
        {
          name: 'Flamelink',
          description:
            'A Firebase-integrated CMS offering real-time content updates and seamless app integration.',
          imageUrl: 'https://flamelink.io/assets/images/logo.svg',
          features: [
            'Firebase integration',
            'Real-time content updates',
            'Schema builder',
            'Media library',
            'Multi-language support',
            'Role-based permissions',
          ],
          fitsFor: [
            'Mobile apps',
            'IoT projects',
            'Real-time apps',
            'Startups',
          ],
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: [
                'Basic content management',
                'Limited users',
                'Limited schemas',
              ],
              limitations: 'Limited to small projects',
            },
            {
              tierName: 'Pro',
              price: '50',
              features: [
                'Unlimited users',
                'Advanced schemas',
                'Priority support',
              ],
              limitations: 'Higher cost for additional Firebase usage',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Ghost',
        description:
          'Ghost is a lightweight, modern CMS designed for professional blogging and publishing. It is highly customizable and offers robust tools for content creation, SEO, and monetization.',
        categoryId: categoryRecords.find((c) => c.name === 'CMSs')!.id,
      },
      providers: [
        {
          name: 'Ghost',
          description:
            'An open-source CMS built for professional publishing and blogging.',
          imageUrl: 'https://ghost.org/images/logo.svg',
          features: [
            'Publishing tools',
            'SEO optimization',
            'Memberships and subscriptions',
            'Themes',
            'Analytics',
            'Email newsletters',
          ],
          fitsFor: [
            'Professional bloggers',
            'News websites',
            'Content creators',
          ],
          pricingTiers: [
            {
              tierName: 'Starter',
              price: '11',
              features: ['1 staff user', '10k monthly views', 'Custom themes'],
              limitations: 'Limited audience and team size',
            },
            {
              tierName: 'Business',
              price: '25',
              features: [
                'Unlimited staff users',
                'Advanced integrations',
                'Premium themes',
              ],
              limitations: 'Higher costs for larger teams',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Contentful',
        description:
          'Contentful is a modern headless CMS designed for developers and content teams to create, manage, and distribute content across multiple platforms.',
        categoryId: categoryRecords.find((c) => c.name === 'CMSs')!.id,
      },
      providers: [
        {
          name: 'Contentful',
          description:
            'Contentful provides a powerful API-driven CMS for managing content at scale.',
          imageUrl:
            'https://images.ctfassets.net/fo9twyrwpveg/6kQaSGLWpK7jLKhHMSWoKf/15692872c30e2ea54284e1b90f7ac53d/contentful-identity-1.png',
          features: [
            'Headless CMS',
            'Content modeling',
            'API access',
            'Localization',
            'Customizable workflows',
          ],
          fitsFor: [
            'Enterprise apps',
            'Multi-platform content distribution',
            'Developers',
          ],
          pricingTiers: [
            {
              tierName: 'Community',
              price: '0',
              features: ['5 users', '1 environment', '25k API requests/month'],
              limitations: 'Limited API usage and users',
            },
            {
              tierName: 'Enterprise',
              price: 'Custom',
              features: ['Unlimited API requests', 'Enterprise support'],
              limitations: 'Custom pricing required',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Sanity',
        description:
          'Sanity is a fully customizable headless CMS that allows teams to collaborate and manage structured content efficiently.',
        categoryId: categoryRecords.find((c) => c.name === 'CMSs')!.id,
      },
      providers: [
        {
          name: 'Sanity',
          description:
            'Sanity provides a real-time headless CMS with collaboration tools and a flexible content structure.',
          imageUrl: 'https://www.sanity.io/static/images/logo.png',
          features: [
            'Real-time collaboration',
            'Structured content',
            'API-first design',
            'Media management',
            'Custom workflows',
          ],
          fitsFor: [
            'Developers',
            'Content teams',
            'Enterprise apps',
            'Custom websites',
          ],
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['3 users', '1k API requests/day', '10GB bandwidth'],
              limitations: 'Limited API usage and team size',
            },
            {
              tierName: 'Pro',
              price: '99',
              features: [
                'Advanced features',
                'Unlimited users',
                '24/7 support',
              ],
              limitations: 'Higher costs for enterprise needs',
            },
          ],
        },
      ],
    },
  ];

  const noCodePlatforms = [
    {
      tool: {
        name: 'Webflow',
        description:
          'Webflow is a no-code platform for building responsive websites with advanced design capabilities, CMS, and hosting.',
        categoryId: categoryRecords.find((c) => c.name === 'No Code')!.id,
      },
      providers: [
        {
          name: 'Webflow',
          description:
            'Webflow combines design, CMS, and hosting capabilities in a no-code platform perfect for building modern, responsive websites.',
          imageUrl: 'https://webflow.com/images/webflow-logo-dark.svg',
          features: [
            'Drag-and-drop design editor',
            'CMS',
            'Responsive design',
            'Hosting',
            'Custom code embedding',
          ],
          fitsFor: ['Marketing websites', 'Portfolios', 'E-commerce'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['2 projects', 'Webflow branding', 'Limited CMS items'],
              limitations: 'No custom domain',
            },
            {
              tierName: 'Lite',
              price: '16/month',
              features: ['Unlimited projects', 'Custom domain'],
              limitations: 'Limited CMS features',
            },
            {
              tierName: 'Pro',
              price: '35/month',
              features: [
                'White labeling',
                'Advanced CMS items',
                'Site exporting',
              ],
              limitations: 'None',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Bubble',
        description:
          'Bubble is a powerful no-code platform for building complex web applications without coding.',
        categoryId: categoryRecords.find((c) => c.name === 'No Code')!.id,
      },
      providers: [
        {
          name: 'Bubble',
          description:
            'Bubble allows you to build dynamic web applications with full functionality, from databases to workflows, using visual programming.',
          imageUrl: 'https://bubble.io/assets/images/bubble-logo.svg',
          features: [
            'Visual programming',
            'Database management',
            'Responsive design',
            'Custom workflows',
            'API integrations',
          ],
          fitsFor: ['Startups', 'Prototypes', 'SaaS platforms'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['2 users', 'Community support', 'Bubble branding'],
              limitations: 'No custom domain',
            },
            {
              tierName: 'Personal',
              price: '29/month',
              features: ['Custom domain', '10GB storage'],
              limitations: 'Limited app scalability',
            },
            {
              tierName: 'Professional',
              price: '129/month',
              features: [
                '2 collaborators',
                'High-capacity workflows',
                '20GB storage',
              ],
              limitations: 'None',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Adalo',
        description:
          'Adalo is a no-code platform for building mobile apps and deploying them to app stores without any coding.',
        categoryId: categoryRecords.find((c) => c.name === 'No Code')!.id,
      },
      providers: [
        {
          name: 'Adalo',
          description:
            'Adalo helps users create custom mobile applications using a drag-and-drop interface.',
          imageUrl: 'https://assets.adalo.com/images/logo-dark.svg',
          features: [
            'Drag-and-drop app builder',
            'Publishing to app stores',
            'Database management',
            'Custom workflows',
            'API integrations',
          ],
          fitsFor: ['Mobile apps', 'Prototypes', 'Startups'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['Unlimited apps', 'Adalo branding'],
              limitations: 'No publishing to app stores',
            },
            {
              tierName: 'Starter',
              price: '45/month',
              features: ['Custom domain', 'App store publishing'],
              limitations: 'Basic analytics',
            },
            {
              tierName: 'Pro',
              price: '65/month',
              features: [
                'Advanced analytics',
                'Custom workflows',
                'High app performance',
              ],
              limitations: 'None',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'OutSystems',
        description:
          'OutSystems is an enterprise-grade no-code/low-code platform for building scalable business applications.',
        categoryId: categoryRecords.find((c) => c.name === 'No Code')!.id,
      },
      providers: [
        {
          name: 'OutSystems',
          description:
            'OutSystems offers a high-performance application development platform with no-code and low-code tools for enterprises.',
          imageUrl: 'https://www.outsystems.com/logo.png',
          features: [
            'Enterprise application development',
            'Integrations',
            'Scalability',
            'AI-powered tools',
            'Workflow automation',
          ],
          fitsFor: ['Enterprises', 'Large-scale applications'],
          skillLevel: 'Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['1 environment', '1GB storage'],
              limitations: 'Limited environments and storage',
            },
            {
              tierName: 'Standard',
              price: '2000/month',
              features: ['Full-stack app development', 'Advanced integrations'],
              limitations: 'Best for medium teams',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Glide',
        description:
          'Glide is a no-code platform for building apps from Google Sheets and other data sources.',
        categoryId: categoryRecords.find((c) => c.name === 'No Code')!.id,
      },
      providers: [
        {
          name: 'Glide',
          description:
            'Glide allows you to create data-driven apps directly from spreadsheets with an intuitive drag-and-drop builder.',
          imageUrl: 'https://glideapps.com/images/glide-logo.svg',
          features: [
            'Spreadsheet-driven apps',
            'Custom design',
            'Live data syncing',
            'API integrations',
            'Responsive design',
          ],
          fitsFor: ['Business apps', 'Event management', 'Prototypes'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['100 rows', '500 data edits'],
              limitations: 'Glide branding',
            },
            {
              tierName: 'Pro',
              price: '32/month',
              features: ['25,000 rows', 'Custom branding', 'Advanced features'],
              limitations: 'Limited to specific storage capacities',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Airtable',
        description:
          'Airtable is a no-code platform for organizing data and automating workflows through visual databases.',
        categoryId: categoryRecords.find((c) => c.name === 'No Code')!.id,
      },
      providers: [
        {
          name: 'Airtable',
          description:
            'Airtable combines spreadsheets and databases to organize data, automate processes, and build workflows.',
          imageUrl: 'https://airtable.com/images/brand/brandmark.png',
          features: [
            'Relational databases',
            'Custom views',
            'Automations',
            'Integrations',
            'Templates',
          ],
          fitsFor: ['Project management', 'CRM', 'Data organization'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['Unlimited bases', '100 automations/month'],
              limitations: 'Limited record storage',
            },
            {
              tierName: 'Pro',
              price: '20/user/month',
              features: ['50,000 records per base', 'Advanced apps'],
              limitations: 'None',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Zapier',
        description:
          'Zapier is a no-code automation platform that connects apps to automate workflows.',
        categoryId: categoryRecords.find((c) => c.name === 'No Code')!.id,
      },
      providers: [
        {
          name: 'Zapier',
          description:
            'Zapier connects over 5,000 apps to help users automate repetitive tasks without coding.',
          imageUrl: 'https://zapier.com/logo.png',
          features: [
            'Workflow automation',
            'App integrations',
            'Multi-step zaps',
            'Advanced logic paths',
          ],
          fitsFor: ['Businesses', 'Marketers', 'Freelancers'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['100 tasks/month', 'Single-step zaps'],
              limitations: 'Limited tasks and workflows',
            },
            {
              tierName: 'Starter',
              price: '19.99/month',
              features: ['750 tasks/month', 'Multi-step workflows'],
              limitations: 'Basic support',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Wix',
        description:
          'Wix is a no-code website builder that allows users to create professional-looking websites with ease using a drag-and-drop editor.',
        categoryId: categoryRecords.find((c) => c.name === 'No Code')!.id,
      },
      providers: [
        {
          name: 'Wix',
          description:
            'Wix is an all-in-one website builder platform that offers hosting, templates, and custom design capabilities for beginners and professionals.',
          imageUrl: 'https://www.wix.com/favicon.ico',
          features: [
            'Drag-and-drop editor',
            'Built-in SEO tools',
            'E-commerce capabilities',
            'Custom domains',
            'App marketplace',
          ],
          fitsFor: ['Small businesses', 'E-commerce', 'Portfolio websites'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['Wix ads on site', '500MB storage', 'Wix subdomain'],
              limitations: 'Wix branding; no custom domain',
            },
            {
              tierName: 'Combo',
              price: '16/month',
              features: [
                'Custom domain',
                '2GB bandwidth',
                '3GB storage',
                'No ads',
              ],
              limitations: 'Limited storage and bandwidth',
            },
            {
              tierName: 'Unlimited',
              price: '22/month',
              features: [
                'Unlimited bandwidth',
                '10GB storage',
                'Visitor analytics',
              ],
              limitations: 'No advanced e-commerce features',
            },
            {
              tierName: 'Business Basic',
              price: '27/month',
              features: [
                'E-commerce support',
                '20GB storage',
                'Secure payments',
              ],
              limitations: 'Basic e-commerce tools only',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'AppGyver',
        description:
          'AppGyver is a no-code platform for creating complex, high-performance web and mobile applications.',
        categoryId: categoryRecords.find((c) => c.name === 'No Code')!.id,
      },
      providers: [
        {
          name: 'AppGyver',
          description:
            'AppGyver offers a powerful visual builder for creating full-stack applications without writing code.',
          imageUrl: 'https://www.appgyver.com/images/favicon.ico',
          features: [
            'Drag-and-drop UI builder',
            'Custom logic editor',
            'API integration',
            'Cross-platform deployment',
            'Data storage integration',
          ],
          fitsFor: ['Mobile apps', 'Enterprise solutions', 'Prototypes'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: [
                'Unlimited users',
                'Access to all features',
                'Deploy to web and mobile',
              ],
              limitations: 'No enterprise support',
            },
            {
              tierName: 'Enterprise',
              price: 'Custom',
              features: [
                'Enterprise-grade support',
                'Custom integrations',
                'Advanced scalability',
              ],
              limitations: 'Requires consultation for pricing',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Softr',
        description:
          'Softr is a no-code platform for building web apps, internal tools, and client portals using Airtable or Google Sheets as a backend.',
        categoryId: categoryRecords.find((c) => c.name === 'No Code')!.id,
      },
      providers: [
        {
          name: 'Softr',
          description:
            'Softr helps users turn Airtable and Google Sheets data into fully functional web applications and portals without writing code.',
          imageUrl: 'https://www.softr.io/favicon.ico',
          features: [
            'Pre-built templates',
            'User authentication',
            'Customizable layouts',
            'Third-party integrations',
            'Responsive design',
          ],
          fitsFor: ['Client portals', 'Internal tools', 'Dashboards'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['1 app', 'Up to 200 records', 'Limited templates'],
              limitations: 'Softr branding; limited records',
            },
            {
              tierName: 'Starter',
              price: '24/month',
              features: ['5 apps', 'Up to 5,000 records', 'Custom branding'],
              limitations: 'Limited advanced features',
            },
            {
              tierName: 'Professional',
              price: '59/month',
              features: [
                'Unlimited apps',
                'Up to 25,000 records',
                'Advanced integrations',
              ],
              limitations: 'Best for growing businesses',
            },
            {
              tierName: 'Business',
              price: '129/month',
              features: [
                'Unlimited apps',
                'Unlimited records',
                'Custom roles',
                'Advanced workflows',
              ],
              limitations: 'Best for large teams and enterprises',
            },
          ],
        },
      ],
    },
  ];
  const ide = [
    {
      tool: {
        name: 'Visual Studio Code',
        description:
          'A lightweight yet powerful source code editor developed by Microsoft, supporting a wide range of programming languages, extensions, and features like debugging and Git integration.',
        categoryId: categoryRecords.find((c) => c.name === 'IDEs')!.id,
      },
      providers: [
        {
          name: 'Visual Studio Code',
          description:
            'A free, open-source editor with an extensive ecosystem of plugins for enhanced development workflows.',
          imageUrl: 'https://code.visualstudio.com/favicon.ico',
          features: [
            'Extensible plugin ecosystem',
            'Integrated terminal',
            'Debugging tools',
            'Version control integration',
            'Support for multiple languages',
          ],
          fitsFor: ['Web development', 'Backend development', 'Data science'],
          skillLevel: 'Beginner to Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['Full access to all features'],
              limitations: 'None',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'IntelliJ IDEA',
        description:
          'A feature-rich IDE developed by JetBrains, specifically optimized for Java and Kotlin development, offering tools for debugging, testing, and code analysis.',
        categoryId: categoryRecords.find((c) => c.name === 'IDEs')!.id,
      },
      providers: [
        {
          name: 'IntelliJ IDEA',
          description:
            'JetBrains’ IntelliJ IDEA is widely regarded as one of the best IDEs for Java, providing productivity-focused tools and seamless integration with frameworks.',
          imageUrl: 'https://www.jetbrains.com/favicon.ico',
          features: [
            'Intelligent code completion',
            'Built-in refactoring tools',
            'Database tools',
            'Version control integration',
            'Spring and Hibernate support',
          ],
          fitsFor: [
            'Java development',
            'Kotlin projects',
            'Enterprise solutions',
          ],
          skillLevel: 'Intermediate to Advanced',
          pricingTiers: [
            {
              tierName: 'Community Edition',
              price: '0',
              features: ['Basic Java support', 'Git integration'],
              limitations:
                'Lacks advanced features like Spring and Hibernate tools',
            },
            {
              tierName: 'Ultimate Edition',
              price: '14.90/month',
              features: [
                'Comprehensive support for frameworks',
                'Advanced debugging tools',
                'Integrated development tools',
                'Database tools',
              ],
              limitations: 'Paid subscription required for premium features',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'PyCharm',
        description:
          'An IDE by JetBrains tailored for Python development, providing intelligent code assistance, debugging tools, and scientific libraries integration.',
        categoryId: categoryRecords.find((c) => c.name === 'IDEs')!.id,
      },
      providers: [
        {
          name: 'PyCharm',
          description:
            'A professional Python IDE with features for web development, data science, and scientific computing.',
          imageUrl: 'https://www.jetbrains.com/favicon.ico',
          features: [
            'Python-specific code assistance',
            'Integrated debugging tools',
            'Version control system',
            'Database support',
            'Scientific tools integration',
          ],
          fitsFor: ['Python development', 'Data analysis', 'Web frameworks'],
          skillLevel: 'Beginner to Advanced',
          pricingTiers: [
            {
              tierName: 'Community Edition',
              price: '0',
              features: ['Basic Python support', 'Git integration'],
              limitations: 'Limited web and database tools',
            },
            {
              tierName: 'Professional Edition',
              price: '9.90/month',
              features: [
                'Full-stack development tools',
                'Advanced debugging and testing',
                'Scientific libraries support',
                'Database tools',
              ],
              limitations: 'Requires a paid subscription for premium features',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Eclipse',
        description:
          'A widely-used open-source IDE for Java development with plugin support for other programming languages and tools.',
        categoryId: categoryRecords.find((c) => c.name === 'IDEs')!.id,
      },
      providers: [
        {
          name: 'Eclipse',
          description:
            'A versatile IDE used for Java development and extensible through its vast ecosystem of plugins.',
          imageUrl: 'https://www.eclipse.org/favicon.ico',
          features: [
            'Plugin-based architecture',
            'Code refactoring tools',
            'Integrated debugger',
            'Version control integration',
            'Web development support',
          ],
          fitsFor: ['Java development', 'Web development', 'Large projects'],
          skillLevel: 'Intermediate to Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['All features included'],
              limitations: 'None',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'WebStorm',
        description:
          'A JavaScript-focused IDE by JetBrains, providing comprehensive support for modern web development frameworks and tools.',
        categoryId: categoryRecords.find((c) => c.name === 'IDEs')!.id,
      },
      providers: [
        {
          name: 'WebStorm',
          description:
            'A professional IDE for JavaScript development with intelligent coding assistance and debugging tools.',
          imageUrl: 'https://www.jetbrains.com/favicon.ico',
          features: [
            'Smart code completion',
            'Debugging tools',
            'Version control integration',
            'Framework support (React, Angular, Vue)',
            'Built-in terminal',
          ],
          fitsFor: [
            'Web development',
            'JavaScript frameworks',
            'Node.js projects',
          ],
          skillLevel: 'Intermediate to Advanced',
          pricingTiers: [
            {
              tierName: 'Trial',
              price: '0',
              features: ['Full access for 30 days'],
              limitations: 'Limited to 30 days',
            },
            {
              tierName: 'Subscription',
              price: '14.90/month',
              features: [
                'Unlimited access to all features',
                'Priority support',
              ],
              limitations: 'Requires ongoing subscription',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Xcode',
        description:
          'Apple’s official IDE for developing apps for macOS, iOS, watchOS, and tvOS.',
        categoryId: categoryRecords.find((c) => c.name === 'IDEs')!.id,
      },
      providers: [
        {
          name: 'Xcode',
          description:
            'Xcode is Apple’s comprehensive development environment for building apps for all Apple platforms.',
          imageUrl: 'https://developer.apple.com/favicon.ico',
          features: [
            'Interface Builder',
            'Swift programming support',
            'iOS Simulator',
            'Debugging tools',
            'Performance monitoring',
          ],
          fitsFor: ['iOS development', 'macOS development', 'Swift projects'],
          skillLevel: 'Intermediate to Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['All features included'],
              limitations: 'macOS-only',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Atom',
        description:
          'An open-source text editor for developers, known for its customization and GitHub integration.',
        categoryId: categoryRecords.find((c) => c.name === 'IDEs')!.id,
      },
      providers: [
        {
          name: 'Atom',
          description:
            'A hackable text editor for modern developers, offering extensive customization options.',
          imageUrl: 'https://atom.io/favicon.ico',
          features: [
            'Extensive customization',
            'GitHub integration',
            'Package manager',
            'Multiple panes',
            'Cross-platform support',
          ],
          fitsFor: ['Web development', 'Open-source projects'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['All features included'],
              limitations: 'None',
            },
          ],
        },
      ],
    },
  ];
  const developmentWorkflowTools = [
    {
      tool: {
        name: 'GitHub',
        description:
          'A cloud-based platform for version control and collaboration, allowing developers to host and review code, manage projects, and build software together.',
        categoryId: categoryRecords.find((c) => c.name === 'Programming')!.id,
      },
      providers: [
        {
          name: 'GitHub',
          description:
            'GitHub provides a comprehensive platform for code collaboration and version control with features like pull requests, CI/CD, and project boards.',
          imageUrl: 'https://github.githubassets.com/favicons/favicon.png',
          features: [
            'Version control',
            'Pull requests',
            'Code review',
            'GitHub Actions for CI/CD',
            'Issue tracking',
          ],
          fitsFor: ['Open-source projects', 'Team collaboration', 'DevOps'],
          skillLevel: 'Beginner to Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['Unlimited public repositories', 'Community support'],
              limitations: 'Limited private repositories',
            },
            {
              tierName: 'Pro',
              price: '4/month',
              features: ['Unlimited private repositories', 'Advanced tools'],
              limitations: 'Individual users only',
            },
            {
              tierName: 'Enterprise',
              price: 'Custom',
              features: ['Enterprise-grade security', 'Custom SLAs'],
              limitations: 'Requires consultation',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'GitLab',
        description:
          'A web-based DevOps lifecycle tool providing a Git repository manager with features for issue tracking, CI/CD, and more.',
        categoryId: categoryRecords.find((c) => c.name === 'Programming')!.id,
      },
      providers: [
        {
          name: 'GitLab',
          description:
            'GitLab is a DevOps platform that unifies source code management, CI/CD, and project management in one place.',
          imageUrl: 'https://about.gitlab.com/images/favicon.png',
          features: [
            'Git repository hosting',
            'Integrated CI/CD pipelines',
            'Issue tracking',
            'Merge requests',
            'Code quality reports',
          ],
          fitsFor: ['DevOps', 'CI/CD workflows', 'Team collaboration'],
          skillLevel: 'Intermediate to Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['Basic CI/CD', '5GB storage'],
              limitations: 'Limited runners and integrations',
            },
            {
              tierName: 'Premium',
              price: '19/user/month',
              features: ['Priority support', 'Advanced CI/CD features'],
              limitations: 'Requires per-user subscription',
            },
            {
              tierName: 'Ultimate',
              price: '99/user/month',
              features: ['Complete DevOps tools', 'Advanced analytics'],
              limitations: 'High cost for smaller teams',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Bitbucket',
        description:
          'A Git repository management solution designed for professional teams, offering CI/CD pipelines and integration with Jira.',
        categoryId: categoryRecords.find((c) => c.name === 'Programming')!.id,
      },
      providers: [
        {
          name: 'Bitbucket',
          description:
            'Bitbucket provides Git hosting and collaboration tools for teams, tightly integrated with Atlassian products like Jira.',
          imageUrl: 'https://wac-cdn.atlassian.com/assets/favicon.8e19614d.ico',
          features: [
            'Git repository hosting',
            'Pull requests',
            'Pipelines for CI/CD',
            'Integration with Jira',
            'Branch permissions',
          ],
          fitsFor: ['Teams using Atlassian tools', 'CI/CD workflows'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['5 users', '50 build minutes/month'],
              limitations: 'Limited to small teams',
            },
            {
              tierName: 'Standard',
              price: '3/user/month',
              features: ['Unlimited repositories', '2,500 build minutes/month'],
              limitations: 'Additional costs for higher usage',
            },
            {
              tierName: 'Premium',
              price: '6/user/month',
              features: ['Advanced permissions', '10,000 build minutes/month'],
              limitations: 'Higher cost for large teams',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Jenkins',
        description:
          'An open-source automation server that helps automate parts of the software development lifecycle, including building, testing, and deploying.',
        categoryId: categoryRecords.find((c) => c.name === 'Programming')!.id,
      },
      providers: [
        {
          name: 'Jenkins',
          description:
            'Jenkins is a widely used open-source automation tool for continuous integration and continuous delivery.',
          imageUrl: 'https://jenkins.io/favicon.ico',
          features: [
            'Extensible with plugins',
            'Automated builds',
            'Continuous integration',
            'Distributed builds',
            'Integration with version control systems',
          ],
          fitsFor: ['CI/CD workflows', 'Automation tasks'],
          skillLevel: 'Intermediate to Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['Unlimited access to all features'],
              limitations: 'Requires setup and maintenance',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Azure DevOps',
        description:
          'A cloud-based DevOps service by Microsoft that offers CI/CD pipelines, project management, and version control.',
        categoryId: categoryRecords.find((c) => c.name === 'Programming')!.id,
      },
      providers: [
        {
          name: 'Azure DevOps',
          description:
            'Azure DevOps is a set of development tools for version control, agile planning, and continuous delivery.',
          imageUrl: 'https://azure.microsoft.com/favicon.ico',
          features: [
            'Agile project management',
            'Version control with Git',
            'CI/CD pipelines',
            'Test plans',
            'Integrated dashboards',
          ],
          fitsFor: ['Enterprise solutions', 'DevOps workflows'],
          skillLevel: 'Intermediate to Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['5 users', 'Unlimited private repositories'],
              limitations: 'Limited to small teams',
            },
            {
              tierName: 'Basic Plan',
              price: '6/user/month',
              features: ['10 users', 'Advanced pipelines'],
              limitations: 'Additional costs for larger teams',
            },
            {
              tierName: 'Enterprise',
              price: 'Custom',
              features: ['Advanced security', 'Custom SLAs'],
              limitations: 'Custom pricing based on needs',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'CircleCI',
        description:
          'A cloud-based continuous integration and delivery platform that automates development workflows.',
        categoryId: categoryRecords.find((c) => c.name === 'Programming')!.id,
      },
      providers: [
        {
          name: 'CircleCI',
          description:
            'CircleCI provides modern CI/CD pipelines for rapid deployment and continuous integration.',
          imageUrl: 'https://circleci.com/favicon.ico',
          features: [
            'CI/CD pipelines',
            'Docker support',
            'Parallelism',
            'Test splitting',
            'Integration with version control',
          ],
          fitsFor: ['CI/CD workflows', 'Cloud-based deployments'],
          skillLevel: 'Intermediate to Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['1,000 build minutes/month'],
              limitations: 'Limited to small projects',
            },
            {
              tierName: 'Performance',
              price: '30/user/month',
              features: ['Unlimited builds', 'Advanced caching'],
              limitations: 'Cost increases with team size',
            },
          ],
        },
      ],
    },
  ];
  const projectManagementTools = [
    {
      tool: {
        name: 'ClickUp',
        description:
          'ClickUp is an all-in-one productivity platform designed for teams to collaborate, manage projects, and streamline workflows effectively.',
        categoryId: categoryRecords.find(
          (c) => c.name === 'Project Management',
        )!.id,
      },
      providers: [
        {
          name: 'ClickUp',
          description:
            'ClickUp offers customizable workflows, task management, and integrations for teams of all sizes.',
          imageUrl: 'https://clickup.com/brand-assets/images/logo.png',
          features: [
            'Task Management',
            'Custom Dashboards',
            'Time Tracking',
            'Automation',
            'Docs and Wiki',
            'Integrations with 1000+ apps',
          ],
          fitsFor: ['Small teams', 'Enterprises', 'Remote teams'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['100MB storage', 'Unlimited tasks', 'Collaborations'],
              limitations: 'Limited features for reporting and automation',
            },
            {
              tierName: 'Unlimited',
              price: '5/user/month',
              features: [
                'Unlimited storage',
                'Goals & Portfolios',
                'Custom fields',
                'Time tracking',
              ],
              limitations: 'Basic reporting',
            },
            {
              tierName: 'Business',
              price: '12/user/month',
              features: [
                'Advanced reporting',
                'Custom automation',
                'Team sharing',
                'Advanced time tracking',
              ],
              limitations: 'Best for medium-sized teams',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Jira',
        description:
          'Jira is a project management tool tailored for software development teams, offering features like agile boards and sprint planning.',
        categoryId: categoryRecords.find(
          (c) => c.name === 'Project Management',
        )!.id,
      },
      providers: [
        {
          name: 'Jira',
          description:
            'Jira by Atlassian provides agile tools for software teams, including bug tracking and sprint management.',
          imageUrl:
            'https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon.png',
          features: [
            'Agile Boards',
            'Backlog Management',
            'Sprint Planning',
            'Roadmaps',
            'DevOps Integration',
          ],
          fitsFor: ['Software development teams', 'Agile teams'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['10 users', 'Kanban boards', 'Backlog', 'Reporting'],
              limitations: 'Limited to 10 users',
            },
            {
              tierName: 'Standard',
              price: '7.75/user/month',
              features: [
                'Project roles',
                'User permissions',
                'Advanced search',
              ],
              limitations: 'Limited scalability',
            },
            {
              tierName: 'Premium',
              price: '15.25/user/month',
              features: [
                'Advanced roadmaps',
                'Automation',
                'Global admin insights',
              ],
              limitations: 'Higher costs for larger teams',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Trello',
        description:
          'Trello is a simple and intuitive project management tool based on Kanban-style boards for organizing tasks and workflows.',
        categoryId: categoryRecords.find(
          (c) => c.name === 'Project Management',
        )!.id,
      },
      providers: [
        {
          name: 'Trello',
          description:
            'Trello helps teams manage projects with customizable boards, lists, and cards.',
          imageUrl: 'https://cdn.worldvectorlogo.com/logos/trello.svg',
          features: [
            'Kanban Boards',
            'Custom Workflows',
            'Power-Ups (Integrations)',
            'Templates',
            'Collaboration Tools',
          ],
          fitsFor: ['Startups', 'Personal use', 'Small teams'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['Unlimited cards', '10 boards per workspace'],
              limitations: 'Limited automation and integrations',
            },
            {
              tierName: 'Standard',
              price: '5/user/month',
              features: [
                'Unlimited boards',
                'Advanced checklists',
                'Custom fields',
              ],
              limitations: 'Limited to smaller teams',
            },
            {
              tierName: 'Premium',
              price: '10/user/month',
              features: [
                'Workspace views',
                'Dashboard views',
                'Calendar views',
                'Priority support',
              ],
              limitations: 'Higher costs for enterprise-level usage',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Asana',
        description:
          'Asana is a robust project management tool that enables teams to collaborate, track progress, and achieve goals efficiently.',
        categoryId: categoryRecords.find(
          (c) => c.name === 'Project Management',
        )!.id,
      },
      providers: [
        {
          name: 'Asana',
          description:
            'Asana offers tools to create, organize, and track tasks and projects for teams of all sizes.',
          imageUrl: 'https://luna1.co/32b21d.png',
          features: [
            'Task Management',
            'Timeline View',
            'Workload Monitoring',
            'Goal Setting',
            'Reporting',
          ],
          fitsFor: ['Small to large teams', 'Cross-functional teams'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Basic',
              price: '0',
              features: ['Unlimited tasks', 'Collaborators', 'Basic reporting'],
              limitations: 'Limited advanced features',
            },
            {
              tierName: 'Premium',
              price: '10.99/user/month',
              features: [
                'Timeline view',
                'Advanced search',
                'Custom fields',
                'Milestones',
              ],
              limitations: 'Best for small teams',
            },
            {
              tierName: 'Business',
              price: '24.99/user/month',
              features: [
                'Portfolio management',
                'Custom workflows',
                'Advanced reporting',
                'Priority support',
              ],
              limitations: 'Higher costs for enterprise teams',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Monday.com',
        description:
          'Monday.com is a flexible project management platform that allows teams to create custom workflows and automate processes.',
        categoryId: categoryRecords.find(
          (c) => c.name === 'Project Management',
        )!.id,
      },
      providers: [
        {
          name: 'Monday.com',
          description:
            'Monday.com provides visual project management with automation and integrations for efficient teamwork.',
          imageUrl: 'https://cdn.monday.com/static/img/logo.png',
          features: [
            'Custom Dashboards',
            'Workflow Automation',
            'Integrations',
            'Templates',
            'Collaboration Tools',
          ],
          fitsFor: ['Remote teams', 'Enterprises', 'Creative teams'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Individual',
              price: '0',
              features: ['2 seats', 'Unlimited boards', 'Basic views'],
              limitations: 'Limited to small personal use',
            },
            {
              tierName: 'Standard',
              price: '10/user/month',
              features: [
                'Gantt charts',
                'Custom templates',
                'Workflow automation',
              ],
              limitations: 'Basic integrations',
            },
            {
              tierName: 'Pro',
              price: '16/user/month',
              features: [
                'Time tracking',
                'Advanced automation',
                'Private boards',
                'Priority support',
              ],
              limitations: 'Higher costs for larger teams',
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
    ...noCodePlatforms,
    ...ide,
    ...developmentWorkflowTools,
    ...projectManagementTools,
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
