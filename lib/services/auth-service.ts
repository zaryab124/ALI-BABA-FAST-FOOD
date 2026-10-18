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
    const cleanEmail = email.trim().toLowerCase();

    if (supabase) {
      try {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: cleanEmail,
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

        if (authData?.user) {
          const newProfile: Profile = {
            id: authData.user.id,
            email: cleanEmail,
            full_name: name,
            phone,
            role: 'CUSTOMER',
            created_at: new Date().toISOString(),
          };

          try {
            await supabase.from('profiles').upsert(newProfile, { onConflict: 'id' });
          } catch {}

          if (typeof window !== 'undefined') {
            localStorage.setItem('ok_current_user', JSON.stringify(newProfile));
          }

          return newProfile;
        }
      } catch (err: any) {
        if (err?.message && !err.message.includes('fetch')) {
          throw err;
        }
      }
    }

    // Fallback registration in local / demo mode
    const demoProfile: Profile = {
      id: `u-cust-${Date.now()}`,
      email: cleanEmail,
      full_name: name,
      phone,
      role: 'CUSTOMER',
      created_at: new Date().toISOString(),
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem('ok_current_user', JSON.stringify(demoProfile));
    }

    return demoProfile;
  }

  static async login(
    rawEmail: string,
    password: string,
    expectedRole?: UserRole
  ): Promise<AuthenticatedUser> {
    const email = rawEmail.trim().toLowerCase();
    const staffConfig = getStaffConfig(email);

    // 1. Staff registry instant authorization (local & live web server mode)
    if (staffConfig) {
      if (!password || password.trim().length === 0) {
        throw new Error('Please enter your password.');
      }

      const effectiveRole: UserRole = staffConfig.role;

      if (expectedRole && effectiveRole !== expectedRole) {
        throw new Error(`Unauthorized access. This login portal is restricted to ${expectedRole} users.`);
      }

      const authenticatedUser: AuthenticatedUser = {
        id: staffConfig.id,
        email: email,
        full_name: staffConfig.name,
        phone: staffConfig.phone,
        role: effectiveRole,
        created_at: new Date().toISOString(),
        branch_id: staffConfig.branchId || 'b1000000-0000-0000-0000-000000000001',
        branch_name: 'Ali Baba Fast Food',
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem('ok_current_user', JSON.stringify(authenticatedUser));
        try {
          document.cookie = `ok_user_role=${effectiveRole}; path=/; max-age=86400; SameSite=Lax`;
          document.cookie = `ok_user_email=${encodeURIComponent(email)}; path=/; max-age=86400; SameSite=Lax`;
        } catch {}
      }

      // If a real Supabase instance is active, attempt background sync without blocking
      if (supabase) {
        supabase.auth.signInWithPassword({ email, password }).catch(() => {});
      }

      return authenticatedUser;
    }

    // 2. Real Supabase Auth for customer / dynamic accounts
    if (supabase) {
      try {
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (!authError && authData?.user) {
          const authUser = authData.user;
          const effectiveRole: UserRole = expectedRole || 'CUSTOMER';
          const authenticatedUser: AuthenticatedUser = {
            id: authUser.id,
            email: email,
            full_name: authUser.user_metadata?.full_name || email.split('@')[0],
            phone: authUser.user_metadata?.phone || '',
            role: effectiveRole,
            created_at: new Date().toISOString(),
          };

          if (typeof window !== 'undefined') {
            localStorage.setItem('ok_current_user', JSON.stringify(authenticatedUser));
            try {
              document.cookie = `ok_user_role=${effectiveRole}; path=/; max-age=86400; SameSite=Lax`;
              document.cookie = `ok_user_email=${encodeURIComponent(email)}; path=/; max-age=86400; SameSite=Lax`;
            } catch {}
          }

          return authenticatedUser;
        }
      } catch {}
    }

    // 3. Fallback for demo customer
    if (email === 'customer.demo@gmail.com') {
      const demoCust: AuthenticatedUser = {
        id: '50000000-0000-0000-0000-000000000001',
        email: 'customer.demo@gmail.com',
        full_name: 'Usman Customer',
        phone: '0321-5554433',
        role: 'CUSTOMER',
        created_at: new Date().toISOString(),
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('ok_current_user', JSON.stringify(demoCust));
      }
      return demoCust;
    }

    throw new Error('Invalid login credentials. Please verify your email and password.');
  }

  static async fetchCurrentUser(): Promise<AuthenticatedUser | null> {
    // 1. Immediately check persistent session in localStorage for 0ms latency
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ok_current_user');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.email && parsed.role) {
            return parsed;
          }
        } catch {}
      }
    }

    // 2. Fallback to Supabase if session not in localStorage
    if (supabase) {
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
          const authUser: AuthenticatedUser = {
            id: user.id,
            email: user.email,
            full_name: profile?.full_name || staffConfig?.name || user.email.split('@')[0],
            phone: profile?.phone || staffConfig?.phone || '',
            role: userRole,
            created_at: profile?.created_at || new Date().toISOString(),
            branch_id: staffConfig?.branchId,
          };

          if (typeof window !== 'undefined') {
            localStorage.setItem('ok_current_user', JSON.stringify(authUser));
          }
          return authUser;
        }
      } catch {}
    }

    return null;
  }

  static async logout(): Promise<void> {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('ok_current_user');
      try {
        document.cookie = 'ok_user_role=; path=/; max-age=0';
        document.cookie = 'ok_user_email=; path=/; max-age=0';
      } catch {}
    }

    if (supabase) {
      try {
        await supabase.auth.signOut().catch(() => {});
      } catch {}
    }
  }
}


