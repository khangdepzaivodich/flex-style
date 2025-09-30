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
import { Search, Eye, Truck, Clock, CheckCircle, XCircle } from "lucide-react";

export default function SupplierOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const orders = [
    {
      id: "SO-001",
      storeOrderId: "ORD-2024-001",
      products: [
        { name: "Classic White T-Shirt", quantity: 50, price: 19.99 },
        { name: "Blue Denim Jeans", quantity: 30, price: 59.99 },
      ],
      totalAmount: 2799.2,
      status: "pending",
      priority: "high",
      orderDate: "2024-01-15",
      requestedDate: "2024-01-20",
      customerInfo: "Fashion Store Downtown",
    },
    {
      id: "SO-002",
      storeOrderId: "ORD-2024-002",
      products: [{ name: "Summer Dress", quantity: 25, price: 79.99 }],
      totalAmount: 1999.75,
      status: "processing",
      priority: "medium",
      orderDate: "2024-01-14",
      requestedDate: "2024-01-18",
      customerInfo: "Boutique Central",
    },
    {
      id: "SO-003",
      storeOrderId: "ORD-2024-003",
      products: [
        { name: "Running Sneakers", quantity: 40, price: 89.99 },
        { name: "Leather Handbag", quantity: 15, price: 129.99 },
      ],
      totalAmount: 5549.45,
      status: "shipped",
      priority: "low",
      orderDate: "2024-01-12",
      requestedDate: "2024-01-16",
      customerInfo: "Sports & Fashion Hub",
    },
    {
      id: "SO-004",
      storeOrderId: "ORD-2024-004",
      products: [{ name: "Winter Coat", quantity: 20, price: 149.99 }],
      totalAmount: 2999.8,
      status: "delivered",
      priority: "medium",
      orderDate: "2024-01-10",
      requestedDate: "2024-01-14",
      customerInfo: "Fashion Forward",
    },
    {
      id: "SO-005",
      storeOrderId: "ORD-2024-005",
      products: [{ name: "Casual Shirt", quantity: 35, price: 39.99 }],
      totalAmount: 1399.65,
      status: "cancelled",
      priority: "low",
      orderDate: "2024-01-08",
      requestedDate: "2024-01-12",
      customerInfo: "Urban Style Store",
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.storeOrderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerInfo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            <Clock className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        );
      case "processing":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Truck className="mr-1 h-3 w-3" />
            Processing
          </Badge>
        );
      case "shipped":
        return (
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            <Truck className="mr-1 h-3 w-3" />
            Shipped
          </Badge>
        );
      case "delivered":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <CheckCircle className="mr-1 h-3 w-3" />
            Delivered
          </Badge>
        );
      case "cancelled":
        return (
          <Badge variant="destructive">
            <XCircle className="mr-1 h-3 w-3" />
            Cancelled
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>;
      case "medium":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Medium
          </Badge>
        );
      case "low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Supply Orders</h1>
        <p className="text-muted-foreground">
          Manage orders from your retail partners
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {orders.filter((o) => o.status === "pending").length}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting processing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <Truck className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {orders.filter((o) => o.status === "processing").length}
            </div>
            <p className="text-xs text-muted-foreground">Being prepared</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Shipped</CardTitle>
            <Truck className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {orders.filter((o) => o.status === "shipped").length}
            </div>
            <p className="text-xs text-muted-foreground">In transit</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivered</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {orders.filter((o) => o.status === "delivered").length}
            </div>
            <p className="text-xs text-muted-foreground">Completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <Truck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              $
              {orders
                .reduce((sum, o) => sum + o.totalAmount, 0)
                .toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">All orders</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
          <CardDescription>
            Track and manage supply orders from retail partners
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Requested Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.storeOrderId}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.customerInfo}</p>
                      <p className="text-sm text-muted-foreground">
                        Order: {order.orderDate}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">
                        {order.products.length} items
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {order.products[0].name}
                        {order.products.length > 1 &&
                          ` +${order.products.length - 1} more`}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>${order.totalAmount.toLocaleString()}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>{getPriorityBadge(order.priority)}</TableCell>
                  <TableCell>{order.requestedDate}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
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
