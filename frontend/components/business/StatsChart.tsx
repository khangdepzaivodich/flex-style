import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	LineChart,
	Line,
	Legend,
} from "recharts";

// Dữ liệu doanh thu và vốn
type MonthlyPoint = {
	month: string;
	revenue?: number | null; // doanh thu
	capital?: number | null; // vốn
};

const defaultData: MonthlyPoint[] = [
	{ month: "Jan", revenue: 40000000, capital: 22000000 },
	{ month: "Feb", revenue: 25000000, capital: 15000000 },
	{ month: "Mar", revenue: 40000000, capital: 26000000 },
	{ month: "Apr", revenue: 50000000, capital: 31000000 },
	{ month: "May", revenue: 30000000, capital: 17000000 },
	{ month: "Jun", revenue: 34000000, capital: 19000000 },
	{ month: "Jul", revenue: 50000000, capital: 28000000 },
];

// Dữ liệu đếm đơn hàng và khách hàng
type CountPoint = {
	month: string;
	orders?: number | null; // đơn hàng
	customers?: number | null; // khách hàng
};

const defaultCounts: CountPoint[] = [
	{ month: "Jan", orders: 120, customers: 80 },
	{ month: "Feb", orders: 98, customers: 70 },
	{ month: "Mar", orders: 140, customers: 100 },
	{ month: "Apr", orders: 160, customers: 110 },
	{ month: "May", orders: 110, customers: 85 },
	{ month: "Jun", orders: 130, customers: 95 },
	{ month: "Jul", orders: 165, customers: 120 },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Hàm định dạng tiền tệ VND
function formatVND(n?: number | null) {
	if (n == null) return "0₫";
	return new Intl.NumberFormat("vi-VN").format(n) + "₫";
}

// Tùy chỉnh tooltip để hiển thị thông tin doanh thu
function CustomTooltip({ active, payload, label }: any) {
	if (!active || !payload) return null;
	const rev = payload.find((p: any) => p.dataKey === 'revenue')?.value;
	const cap = payload.find((p: any) => p.dataKey === 'capital')?.value;
	return (
		<div className="bg-white rounded shadow-md p-2 min-w-[160px] text-sm text-gray-900">
			<div className="font-semibold mb-1">{label}</div>
			<div className="text-gray-600">Doanh thu: {formatVND(rev ?? 0)}</div>
			<div className="text-gray-600">Vốn: {formatVND(cap ?? 0)}</div>
		</div>
	);
}

// Chuẩn hóa dữ liệu để đảm bảo có đủ 12 tháng
function normalizeTo12Months(data: MonthlyPoint[] = []): MonthlyPoint[] {
	const revMap = new Map<string, number>();
	const capMap = new Map<string, number>();
	for (const d of data || []) {
		if (!d || !d.month) continue;
		const key = String(d.month).slice(0, 3).toLowerCase();
		revMap.set(key, (d.revenue ?? 0));
		capMap.set(key, (d.capital ?? 0));
	}
	return MONTHS.map((m) => ({
		month: m,
		revenue: revMap.get(m.slice(0, 3).toLowerCase()) ?? 0,
		capital: capMap.get(m.slice(0, 3).toLowerCase()) ?? 0,
	}));
}

// Chuẩn hóa dữ liệu đơn hàng và khách hàng để đảm bảo có đủ 12 tháng
function normalizeCountsTo12Months(data: CountPoint[] = []): CountPoint[] {
	const ordMap = new Map<string, number>();
	const cusMap = new Map<string, number>();
	for (const d of data || []) {
		if (!d || !d.month) continue;
		const key = String(d.month).slice(0, 3).toLowerCase();
		ordMap.set(key, (d.orders ?? 0));
		cusMap.set(key, (d.customers ?? 0));
	}
	return MONTHS.map((m) => ({
		month: m,
		orders: ordMap.get(m.slice(0, 3).toLowerCase()) ?? 0,
		customers: cusMap.get(m.slice(0, 3).toLowerCase()) ?? 0,
	}));
}

// Tùy chỉnh tooltip để hiển thị thông tin đơn hàng và khách hàng
function CountsTooltip({ active, payload, label }: any) {
	if (!active || !payload) return null;
	const ord = payload.find((p: any) => p.dataKey === 'orders')?.value;
	const cus = payload.find((p: any) => p.dataKey === 'customers')?.value;
	return (
		<div className="bg-white rounded shadow-md p-2 min-w-[160px] text-sm text-gray-900">
			<div className="font-semibold mb-1">{label}</div>
			<div className="text-gray-600">Đơn hàng: {typeof ord === 'number' ? ord : 0}</div>
			<div className="text-gray-600">Khách hàng: {typeof cus === 'number' ? cus : 0}</div>
		</div>
	);
}

// Thành phần biểu đồ thống kê doanh thu, đơn hàng và khách hàng theo tháng
type Props = {
	data?: MonthlyPoint[];
	height?: number;
};

export default function StatsChart({ data = defaultData, height = 300 }: Props) {
	const chartData = normalizeTo12Months(data);
	const countsData = normalizeCountsTo12Months(defaultCounts);
	return (
		<div className="space-y-6">
			<Card className="bg-transparent border border-slate-200">
				<CardHeader>
					<CardTitle>Doanh thu theo tháng</CardTitle>
				</CardHeader>
				<CardContent>
					<div style={{ width: "100%", height }}>
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={chartData} margin={{ top: 10, right: 10, left: 56, bottom: 10 }}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="month" />
								<YAxis
									width={80}
									tickMargin={8}
									tickFormatter={(v) => new Intl.NumberFormat("vi-VN").format(Number(v))}
								/>
								<Tooltip content={<CustomTooltip />} />
								<Legend verticalAlign="top" align="right" />
								<Line type="monotone" dataKey="revenue" name="Doanh thu" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 3 }} />
								<Line type="monotone" dataKey="capital" name="Vốn" stroke="#F97316" strokeWidth={2} dot={{ r: 3 }} />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</CardContent>
			</Card>

			<Card className="bg-transparent border border-slate-200">
				<CardHeader>
					<CardTitle>Đơn hàng và khách hàng theo tháng</CardTitle>
				</CardHeader>
				<CardContent>
					<div style={{ width: "100%", height }}>
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={countsData} margin={{ top: 10, right: 10, left: 56, bottom: 10 }}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="month" />
								<YAxis width={80} tickMargin={8} />
								<Tooltip content={<CountsTooltip />} />
								<Legend verticalAlign="top" align="right" />
								<Line type="monotone" dataKey="orders" name="Đơn hàng" stroke="#10B981" strokeWidth={2} dot={{ r: 3 }} />
								<Line type="monotone" dataKey="customers" name="Khách hàng" stroke="#06B6D4" strokeWidth={2} dot={{ r: 3 }} />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

