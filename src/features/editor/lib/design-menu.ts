import { type IconType } from "@/lib/icon";

export type ComponentCategory = {
  id: string;
  label: string;
  icon: IconType;
  variants?: {
    id: string;
    label: string;
    description?: string;
    properties?: {
      scalability?: string;
      reliability?: string;
      consistency?: string;
    };
  }[];
};

export const COMPONENT_CATEGORIES = [
  {
    id: "client",
    label: "Client",
    icon: "client",
  },
  {
    id: "server",
    label: "Server",
    icon: "server",
    variants: [
      { id: "api_gateway", label: "API Gateway" },
      { id: "load_balancer", label: "Load Balancer" },
      { id: "application_server", label: "Application Server" },
      { id: "websocket", label: "WebSocket Server" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "database",
    variants: [
      { id: "sql", label: "SQL Database" },
      { id: "nosql", label: "NoSQL Database" },
      { id: "redis", label: "Redis Cache" },
      { id: "elasticsearch", label: "Elasticsearch" },
    ],
  },
  {
    id: "messaging",
    label: "Messaging",
    icon: "network",
    variants: [
      { id: "kafka", label: "Apache Kafka" },
      { id: "rabbitmq", label: "RabbitMQ" },
      { id: "sqs", label: "AWS SQS" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: "cloud",
    variants: [
      { id: "s3", label: "Object Storage (S3)" },
      { id: "cdn", label: "CDN" },
      { id: "lambda", label: "Serverless Function" },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: "auth",
    variants: [
      { id: "auth", label: "Authentication" },
      { id: "firewall", label: "Firewall" },
      { id: "ssl", label: "SSL/TLS" },
    ],
  },
  {
    id: "services",
    label: "Services",
    icon: "globe",
    variants: [
      { id: "dns", label: "DNS" },
      { id: "monitoring", label: "Monitoring" },
      { id: "logging", label: "Logging" },
    ],
  },
  {
    id: "compute",
    label: "Compute",
    icon: "cpu",
    variants: [
      { id: "container", label: "Container" },
      { id: "vm", label: "Virtual Machine" },
      { id: "kubernetes", label: "Kubernetes" },
    ],
  },
] as const satisfies ComponentCategory[];

export type ComponentCategoryId = (typeof COMPONENT_CATEGORIES)[number]["id"];
