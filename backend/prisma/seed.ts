import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.provider.deleteMany();
  await prisma.tool.deleteMany();
  await prisma.category.deleteMany();

  const categories = [
    {
      name: 'Databases',
      description: 'Relational and Non-relational database solutions.',
    },
    { name: 'Cloud Services', description: 'Cloud computing platforms.' },
    { name: 'Payment Services', description: 'Payment gateway solutions.' },
    { name: 'CMSs', description: 'Content Management Systems.' },
    {
      name: 'Project Management Tools',
      description: 'Tools for managing projects and teams.',
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
        description: 'Relational database with strong ACID compliance.',
        type: 'Relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Supabase',
          description: 'PostgreSQL-powered backend-as-a-service.',
          imageUrl:
            'https://cdn.prod.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d41_646dfce3b9c4849f6e401bff_supabase-logo-icon_1.png',
          features: [
            'Auth',
            'Storage',
            'Realtime',
            'Functions',
            'Tables',
            'API',
            'CLI',
            'Webhooks',
            'Scheduled tasks',
            'Extensions',
          ],
          fitsFor: ['Web applications', 'Serverless backends', 'APIs'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['10GB storage', '50MB database'],
              limitations: 'Limited support',
            },
            {
              tierName: 'Pro',
              price: '25',
              features: ['100GB storage', '1GB database'],
              limitations: 'No enterprise features',
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
          'In-memory key-value store for caching and real-time analytics.',
        type: 'Non-relational',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Redis',
          description:
            'In-memory key-value store for caching and real-time analytics.',
          imageUrl:
            'https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png',
          features: ['Key-value storage', 'Pub/Sub', 'Lua scripting'],
          fitsFor: ['Caching', 'Session management'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['50MB RAM'],
              limitations: 'Shared instance',
            },
            {
              tierName: 'Standard',
              price: '30',
              features: ['1GB RAM'],
              limitations: 'Single region',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'MongoDB',
        description:
          'Document-oriented NoSQL database for modern applications.',
        type: 'Non-relational',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'MongoDB',
          description:
            'Document-oriented NoSQL database for modern applications.',
          imageUrl:
            'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png',
          features: [
            'Flexible schema',
            'Global replication',
            'Cluster management',
          ],
          fitsFor: [
            'Real-time analytics',
            'Mobile apps',
            'IoT applications',
            'E-commerce',
          ],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['512MB storage'],
              limitations: 'Shared cluster only',
            },
            {
              tierName: 'Dedicated',
              price: '57',
              features: ['Dedicated resources'],
              limitations: 'Higher cost',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'CockroachDB',
        description:
          'Distributed SQL database designed for global-scale applications.',
        type: 'Relational',
        skillLevel: 'Advanced',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'CockroachDB',
          description:
            'Distributed SQL database designed for global-scale applications.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/3/31/Cockroach_Labs_Logo.png',
          features: [
            'Global replication',
            'Horizontal scaling',
            'High availability',
            'ACID compliance',
          ],
          fitsFor: [
            'Distributed systems',
            'Global apps',
            'High availability',
            'Multi-region',
          ],
          skillLevel: 'Advanced',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['5GB storage'],
              limitations: 'Single region only',
            },
            {
              tierName: 'Serverless',
              price: '50',
              features: ['10GB storage', 'Multi-region'],
              limitations: null,
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Firebase',
        description: 'NoSQL backend-as-a-service by Google.',
        type: 'Non-relational',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Firebase',
          description: 'NoSQL database and serverless platform.',
          imageUrl:
            'https://www.ichdata.com/wp-content/uploads/2017/06/2024070803153850.png',
          features: [
            'Realtime database',
            'Cloud functions',
            'Hosting',
            'Auth',
            'Storage',
            'Analytics',
          ],
          fitsFor: ['Small apps', 'Serverless backends'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Spark',
              price: '0',
              features: ['1GB storage', '50K reads'],
              limitations: 'Limited usage',
            },
            {
              tierName: 'Blaze',
              price: '0',
              features: ['Pay-as-you-go'],
              limitations: 'Charges based on usage',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Oracle Database',
        description:
          'Enterprise-grade relational database with advanced analytics.',
        type: 'Relational',
        skillLevel: 'Advanced',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Oracle Database',
          description:
            'Enterprise-grade relational database with advanced analytics.',
          imageUrl: 'https://m.media-amazon.com/images/I/41QodfboFdL.png',
          features: [
            'Advanced analytics',
            'Cloud support',
            'Multi-model database',
            'High availability',
          ],
          fitsFor: [
            'Enterprise apps',
            'Mission-critical workloads',
            'Big data',
            'High availability',
          ],
          skillLevel: 'Advanced',
          pricingTiers: [
            {
              tierName: 'Standard',
              price: '500',
              features: ['High availability'],
              limitations: 'License required',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Azure Cosmos DB',
        description:
          'Globally distributed database by Microsoft with multi-model capabilities.',
        type: 'Non-relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Azure Cosmos DB',
          description:
            'Globally distributed database by Microsoft with multi-model capabilities.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Azure_Cosmos_DB.svg/800px-Azure_Cosmos_DB.svg.png',
          features: ['Global distribution', 'Multi-model', 'Automatic scaling'],
          fitsFor: ['IoT apps', 'Enterprise solutions', 'Global apps'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['5GB storage'],
              limitations: 'Limited throughput',
            },
            {
              tierName: 'Standard',
              price: '25',
              features: ['10GB storage'],
              limitations: 'Regional only',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'PlanetScale',
        description:
          'Serverless MySQL database designed for developers, with features like branching and sharding.',
        type: 'Relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'PlanetScale',
          description:
            'Serverless MySQL database designed for developers, with features like branching and sharding.',
          imageUrl:
            'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/iidhf24ewhnqtjgrrfbp',
          features: ['Branching', 'Sharding', 'Automatic scaling'],
          fitsFor: ['Scalable web apps', 'Global databases'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Starter',
              price: '0',
              features: ['10GB storage'],
              limitations: 'Single database only',
            },
            {
              tierName: 'Pro',
              price: '29',
              features: ['50GB storage'],
              limitations: null,
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
              limitations: 'Limited throughput',
            },
            {
              tierName: 'Pro',
              price: '50',
              features: ['10GB storage', 'High concurrency'],
              limitations: 'Regional limitations',
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
            'A global cloud database service that provides automation and scaling for MongoDB deployments. With built-in clustering and data replication, MongoDB Atlas is an excellent choice for applications requiring scalability and high availability.',
          imageUrl:
            'https://www.strongdm.com/hubfs/21126185/Technology%20Images/603c5eb831820c3ce6a8f057_603a1586fa052d17fc2a6929_MongoDBAtlas.png',
          features: [
            'Dynamic schemas',
            'Cluster automation',
            'Global data replication',
            'Integrated security',
            'Performance monitoring',
          ],
          fitsFor: ['Real-time analytics', 'Mobile apps', 'IoT applications'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: '0',
              features: ['512MB storage', 'Shared cluster', 'Limited backups'],
              limitations: 'No dedicated resources',
            },
            {
              tierName: 'Dedicated',
              price: '57',
              features: ['Dedicated resources', 'Advanced security'],
              limitations: 'Higher costs for small-scale apps',
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
