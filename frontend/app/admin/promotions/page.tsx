"use client";

import { useState } from "react";
import { ProtectedRoute } from "@/components/protected-route";
import { Card, CardContent } from "@/components/ui/card";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MoreHorizontal,
  Plus,
  Filter,
  Gift,
  Percent,
  Calendar,
} from "lucide-react";

const promotionsData = [
  {
    id: 1,
    name: "Summer Sale 2024",
    type: "percentage",
    value: 30,
    code: "SUMMER30",
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    status: "active",
    usageCount: 245,
    usageLimit: 1000,
    description: "30% off on all summer collection items",
  },
  {
    id: 2,
    name: "New Customer Discount",
    type: "fixed",
    value: 100000,
    code: "WELCOME100",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "active",
    usageCount: 89,
    usageLimit: 500,
    description: "100,000₫ off for first-time customers",
  },
  {
    id: 3,
    name: "Black Friday Mega Sale",
    type: "percentage",
    value: 50,
    code: "BLACKFRIDAY50",
    startDate: "2024-11-29",
    endDate: "2024-11-29",
    status: "scheduled",
    usageCount: 0,
    usageLimit: 2000,
    description: "50% off on selected items for Black Friday",
  },
  {
    id: 4,
    name: "Free Shipping Promo",
    type: "shipping",
    value: 0,
    code: "FREESHIP",
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    status: "expired",
    usageCount: 156,
    usageLimit: 300,
    description: "Free shipping on orders over 500,000₫",
  },
];

export default function PromotionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingPromotion, setEditingPromotion] = useState<any>(null);

  const filteredPromotions = promotionsData.filter(
    (promotion) =>
      promotion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promotion.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "default";
      case "scheduled":
        return "secondary";
      case "expired":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "percentage":
        return <Percent className="h-4 w-4" />;
      case "fixed":
        return <Gift className="h-4 w-4" />;
      case "shipping":
        return <Calendar className="h-4 w-4" />;
      default:
        return <Gift className="h-4 w-4" />;
    }
  };

  return (
    <ProtectedRoute requiredPermissions={["manage_promotions"]}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Promotion Management
            </h1>
            <p className="text-muted-foreground">
              Manage discount codes and promotional campaigns
            </p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Promotion
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Promotion</DialogTitle>
                <DialogDescription>
                  Set up a new promotional campaign with discount codes
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Promotion Name</Label>
                    <Input id="name" placeholder="Enter promotion name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="code">Promo Code</Label>
                    <Input id="code" placeholder="Enter promo code" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Discount Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage</SelectItem>
                        <SelectItem value="fixed">Fixed Amount</SelectItem>
                        <SelectItem value="shipping">Free Shipping</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="value">Discount Value</Label>
                    <Input id="value" type="number" placeholder="Enter value" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input id="startDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date</Label>
                    <Input id="endDate" type="date" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="usageLimit">Usage Limit</Label>
                  <Input
                    id="usageLimit"
                    type="number"
                    placeholder="Enter usage limit"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter promotion description"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)}>
                  Create Promotion
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search promotions..."
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

        <div className="grid gap-4">
          {filteredPromotions.map((promotion) => (
            <Card key={promotion.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {getTypeIcon(promotion.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{promotion.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {promotion.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm font-medium">
                          Code: {promotion.code}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {promotion.type === "percentage"
                            ? `${promotion.value}%`
                            : promotion.type === "fixed"
                            ? `${promotion.value.toLocaleString("vi-VN")}₫`
                            : "Free Shipping"}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Used: {promotion.usageCount}/{promotion.usageLimit}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant={getStatusColor(promotion.status)}>
                      {promotion.status.charAt(0).toUpperCase() +
                        promotion.status.slice(1)}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white">
                        <DropdownMenuItem
                          onClick={() => setEditingPromotion(promotion)}
                        >
                          Edit Promotion
                        </DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>View Analytics</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete Promotion
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Promotion Dialog */}
        <Dialog
          open={!!editingPromotion}
          onOpenChange={() => setEditingPromotion(null)}
        >
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Promotion</DialogTitle>
              <DialogDescription>
                Update promotion details and settings
              </DialogDescription>
            </DialogHeader>
            {editingPromotion && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-name">Promotion Name</Label>
                    <Input
                      id="edit-name"
                      defaultValue={editingPromotion.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-code">Promo Code</Label>
                    <Input
                      id="edit-code"
                      defaultValue={editingPromotion.code}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-type">Discount Type</Label>
                    <Select defaultValue={editingPromotion.type}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage</SelectItem>
                        <SelectItem value="fixed">Fixed Amount</SelectItem>
                        <SelectItem value="shipping">Free Shipping</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-value">Discount Value</Label>
                    <Input
                      id="edit-value"
                      type="number"
                      defaultValue={editingPromotion.value}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    defaultValue={editingPromotion.description}
                  />
                </div>
              </div>
            )}
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setEditingPromotion(null)}
              >
                Cancel
              </Button>
              <Button onClick={() => setEditingPromotion(null)}>
                Update Promotion
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </ProtectedRoute>
  );
}
