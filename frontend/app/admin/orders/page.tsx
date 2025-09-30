"use client";

import { useState } from "react";
import { ProtectedRoute } from "@/components/protected-route";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  MoreHorizontal,
  Filter,
  Download,
  Package,
  Truck,
  CheckCircle,
  XCircle,
} from "lucide-react";

const orders = [
  {
    id: "ORD-001",
    customer: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    phone: "+84 901 234 567",
    total: 750000,
    status: "processing",
    date: "2024-01-15",
    items: [
      { name: "Áo sơ mi trắng", quantity: 2, price: 250000 },
      { name: "Quần jean xanh", quantity: 1, price: 250000 },
    ],
    shippingAddress: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    paymentMethod: "Credit Card",
    trackingNumber: "VN123456789",
  },
  {
    id: "ORD-002",
    customer: "Trần Thị B",
    email: "tranthib@email.com",
    phone: "+84 902 345 678",
    total: 450000,
    status: "shipped",
    date: "2024-01-14",
    items: [
      { name: "Váy hoa nhí", quantity: 1, price: 350000 },
      { name: "Túi xách nhỏ", quantity: 1, price: 100000 },
    ],
    shippingAddress: "456 Lê Lợi, Quận 3, TP.HCM",
    paymentMethod: "Bank Transfer",
    trackingNumber: "VN987654321",
  },
  {
    id: "ORD-003",
    customer: "Lê Văn C",
    email: "levanc@email.com",
    phone: "+84 903 456 789",
    total: 180000,
    status: "delivered",
    date: "2024-01-13",
    items: [{ name: "Áo thun cotton", quantity: 2, price: 90000 }],
    shippingAddress: "789 Đồng Khởi, Quận 1, TP.HCM",
    paymentMethod: "Cash on Delivery",
    trackingNumber: "VN456789123",
  },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "default";
      case "shipped":
        return "secondary";
      case "delivered":
        return "outline";
      case "cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Package className="h-4 w-4" />;
      case "shipped":
        return <Truck className="h-4 w-4" />;
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const handleViewDetails = (order: any) => {
    setSelectedOrder(order);
    setIsDetailsDialogOpen(true);
  };

  const handleUpdateStatus = (order: any) => {
    setSelectedOrder(order);
    setIsStatusDialogOpen(true);
  };

  return (
    <ProtectedRoute requiredPermissions={["manage_orders"]}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Order Management
            </h1>
            <p className="text-muted-foreground">
              Track and manage customer orders
            </p>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Orders
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search orders..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest customer orders and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {getStatusIcon(order.status)}
                    </div>
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.customer}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {order.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-medium">
                        {order.total.toLocaleString("vi-VN")}₫
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {order.items.length} items
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(order.date).toLocaleDateString("vi-VN")}
                      </p>
                    </div>
                    <Badge variant={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white">
                        <DropdownMenuItem
                          onClick={() => handleViewDetails(order)}
                        >
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleUpdateStatus(order)}
                        >
                          Update Status
                        </DropdownMenuItem>
                        <DropdownMenuItem>Print Invoice</DropdownMenuItem>
                        <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Dialog
          open={isDetailsDialogOpen}
          onOpenChange={setIsDetailsDialogOpen}
        >
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
              <DialogDescription>
                Complete order information and items
              </DialogDescription>
            </DialogHeader>
            {selectedOrder && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Customer Information
                      </h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <strong>Name:</strong> {selectedOrder.customer}
                        </p>
                        <p>
                          <strong>Email:</strong> {selectedOrder.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {selectedOrder.phone}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Shipping Address</h4>
                      <p className="text-sm">{selectedOrder.shippingAddress}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Order Information</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <strong>Order Date:</strong>{" "}
                          {new Date(selectedOrder.date).toLocaleDateString(
                            "vi-VN"
                          )}
                        </p>
                        <p>
                          <strong>Payment Method:</strong>{" "}
                          {selectedOrder.paymentMethod}
                        </p>
                        <p>
                          <strong>Tracking Number:</strong>{" "}
                          {selectedOrder.trackingNumber}
                        </p>
                        <div className="flex items-center space-x-2">
                          <strong>Status:</strong>
                          <Badge variant={getStatusColor(selectedOrder.status)}>
                            {selectedOrder.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-4">Order Items</h4>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium">
                          {(item.price * item.quantity).toLocaleString("vi-VN")}
                          ₫
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <p className="font-semibold">Total Amount:</p>
                    <p className="font-bold text-lg">
                      {selectedOrder.total.toLocaleString("vi-VN")}₫
                    </p>
                  </div>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsDetailsDialogOpen(false)}
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setIsDetailsDialogOpen(false);
                  handleUpdateStatus(selectedOrder);
                }}
              >
                Update Status
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Update Order Status</DialogTitle>
              <DialogDescription>
                Change the status of order {selectedOrder?.id}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="status">New Status</Label>
                <Select defaultValue={selectedOrder?.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tracking">Tracking Number (Optional)</Label>
                <Input
                  id="tracking"
                  placeholder="Enter tracking number"
                  defaultValue={selectedOrder?.trackingNumber}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Status Update Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any notes about this status update..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsStatusDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => setIsStatusDialogOpen(false)}>
                Update Status
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </ProtectedRoute>
  );
}
