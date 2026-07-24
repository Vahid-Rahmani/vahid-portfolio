"use client";

import {
  DollarSign,
  Globe,
  Server,
  Shield,
  ArrowLeft,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const COLORS = [
  "#f97316",
  "#06b6d4",
  "#8b5cf6",
  "#22c55e",
  "#ec4899",
  "#eab308",
  "#14b8a6",
  "#f43f5e",
];

const serviceCosts = [
  { service: "Amazon S3", cost: 23.50, region: "us-east-1", usage: "Storage + Requests" },
  { service: "Amazon CloudFront", cost: 42.80, region: "Global (12 Edge Locations)", usage: "Data Transfer" },
  { service: "AWS Route 53", cost: 1.50, region: "Global", usage: "Hosted Zones + Queries" },
  { service: "AWS Certificate Manager", cost: 0.00, region: "Global", usage: "SSL/TLS Certificates" },
  { service: "Amazon CloudWatch", cost: 8.20, region: "us-east-1", usage: "Monitoring + Alarms" },
  { service: "AWS WAF", cost: 12.00, region: "Global", usage: "Web ACL + Rules" },
  { service: "AWS Lambda", cost: 5.60, region: "us-east-1", usage: "Edge Functions" },
  { service: "Amazon API Gateway", cost: 3.80, region: "us-east-1", usage: "REST API Calls" },
];

const monthlyTrend = [
  { month: "Jan", cost: 78.20 },
  { month: "Feb", cost: 82.40 },
  { month: "Mar", cost: 85.10 },
  { month: "Apr", cost: 88.90 },
  { month: "May", cost: 91.30 },
  { month: "Jun", cost: 97.40 },
];

const regionCosts = [
  { region: "us-east-1", cost: 41.10 },
  { region: "eu-central-1", cost: 22.30 },
  { region: "ap-southeast-1", cost: 15.80 },
  { region: "Global", cost: 18.20 },
];

const pieData = serviceCosts.map((s) => ({
  name: s.service,
  value: s.cost,
}));

const totalMonthly = serviceCosts.reduce((sum, s) => sum + s.cost, 0);

const StatsCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  trend?: "up" | "down";
  trendValue?: string;
}) => (
  <Card className="border-white/[0.06] bg-[#09090b]">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-zinc-400">{title}</CardTitle>
      <Icon size={16} className="text-teal-400" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-[#f4f4f5]">{value}</div>
      <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
        <span>{subtitle}</span>
        {trend && trendValue && (
          <span
            className={
              trend === "up" ? "text-red-400" : "text-green-400"
            }
          >
            {trend === "up" ? (
              <TrendingUp size={12} className="inline" />
            ) : (
              <TrendingDown size={12} className="inline" />
            )}{" "}
            {trendValue}
          </span>
        )}
      </div>
    </CardContent>
  </Card>
);

const Costs = () => {
  return (
    <div className="min-h-screen bg-[#09090b] font-sans text-[#f4f4f5]">
      <main className="mx-auto max-w-6xl px-6 py-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-teal-400"
        >
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-[#f4f4f5] sm:text-4xl">
            Global HA Web Hosting — Cost Breakdown
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Monthly infrastructure cost analysis for the Terraform-built
            zero-downtime static edge architecture (AWS).
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Monthly Cost"
            value={`$${totalMonthly.toFixed(2)}`}
            subtitle="June 2026 estimate"
            icon={DollarSign}
            trend="up"
            trendValue="+6.7%"
          />
          <StatsCard
            title="CDN Bandwidth"
            value="2.4 TB"
            subtitle="CloudFront data transfer"
            icon={Globe}
            trend="up"
            trendValue="+12%"
          />
          <StatsCard
            title="Active Services"
            value="8"
            subtitle="Across 3 AWS regions"
            icon={Server}
          />
          <StatsCard
            title="Security Layer"
            value="$12.00"
            subtitle="AWS WAF protection"
            icon={Shield}
            trend="down"
            trendValue="-8%"
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="border-white/[0.06] bg-[#09090b]">
            <CardHeader>
              <CardTitle className="text-lg text-[#f4f4f5]">
                Cost Distribution by Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#18181b",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "8px",
                      color: "#f4f4f5",
                    }}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, "Cost"]}
                  />
                  <Legend
                    wrapperStyle={{ color: "#a1a1aa", fontSize: "12px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-white/[0.06] bg-[#09090b]">
            <CardHeader>
              <CardTitle className="text-lg text-[#f4f4f5]">
                Cost by Region
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionCosts}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.06)"
                  />
                  <XAxis
                    dataKey="region"
                    tick={{ fill: "#71717a", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
                  />
                  <YAxis
                    tick={{ fill: "#71717a", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
                    tickFormatter={(v) => `$${v}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#18181b",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "8px",
                      color: "#f4f4f5",
                    }}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, "Cost"]}
                  />
                  <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                    {regionCosts.map((_, index) => (
                      <Cell
                        key={`bar-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-white/[0.06] bg-[#09090b]">
          <CardHeader>
            <CardTitle className="text-lg text-[#f4f4f5]">
              Monthly Cost Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.06)"
                />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#71717a", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
                />
                <YAxis
                  tick={{ fill: "#71717a", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
                  tickFormatter={(v) => `$${v}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "8px",
                    color: "#f4f4f5",
                  }}
                  formatter={(value: number) => [`$${value.toFixed(2)}`, "Cost"]}
                />
                <Line
                  type="monotone"
                  dataKey="cost"
                  stroke="#14b8a6"
                  strokeWidth={2}
                  dot={{ fill: "#14b8a6", strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="mt-6 border-white/[0.06] bg-[#09090b]">
          <CardHeader>
            <CardTitle className="text-lg text-[#f4f4f5]">
              Detailed Service Costs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/[0.06] hover:bg-transparent">
                  <TableHead className="text-zinc-400">Service</TableHead>
                  <TableHead className="text-zinc-400">Region</TableHead>
                  <TableHead className="text-zinc-400">Usage</TableHead>
                  <TableHead className="text-right text-zinc-400">
                    Monthly Cost
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceCosts.map((item) => (
                  <TableRow
                    key={item.service}
                    className="border-white/[0.06]"
                  >
                    <TableCell className="font-medium text-[#f4f4f5]">
                      {item.service}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="border-white/[0.06] bg-white/5 text-zinc-300"
                      >
                        {item.region}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-zinc-400">
                      {item.usage}
                    </TableCell>
                    <TableCell className="text-right font-mono text-[#f4f4f5]">
                      {item.cost === 0 ? (
                        <span className="text-green-400">Free</span>
                      ) : (
                        `$${item.cost.toFixed(2)}`
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-white/[0.06] border-t-2">
                  <TableCell
                    colSpan={3}
                    className="font-semibold text-[#f4f4f5]"
                  >
                    Total
                  </TableCell>
                  <TableCell className="text-right font-mono text-lg font-bold text-teal-400">
                    ${totalMonthly.toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-8 rounded-lg border border-white/[0.06] bg-white/[0.02] p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Cost Optimization Notes
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-500">
            <li>
              <span className="text-teal-400">S3 Storage:</span> Using S3
              Standard tier with lifecycle policies to transition infrequent
              access objects to S3 IA after 30 days.
            </li>
            <li>
              <span className="text-teal-400">CloudFront:</span> Enabled
              compression and cache optimization to reduce data transfer costs
              by ~15%.
            </li>
            <li>
              <span className="text-teal-400">ACM:</span> SSL certificates are
              provided free by AWS Certificate Manager for public certificates.
            </li>
            <li>
              <span className="text-teal-400">Lambda:</span> Edge functions
              run on CloudFront to minimize origin requests and reduce latency.
            </li>
          </ul>
        </div>

        <footer className="mt-16 border-t border-white/[0.06] pt-8 text-center text-sm text-zinc-600">
          Cost data reflects estimated monthly spend for a static site
          architecture. Actual costs may vary based on traffic patterns.
        </footer>
      </main>
    </div>
  );
};

export default Costs;
