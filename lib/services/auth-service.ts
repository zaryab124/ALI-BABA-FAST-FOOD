import { Profile, UserRole } from '../types';
import { supabase } from '../supabase/client';

export interface AuthenticatedUser extends Profile {
  branch_id?: string;
  branch_name?: string;
}

const STAFF_REGISTRY: Record<string, { id: string; name: string; role: UserRole; branchId?: string; phone: string }> = {
  // Ali Baba Fast Food & Owners
  'owner@alibabafastfood.com': { id: '10000000-0000-0000-0000-000000000001', name: 'Ali Baba Owner', role: 'OWNER', phone: '0320-4649460' },
  'owner@alibaba.com': { id: '10000000-0000-0000-0000-000000000001', name: 'Ali Baba Owner', role: 'OWNER', phone: '0320-4649460' },
  'owner1@okrestaurant.com': { id: '10000000-0000-0000-0000-000000000001', name: 'Ali Baba Owner 1', role: 'OWNER', phone: '0320-4649460' },
  'owner2@okrestaurant.com': { id: '10000000-0000-0000-0000-000000000002', name: 'Ali Baba Owner 2', role: 'OWNER', phone: '0320-4649460' },
  'owner3@okrestaurant.com': { id: '10000000-0000-0000-0000-000000000003', name: 'Ali Baba Owner 3', role: 'OWNER', phone: '0320-4649460' },
  'owner@okrestaurant.com': { id: '10000000-0000-0000-0000-000000000001', name: 'Ali Baba Owner', role: 'OWNER', phone: '0320-4649460' },
  'owner@ok-restaurant.com': { id: '10000000-0000-0000-0000-000000000001', name: 'Ali Baba Owner', role: 'OWNER', phone: '0320-4649460' },
  'owner@ok.com': { id: '10000000-0000-0000-0000-000000000001', name: 'Ali Baba Owner', role: 'OWNER', phone: '0320-4649460' },

  // Branch Admins
  'admin@alibabafastfood.com': { id: '20000000-0000-0000-0000-000000000001', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'admin@alibaba.com': { id: '20000000-0000-0000-0000-000000000001', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'admin.dera@okrestaurant.com': { id: '20000000-0000-0000-0000-000000000002', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'admin.dera@ok-restaurant.com': { id: '20000000-0000-0000-0000-000000000002', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'admin.sherifalon@okrestaurant.com': { id: '20000000-0000-0000-0000-000000000003', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'admin.sherifalon@ok-restaurant.com': { id: '20000000-0000-0000-0000-000000000003', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'admin.kotchuta@okrestaurant.com': { id: '20000000-0000-0000-0000-000000000004', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'admin.kotchuta@ok-restaurant.com': { id: '20000000-0000-0000-0000-000000000004', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'admin@okrestaurant.com': { id: '20000000-0000-0000-0000-000000000002', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'admin@ok-restaurant.com': { id: '20000000-0000-0000-0000-000000000002', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'admin@ok.com': { id: '20000000-0000-0000-0000-000000000002', name: 'Ali Baba Store Admin', role: 'BRANCH_ADMIN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },

  // Kitchen Chefs
  'kitchen@alibabafastfood.com': { id: '30000000-0000-0000-0000-000000000001', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'kitchen@alibaba.com': { id: '30000000-0000-0000-0000-000000000001', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'kitchen.dera@okrestaurant.com': { id: '30000000-0000-0000-0000-000000000001', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'kitchen.dera@ok-restaurant.com': { id: '30000000-0000-0000-0000-000000000001', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'kitchen.sherifalon@okrestaurant.com': { id: '30000000-0000-0000-0000-000000000002', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'kitchen.sherifalon@ok-restaurant.com': { id: '30000000-0000-0000-0000-000000000002', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'kitchen.kotchuta@okrestaurant.com': { id: '30000000-0000-0000-0000-000000000003', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'kitchen.kotchuta@ok-restaurant.com': { id: '30000000-0000-0000-0000-000000000003', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'kitchen@okrestaurant.com': { id: '30000000-0000-0000-0000-000000000001', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'kitchen@ok-restaurant.com': { id: '30000000-0000-0000-0000-000000000001', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'kitchen@ok.com': { id: '30000000-0000-0000-0000-000000000001', name: 'Ali Baba Head Chef', role: 'KITCHEN', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },

  // Delivery Riders
  'rider@alibabafastfood.com': { id: '40000000-0000-0000-0000-000000000001', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider@alibaba.com': { id: '40000000-0000-0000-0000-000000000001', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider1.dera@okrestaurant.com': { id: '40000000-0000-0000-0000-000000000001', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider1.dera@ok-restaurant.com': { id: '40000000-0000-0000-0000-000000000001', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider2.dera@okrestaurant.com': { id: '40000000-0000-0000-0000-000000000002', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider2.dera@ok-restaurant.com': { id: '40000000-0000-0000-0000-000000000002', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider.sherifalon@okrestaurant.com': { id: '40000000-0000-0000-0000-000000000003', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider.sherifalon@ok-restaurant.com': { id: '40000000-0000-0000-0000-000000000003', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider.kotchuta@okrestaurant.com': { id: '40000000-0000-0000-0000-000000000004', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider.kotchuta@ok-restaurant.com': { id: '40000000-0000-0000-0000-000000000004', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider@okrestaurant.com': { id: '40000000-0000-0000-0000-000000000001', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider@ok-restaurant.com': { id: '40000000-0000-0000-0000-000000000001', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },
  'rider@ok.com': { id: '40000000-0000-0000-0000-000000000001', name: 'Ali Baba Delivery Rider', role: 'RIDER', branchId: 'b1000000-0000-0000-0000-000000000001', phone: '0320-4649460' },

  // Customers
  'customer.demo@gmail.com': { id: '50000000-0000-0000-0000-000000000001', name: 'Usman Customer', role: 'CUSTOMER', phone: '0321-5554433' },
};

function getStaffConfig(email: string) {
  const cleanEmail = email.trim().toLowerCase();
  if (STAFF_REGISTRY[cleanEmail]) return STAFF_REGISTRY[cleanEmail];

  // Try domain aliases
  const [localPart] = cleanEmail.split('@');
  for (const domain of ['alibabafastfood.com', 'alibaba.com', 'okrestaurant.com', 'ok-restaurant.com', 'ok.com']) {
    const candidate = `${localPart}@${domain}`;
    if (STAFF_REGISTRY[candidate]) return STAFF_REGISTRY[candidate];
  }

  return undefined;
}

export class AuthService {
  static async registerCustomer(
    name: string,
    email: string,
    phone: string,
    password: string
  ): Promise<Profile> {
    if (!supabase) {
      throw new Error('Supabase client is not configured.');
    }

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          phone,
          role: 'CUSTOMER',
        },
      },
    });

    if (authError) {
      throw new Error(authError.message);
    }

    if (!authData.user) {
      throw new Error('Failed to create account. Please try again.');
    }

    const newProfile: Profile = {
      id: authData.user.id,
      email: email.toLowerCase(),
      full_name: name,
      phone,
      role: 'CUSTOMER',
      created_at: new Date().toISOString(),
    };

    try {
      await supabase
        .from('profiles')
        .upsert(
          {
            id: newProfile.id,
            email: newProfile.email,
            full_name: newProfile.full_name,
            phone: newProfile.phone,
            role: newProfile.role,
          },
          { onConflict: 'id' }
        );
    } catch {}

    return newProfile;
  }

  static async login(
    rawEmail: string,
    password: string,
    expectedRole?: UserRole
  ): Promise<AuthenticatedUser> {
    if (!supabase) {
      throw new Error('Supabase client is not configured.');
    }

    const email = rawEmail.trim().toLowerCase();
    const staffConfig = getStaffConfig(email);

    // 1. Try GoTrue Supabase Auth directly first
    let authUser: any = null;
    try {
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!authError && authData.user) {
        authUser = authData.user;
      }
    } catch {}

    // 2. Reject unauthenticated requests directly through Supabase Auth
    if (!authUser) {
      throw new Error('Invalid login credentials. Please verify your email and password.');
    }

    // 3. Resolve role and permissions
    const effectiveRole: UserRole = staffConfig?.role || expectedRole || 'CUSTOMER';
    const effectiveBranchId = staffConfig?.branchId;
    const effectiveName = staffConfig?.name || authUser?.user_metadata?.full_name || email.split('@')[0];
    const effectivePhone = staffConfig?.phone || authUser?.user_metadata?.phone || '';
    const resolvedUserId = authUser?.id || staffConfig?.id || '00000000-0000-0000-0000-000000000000';

    if (expectedRole && effectiveRole !== expectedRole) {
      if (authUser) await supabase.auth.signOut().catch(() => {});
      throw new Error(`Unauthorized access. This login portal is restricted to ${expectedRole} users.`);
    }

    // 4. Elevate permissions via sync_staff_profile RPC if authenticated
    if (authUser && staffConfig) {
      try {
        await supabase.rpc('sync_staff_profile', {
          p_role: effectiveRole,
          p_branch_id: effectiveBranchId || null,
          p_phone: effectivePhone,
          p_full_name: effectiveName,
        });
      } catch {}

      try {
        await supabase.from('profiles').upsert({
          id: authUser.id,
          email: email,
          full_name: effectiveName,
          phone: effectivePhone,
          role: effectiveRole,
        }, { onConflict: 'id' });
      } catch {}

      if (effectiveBranchId) {
        try {
          await supabase.from('branch_users').upsert({
            user_id: authUser.id,
            branch_id: effectiveBranchId,
            role: effectiveRole,
          }, { onConflict: 'user_id,branch_id' });
        } catch {}
      }
    }

    const authenticatedUser: AuthenticatedUser = {
      id: resolvedUserId,
      email: email,
      full_name: effectiveName,
      phone: effectivePhone,
      role: effectiveRole,
      created_at: new Date().toISOString(),
      branch_id: effectiveBranchId,
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem('ok_current_user', JSON.stringify(authenticatedUser));
    }

    return authenticatedUser;
  }

  static async fetchCurrentUser(): Promise<AuthenticatedUser | null> {
    if (!supabase) return null;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user && user.email) {
        const email = user.email.toLowerCase();
        const staffConfig = getStaffConfig(email);

        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();

        const userRole: UserRole = (profile?.role || staffConfig?.role || 'CUSTOMER') as UserRole;
        let branchId: string | undefined = staffConfig?.branchId;

        if (!branchId && userRole !== 'OWNER' && userRole !== 'CUSTOMER') {
          const { data: branchUser } = await supabase
            .from('branch_users')
            .select('branch_id')
            .eq('user_id', user.id)
            .maybeSingle();

          if (branchUser) {
            branchId = branchUser.branch_id;
          }
        }

        // Auto-heal if staff profile is missing or out of date
        if (staffConfig && (!profile || profile.role !== staffConfig.role)) {
          try {
            await supabase.rpc('sync_staff_profile', {
              p_role: staffConfig.role,
              p_branch_id: staffConfig.branchId || null,
              p_phone: staffConfig.phone,
              p_full_name: staffConfig.name,
            });
          } catch {}

          try {
            await supabase.from('profiles').upsert({
              id: user.id,
              email: email,
              full_name: profile?.full_name || staffConfig.name,
              phone: profile?.phone || staffConfig.phone,
              role: staffConfig.role,
            }, { onConflict: 'id' });
          } catch {}

          if (staffConfig.branchId) {
            try {
              await supabase.from('branch_users').upsert({
                user_id: user.id,
                branch_id: staffConfig.branchId,
                role: staffConfig.role,
              }, { onConflict: 'user_id,branch_id' });
            } catch {}
          }
        }

        return {
          id: user.id,
          email: user.email,
          full_name: profile?.full_name || staffConfig?.name || user.user_metadata?.full_name || user.email.split('@')[0],
          phone: profile?.phone || staffConfig?.phone || user.user_metadata?.phone,
          role: userRole,
          created_at: profile?.created_at || new Date().toISOString(),
          branch_id: branchId,
        };
      }
    } catch {}

    // Check persistent session in localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ok_current_user');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }

    return null;
  }

  static async logout(): Promise<void> {
    if (supabase) {
      await supabase.auth.signOut().catch(() => {});
    }

    if (typeof window !== 'undefined') {
      localStorage.removeItem('ok_current_user');
    }
  }
}


