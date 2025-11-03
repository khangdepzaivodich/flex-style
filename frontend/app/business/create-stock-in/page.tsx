import { createClient } from '@/lib/supabase/server'
import CreateStockClient from './CreateStockClient'

export default async function Page() {
	const supabase = createClient();

	const {
		data: { session },
	} = await (await supabase).auth.getSession();

	let suppliers = [] as any[];
	let variants = [] as any[];

	try {
		const headers: Record<string, string> = {};
		if (session && (session as any).access_token) {
			headers['Authorization'] = `Bearer ${(session as any).access_token}`;
		}

		const [sRes, vRes] = await Promise.all([
			fetch('http://localhost:8080/api/ncc/public', { headers }),
			fetch('http://localhost:8080/api/chitietnhaphang/variants', { headers }),
		]);
		const sJson = await sRes.json();
		const vJson = await vRes.json();
		suppliers = sJson.data || sJson || [];
		variants = vJson.data || vJson || [];
	} catch (e) {
		console.error('Server fetch error', e);
	}

	return <CreateStockClient supplierOptionsInitial={suppliers} variantOptionsInitial={variants} />;
}