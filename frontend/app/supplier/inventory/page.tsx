"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  AlertTriangle,
  Package,
  TrendingDown,
  TrendingUp,
  RefreshCw,
} from "lucide-react";

export default function SupplierInventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [alertFilter, setAlertFilter] = useState("all");

  const inventoryItems = [
    {
      id: "INV-001",
      productName: "Classic White T-Shirt",
      sku: "CWT-001",
      currentStock: 150,
      minStock: 50,
      maxStock: 300,
      reorderPoint: 75,
      lastRestocked: "2024-01-10",
      supplier: "Cotton Mills Co.",
      location: "Warehouse A-1",
      status: "healthy",
      trend: "stable",
    },
    {
      id: "INV-002",
      productName: "Blue Denim Jeans",
      sku: "BDJ-002",
      currentStock: 25,
      minStock: 30,
      maxStock: 200,
      reorderPoint: 45,
      lastRestocked: "2024-01-05",
      supplier: "Denim Works Ltd.",
      location: "Warehouse B-2",
      status: "low",
      trend: "decreasing",
    },
    {
      id: "INV-003",
      productName: "Summer Dress",
      sku: "SD-003",
      currentStock: 80,
      minStock: 40,
      maxStock: 250,
      reorderPoint: 60,
      lastRestocked: "2024-01-12",
      supplier: "Fashion Fabrics Inc.",
      location: "Warehouse A-3",
      status: "healthy",
      trend: "increasing",
    },
    {
      id: "INV-004",
      productName: "Leather Handbag",
      sku: "LH-004",
      currentStock: 5,
      minStock: 20,
      maxStock: 100,
      reorderPoint: 30,
      lastRestocked: "2023-12-28",
      supplier: "Leather Craft Co.",
      location: "Warehouse C-1",
      status: "critical",
      trend: "decreasing",
    },
    {
      id: "INV-005",
      productName: "Running Sneakers",
      sku: "RS-005",
      currentStock: 0,
      minStock: 25,
      maxStock: 150,
      reorderPoint: 40,
      lastRestocked: "2023-12-20",
      supplier: "Athletic Gear Ltd.",
      location: "Warehouse B-1",
      status: "out_of_stock",
      trend: "critical",
    },
  ];

  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch =
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesAlert = true;
    if (alertFilter === "critical") {
      matchesAlert =
        item.status === "critical" || item.status === "out_of_stock";
    } else if (alertFilter === "low") {
      matchesAlert = item.status === "low";
    } else if (alertFilter === "reorder") {
      matchesAlert = item.currentStock <= item.reorderPoint;
    }

    return matchesSearch && matchesAlert;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Healthy
          </Badge>
        );
      case "low":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Low Stock
          </Badge>
        );
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      case "out_of_stock":
        return <Badge variant="destructive">Out of Stock</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "increasing":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "decreasing":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case "critical":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <div className="h-4 w-4" />;
    }
  };

  const getStockPercentage = (current: number, max: number) => {
    return Math.min((current / max) * 100, 100);
  };

  const getProgressColor = (current: number, min: number, reorder: number) => {
    if (current === 0) return "bg-red-500";
    if (current <= min) return "bg-red-500";
    if (current <= reorder) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Inventory Status
          </h1>
          <p className="text-muted-foreground">
            Monitor stock levels and inventory alerts
          </p>
        </div>
        <Button>
          <RefreshCw className="mr-2 h-4 w-4" />
          Sync Inventory
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventoryItems.length}</div>
            <p className="text-xs text-muted-foreground">Tracked products</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                inventoryItems.filter(
                  (i) => i.status === "low" || i.status === "critical"
                ).length
              }
            </div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {inventoryItems.filter((i) => i.status === "out_of_stock").length}
            </div>
            <p className="text-xs text-muted-foreground">Urgent restocking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Reorder Needed
            </CardTitle>
            <RefreshCw className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                inventoryItems.filter((i) => i.currentStock <= i.reorderPoint)
                  .length
              }
            </div>
            <p className="text-xs text-muted-foreground">Below reorder point</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Overview</CardTitle>
          <CardDescription>Real-time stock levels and alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={alertFilter} onValueChange={setAlertFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter alerts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="critical">Critical Alerts</SelectItem>
                <SelectItem value="low">Low Stock</SelectItem>
                <SelectItem value="reorder">Reorder Needed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Trend</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{item.productName}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.sku}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>
                          {item.currentStock} / {item.maxStock}
                        </span>
                        <span className="text-muted-foreground">
                          {Math.round(
                            getStockPercentage(item.currentStock, item.maxStock)
                          )}
                          %
                        </span>
                      </div>
                      <Progress
                        value={getStockPercentage(
                          item.currentStock,
                          item.maxStock
                        )}
                        className="h-2"
                      />
                      <div className="text-xs text-muted-foreground">
                        Min: {item.minStock} | Reorder: {item.reorderPoint}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(item.trend)}
                      <span className="text-sm capitalize">{item.trend}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{item.location}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.supplier}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{item.lastRestocked}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Reorder
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
