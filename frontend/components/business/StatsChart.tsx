import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	AreaChart,
	Area,
} from "recharts";

type MonthlyPoint = {
	month: string;
	revenue?: number | null;
};

const defaultData: MonthlyPoint[] = [
	{ month: "Jan", revenue: 40000000 },
	{ month: "Feb", revenue: 25000000 },
	{ month: "Mar", revenue: 40000000 },
	{ month: "Apr", revenue: 50000000 },
	{ month: "May", revenue: 30000000 },
	{ month: "Jun", revenue: 34000000 },
	{ month: "Jul", revenue: 50000000 },
];

// Hàm định dạng tiền tệ VND
function formatVND(n?: number | null) {
	if (n == null) return "0đ";
	return new Intl.NumberFormat("vi-VN").format(n) + "đ";
}

// Tùy chỉnh tooltip để hiển thị thông tin doanh thu
function CustomTooltip({ active, payload, label }: any) {
	if (!active || !payload || !payload.length) return null;
	const value = payload[0].value;
	if (value == null || value === 0) return null;
	return (
		<div className="bg-white rounded shadow-md p-2 min-w-[140px] text-sm text-gray-900">
			<div className="font-semibold mb-1">{label}</div>
			<div className="text-gray-600">Doanh thu: {formatVND(value)}</div>
		</div>
	);
}

type Props = {
	data?: MonthlyPoint[];
	height?: number;
};

export default function StatsChart({ data = defaultData, height = 300 }: Props) {
	return (
        //Chart
		<Card className="bg-transparent border border-slate-200">
			<CardHeader>
				<CardTitle>Doanh thu theo tháng</CardTitle>
			</CardHeader>
			<CardContent>
				<div style={{ width: "100%", height }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: 56, bottom: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis
                                    width={80}
                                    tickMargin={8}
                                    tickFormatter={(v) => new Intl.NumberFormat("vi-VN").format(Number(v))}
                            />
							<Tooltip content={<CustomTooltip />} />
							<Area
								type="natural"
								dataKey="revenue"
								stroke="#8B5CF6"
								fill="#8B5CF6"
								fillOpacity={0.3}
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
}

