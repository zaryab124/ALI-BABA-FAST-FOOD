-- ==============================================================================
-- 014_rebrand_alibaba_fast_food.sql
-- Rebranding to Ali Baba Fast Food (New Alibaba Fast Food)
-- Single Branch Architecture: Lahore, Pakistan (Phone: 0320-4649460)
-- Full Menu: Spicy Arabian Broast, Charcoal Grill Burgers, Stuffer Pizzas, Deals
-- ==============================================================================

-- 1. Ensure Single Branch Setup
INSERT INTO public.branches (id, name, slug, address, phone, is_active)
VALUES (
  'b1000000-0000-0000-0000-000000000001',
  'Ali Baba Fast Food',
  'ali-baba-lahore',
  'Lahore, Pakistan',
  '0320-4649460',
  true
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  address = EXCLUDED.address,
  phone = EXCLUDED.phone,
  is_active = true;

-- Deactivate other branches for single-branch operation
UPDATE public.branches 
SET is_active = false 
WHERE id != 'b1000000-0000-0000-0000-000000000001';

-- 2. Branch Capabilities
INSERT INTO public.branch_capabilities (branch_id, dine_in_enabled, takeaway_enabled, delivery_enabled)
VALUES ('b1000000-0000-0000-0000-000000000001', true, true, true)
ON CONFLICT (branch_id) DO UPDATE SET
  dine_in_enabled = true,
  takeaway_enabled = true,
  delivery_enabled = true;

-- 3. Delivery Zones for Lahore
DELETE FROM public.delivery_zones WHERE branch_id = 'b1000000-0000-0000-0000-000000000001';
INSERT INTO public.delivery_zones (id, branch_id, name, delivery_fee, minimum_order_amount, estimated_delivery_minutes, is_active, sort_order)
VALUES
  ('d1000000-0000-0000-0000-000000000001', 'b1000000-0000-0000-0000-000000000001', 'Zone 1 - Local Area & Immediate Neighborhood', 80.00, 350.00, 25, true, 1),
  ('d1000000-0000-0000-0000-000000000002', 'b1000000-0000-0000-0000-000000000001', 'Zone 2 - Central Lahore & Nearby Sectors', 120.00, 500.00, 35, true, 2),
  ('d1000000-0000-0000-0000-000000000003', 'b1000000-0000-0000-0000-000000000001', 'Zone 3 - Greater Lahore & Outer Ring Road', 180.00, 700.00, 45, true, 3);

-- 4. Restaurant Dine-In Tables (QR Standees)
INSERT INTO public.restaurant_tables (id, branch_id, table_number, qr_token, capacity, is_active)
VALUES
  ('t1000000-0000-0000-0000-000000000001', 'b1000000-0000-0000-0000-000000000001', '1', 'qr-alibaba-table-01', 4, true),
  ('t1000000-0000-0000-0000-000000000002', 'b1000000-0000-0000-0000-000000000001', '2', 'qr-alibaba-table-02', 4, true),
  ('t1000000-0000-0000-0000-000000000003', 'b1000000-0000-0000-0000-000000000001', '3', 'qr-alibaba-table-03', 6, true),
  ('t1000000-0000-0000-0000-000000000004', 'b1000000-0000-0000-0000-000000000001', '4', 'qr-alibaba-table-04', 2, true),
  ('t1000000-0000-0000-0000-000000000005', 'b1000000-0000-0000-0000-000000000001', '5', 'qr-alibaba-table-05', 8, true),
  ('t1000000-0000-0000-0000-000000000006', 'b1000000-0000-0000-0000-000000000001', '6', 'qr-alibaba-table-06', 4, true),
  ('t1000000-0000-0000-0000-000000000007', 'b1000000-0000-0000-0000-000000000001', '7', 'qr-alibaba-table-07', 4, true),
  ('t1000000-0000-0000-0000-000000000008', 'b1000000-0000-0000-0000-000000000001', '8', 'qr-alibaba-table-08', 6, true)
ON CONFLICT (id) DO UPDATE SET
  table_number = EXCLUDED.table_number,
  qr_token = EXCLUDED.qr_token,
  is_active = true;

-- 5. Ali Baba Menu Categories
INSERT INTO public.menu_categories (id, name, slug, icon, sort_order, is_active)
VALUES
  ('c-broast', 'Spicy Arabian Broast', 'spicy-arabian-broast', 'Flame', 1, true),
  ('c-deals', 'Ali Baba Deals', 'ali-baba-deals', 'Sparkles', 2, true),
  ('c-grill', 'Special Grill Burgers', 'special-grill-burgers', 'Flame', 3, true),
  ('c-burgers', 'Classic Burgers', 'classic-burgers', 'Utensils', 4, true),
  ('c-premium-pizza', 'Premium''s Pizzas', 'premiums-pizzas', 'Pizza', 5, true),
  ('c-pizza-flavours', 'Pizza Flavours', 'pizza-flavours', 'Pizza', 6, true),
  ('c-stuffer-pizza', 'Crown & Stuffer Pizzas', 'crown-stuffer-pizzas', 'Pizza', 7, true),
  ('c-wraps', 'Wraps & Shawarmas', 'wraps-shawarmas', 'Utensils', 8, true),
  ('c-rolls', 'Pratha Roll''s', 'pratha-rolls', 'Utensils', 9, true),
  ('c-sandwiches', 'Sandwiches & Pasta', 'sandwiches-pasta', 'Utensils', 10, true),
  ('c-appetizers', 'Appetizer''s & Wings', 'appetizers-wings', 'Drumstick', 11, true),
  ('c-dips', 'Dips & Add-Ons', 'dips-addons', 'Soup', 12, true),
  ('c-beverages', 'Beverages & Next Cola', 'beverages', 'Coffee', 13, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  icon = EXCLUDED.icon,
  sort_order = EXCLUDED.sort_order,
  is_active = true;

-- 6. Merchant Bank Default Settings for Ali Baba Fast Food
INSERT INTO public.merchant_payment_info (id, bank_name, account_title, account_number, iban, jazzcash_till_number, jazzcash_account_name, easypaisa_till_number, easypaisa_account_name, is_online_payment_active)
VALUES (
  '10000000-0000-0000-0000-000000000001',
  'Meezan Bank Limited',
  'ALI BABA FAST FOOD',
  '01020304050607',
  'PK42 MEZN 0001 0203 0405 0607',
  '0320-4649460',
  'Ali Baba Fast Food',
  '0320-4649460',
  'Ali Baba Fast Food',
  true
)
ON CONFLICT (id) DO UPDATE SET
  bank_name = EXCLUDED.bank_name,
  account_title = EXCLUDED.account_title,
  jazzcash_till_number = EXCLUDED.jazzcash_till_number,
  jazzcash_account_name = EXCLUDED.jazzcash_account_name,
  easypaisa_till_number = EXCLUDED.easypaisa_till_number,
  easypaisa_account_name = EXCLUDED.easypaisa_account_name;
