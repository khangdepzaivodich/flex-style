import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from 'src/supabase/types';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly supabase: SupabaseClient<Database>;

  constructor() {
    this.supabase = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) throw new UnauthorizedException('Missing token');

    const token = authHeader.replace('Bearer ', '');
    const { data, error } = await this.supabase.auth.getUser(token);

    if (error || !data?.user)
      throw new UnauthorizedException('Invalid or expired token');

    request.user = data.user; // attach Supabase user
    return true;
  }
}
