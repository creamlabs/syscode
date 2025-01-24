import React from "react";
import {
  Server,
  Smartphone,
  Database,
  Network,
  Cloud,
  Lock,
  Globe,
  Cpu,
} from "lucide-react";
import Icon from "@/components/ui/icon";

export type ComponentCategory = {
  id: string;
  label: string;
  icon: React.ReactNode;
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

export const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    id: "client",
    label: "Client",
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    id: "server",
    label: "Server",
    icon: <Server className="w-5 h-5" />,
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
    icon: <Database className="w-5 h-5" />,
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
    icon: <Network className="w-5 h-5" />,
    variants: [
      { id: "kafka", label: "Apache Kafka" },
      { id: "rabbitmq", label: "RabbitMQ" },
      { id: "sqs", label: "AWS SQS" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: <Cloud className="w-5 h-5" />,
    variants: [
      { id: "s3", label: "Object Storage (S3)" },
      { id: "cdn", label: "CDN" },
      { id: "lambda", label: "Serverless Function" },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: <Lock className="w-5 h-5" />,
    variants: [
      { id: "auth", label: "Authentication" },
      { id: "firewall", label: "Firewall" },
      { id: "ssl", label: "SSL/TLS" },
    ],
  },
  {
    id: "services",
    label: "Services",
    icon: <Globe className="w-5 h-5" />,
    variants: [
      { id: "dns", label: "DNS" },
      { id: "monitoring", label: "Monitoring" },
      { id: "logging", label: "Logging" },
    ],
  },
  {
    id: "compute",
    label: "Compute",
    icon: <Cpu className="w-5 h-5" />,
    variants: [
      { id: "container", label: "Container" },
      { id: "vm", label: "Virtual Machine" },
      { id: "kubernetes", label: "Kubernetes" },
    ],
  },
];

interface MenuBarProps {
  onSelectCategory: (category: ComponentCategory) => void;
  selectedCategory: ComponentCategory | null;
}

//export const MenuBar: React.FC<MenuBarProps> = ({
//  onSelectCategory,
//  selectedCategory,
//}) => {
export const MenuBar = () => {
  return (
    <div className="border bg-white rounded-md shadow-lg p-1">
      <div className="flex gap-1">
        {COMPONENT_CATEGORIES.map((category) => (
          <button
            key={category.id}
            //onClick={() => onSelectCategory(category)}
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-0.5 pr-1.5`}
            title={category.label}
          >
            {category.icon}
            {category.variants && (
              <Icon icon="chevronUp" className="w-3 h-3 transition-transform" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
