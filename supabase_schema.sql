create table if not exists public.app_state (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.accounts (
  username text primary key,
  password_hash text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.receipts (
  id text primary key,
  handle text not null,
  item_count integer,
  paid_unit integer,
  units integer,
  refunded integer not null default 0,
  golden boolean not null default false,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz
);

create table if not exists public.chat_messages (
  id text primary key,
  author text not null,
  text text not null,
  system boolean not null default false,
  type text not null default 'text',
  receipt jsonb,
  reactions jsonb not null default '{}'::jsonb,
  user_reactions jsonb not null default '{}'::jsonb,
  expires_at timestamptz,
  reply_to_id text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz
);

create index if not exists receipts_created_at_idx on public.receipts (created_at desc);
create index if not exists chat_messages_created_at_idx on public.chat_messages (created_at desc);

alter table public.app_state enable row level security;
alter table public.accounts enable row level security;
alter table public.receipts enable row level security;
alter table public.chat_messages enable row level security;

drop policy if exists "Anon read app state" on public.app_state;
drop policy if exists "Anon write app state" on public.app_state;
drop policy if exists "Anon update app state" on public.app_state;
drop policy if exists "Anon read receipts" on public.receipts;
drop policy if exists "Anon read chat" on public.chat_messages;

create policy "Anon read app state"
  on public.app_state
  for select
  to anon
  using (true);

create policy "Anon write app state"
  on public.app_state
  for insert
  to anon
  with check (true);

create policy "Anon update app state"
  on public.app_state
  for update
  to anon
  using (true)
  with check (true);

create policy "Anon read receipts"
  on public.receipts
  for select
  to anon
  using (true);

create policy "Anon read chat"
  on public.chat_messages
  for select
  to anon
  using (true);
