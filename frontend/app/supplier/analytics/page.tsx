"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Package,
  DollarSign,
  Truck,
  Download,
} from "lucide-react";

export default function SupplierAnalyticsPage() {
  const monthlySupplyData = [
    { month: "Jan", supplied: 1250, revenue: 18750, orders: 15 },
    { month: "Feb", supplied: 1580, revenue: 23700, orders: 18 },
    { month: "Mar", supplied: 1890, revenue: 28350, orders: 22 },
    { month: "Apr", supplied: 2100, revenue: 31500, orders: 25 },
    { month: "May", supplied: 1950, revenue: 29250, orders: 23 },
    { month: "Jun", supplied: 2350, revenue: 35250, orders: 28 },
  ];

  const productPerformance = [
    { name: "Classic T-Shirt", supplied: 450, revenue: 8995, margin: 35 },
    { name: "Denim Jeans", supplied: 320, revenue: 19200, margin: 42 },
    { name: "Summer Dress", supplied: 280, revenue: 22400, margin: 38 },
    { name: "Leather Handbag", supplied: 150, revenue: 19500, margin: 45 },
    { name: "Running Sneakers", supplied: 200, revenue: 18000, margin: 40 },
  ];

  const categoryDistribution = [
    { name: "Men's Clothing", value: 35, color: "#3b82f6" },
    { name: "Women's Clothing", value: 40, color: "#ef4444" },
    { name: "Accessories", value: 15, color: "#10b981" },
    { name: "Footwear", value: 10, color: "#f59e0b" },
  ];

  const inventoryTurnover = [
    { month: "Jan", turnover: 2.1, avgDays: 45 },
    { month: "Feb", turnover: 2.3, avgDays: 42 },
    { month: "Mar", turnover: 2.8, avgDays: 38 },
    { month: "Apr", turnover: 3.1, avgDays: 35 },
    { month: "May", turnover: 2.9, avgDays: 37 },
    { month: "Jun", turnover: 3.4, avgDays: 32 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Supplier Analytics
          </h1>
          <p className="text-muted-foreground">
            Track your supply performance and business insights
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$166,800</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +20.5% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Units Supplied
            </CardTitle>
            <Package className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11,120</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +15.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Supply Orders</CardTitle>
            <Truck className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">131</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +12.0% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Margin</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">40.2%</div>
            <div className="flex items-center text-xs text-red-600">
              <TrendingDown className="mr-1 h-3 w-3" />
              -2.1% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Supply Performance</CardTitle>
            <CardDescription>
              Units supplied and revenue over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlySupplyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value, name) => [
                    name === "supplied"
                      ? `${value} units`
                      : `$${value.toLocaleString()}`,
                    name === "supplied" ? "Units Supplied" : "Revenue",
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="supplied"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="2"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Distribution</CardTitle>
            <CardDescription>
              Supply breakdown by product category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Product Performance</CardTitle>
            <CardDescription>
              Top performing products by revenue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productPerformance} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip
                  formatter={(value) => [
                    `$${value.toLocaleString()}`,
                    "Revenue",
                  ]}
                />
                <Bar dataKey="revenue" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Turnover</CardTitle>
            <CardDescription>
              Inventory turnover rate and average days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={inventoryTurnover}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="turnover"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Turnover Rate"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="avgDays"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="Avg Days"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Top Customers</CardTitle>
            <CardDescription>Highest volume retail partners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Fashion Store Downtown", orders: 45, revenue: 67500 },
                { name: "Boutique Central", orders: 38, revenue: 52800 },
                { name: "Sports & Fashion Hub", orders: 32, revenue: 48600 },
                { name: "Urban Style Store", orders: 28, revenue: 39200 },
                { name: "Fashion Forward", orders: 25, revenue: 35750 },
              ].map((customer, index) => (
                <div
                  key={customer.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant="outline"
                      className="w-6 h-6 p-0 flex items-center justify-center text-xs"
                    >
                      {index + 1}
                    </Badge>
                    <div>
                      <p className="font-medium text-sm">{customer.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {customer.orders} orders
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">
                      ${customer.revenue.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Supply Efficiency</CardTitle>
            <CardDescription>Key performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  metric: "On-time Delivery",
                  value: "94.5%",
                  trend: "up",
                  color: "text-green-600",
                },
                {
                  metric: "Order Accuracy",
                  value: "98.2%",
                  trend: "up",
                  color: "text-green-600",
                },
                {
                  metric: "Avg Lead Time",
                  value: "3.2 days",
                  trend: "down",
                  color: "text-green-600",
                },
                {
                  metric: "Return Rate",
                  value: "1.8%",
                  trend: "down",
                  color: "text-green-600",
                },
                {
                  metric: "Customer Satisfaction",
                  value: "4.7/5",
                  trend: "up",
                  color: "text-green-600",
                },
              ].map((metric) => (
                <div
                  key={metric.metric}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">{metric.metric}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${metric.color}`}>
                      {metric.value}
                    </span>
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-green-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>Important notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: "Low Stock",
                  message: "Leather Handbag below minimum",
                  severity: "high",
                  time: "2 hours ago",
                },
                {
                  type: "Reorder",
                  message: "Blue Denim Jeans needs restocking",
                  severity: "medium",
                  time: "4 hours ago",
                },
                {
                  type: "Delivery",
                  message: "Order SO-003 delivered successfully",
                  severity: "low",
                  time: "6 hours ago",
                },
                {
                  type: "Quality",
                  message: "Quality check passed for batch B-001",
                  severity: "low",
                  time: "1 day ago",
                },
              ].map((alert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Badge
                    variant={
                      alert.severity === "high"
                        ? "destructive"
                        : alert.severity === "medium"
                        ? "secondary"
                        : "outline"
                    }
                    className="mt-0.5"
                  >
                    {alert.type}
                  </Badge>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
