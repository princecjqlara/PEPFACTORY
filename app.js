const currency = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

const defaultProducts = [
  {
    id: "deti-core",
    name: "DETI Core Stack",
    category: "Core",
    type: "Flagship",
    description: "Daily core bundle for the main DETI stack.",
    originalPrice: 2499,
    salePrice: 1999,
    wholesaleTiers: [{ minQty: 3, unitPrice: 1799 }],
    saleEnabled: true,
    saleEndsAt: Date.now() + 1000 * 60 * 60 * 24,
    stock: 42,
    preorderEnabled: false,
    preorderPrice: 0,
    preorderStock: 0,
    preorderEndsAt: null,
    bulkBuyAt: null,
    availableAt: null,
    banner: "Sale",
    featured: true,
    sortOrder: 1,
    poolTarget: 24,
    poolJoined: 17,
    image: "assets/deti-storefront.png",
  },
  {
    id: "deti-night",
    name: "Night Recovery Pack",
    category: "Recovery",
    type: "Bundle",
    description: "Evening recovery bundle for repeat buyers.",
    originalPrice: 2199,
    salePrice: 0,
    wholesaleTiers: [{ minQty: 3, unitPrice: 1999 }, { minQty: 6, unitPrice: 1799 }],
    saleEnabled: false,
    saleEndsAt: null,
    stock: 31,
    preorderEnabled: false,
    preorderPrice: 0,
    preorderStock: 0,
    preorderEndsAt: null,
    bulkBuyAt: null,
    availableAt: null,
    banner: "Bundle",
    featured: false,
    sortOrder: 3,
    poolTarget: 18,
    poolJoined: 9,
    image: "assets/deti-storefront.png",
  },
  {
    id: "deti-focus",
    name: "Focus Lab Kit",
    category: "Performance",
    type: "Limited",
    description: "Limited focus set for productivity sessions.",
    originalPrice: 1899,
    salePrice: 1499,
    wholesaleTiers: [{ minQty: 3, unitPrice: 1399 }],
    saleEnabled: true,
    saleEndsAt: Date.now() + 1000 * 60 * 60 * 12,
    stock: 26,
    preorderEnabled: false,
    preorderPrice: 0,
    preorderStock: 0,
    preorderEndsAt: null,
    bulkBuyAt: null,
    availableAt: null,
    banner: "Hot",
    featured: true,
    sortOrder: 2,
    poolTarget: 30,
    poolJoined: 22,
    image: "assets/deti-storefront.png",
  },
];

const demoProducts = [
  {
    id: "demo-glow-kit",
    name: "Glow Repair Kit",
    category: "Recovery",
    type: "Demo Bundle",
    description: "Fake bundle for testing two-piece and six-piece wholesale pricing.",
    originalPrice: 1699,
    salePrice: 1499,
    wholesaleTiers: [{ minQty: 2, unitPrice: 1399 }, { minQty: 6, unitPrice: 1199 }],
    saleEnabled: true,
    saleEndsAt: Date.now() + 1000 * 60 * 60 * 18,
    stock: 54,
    preorderEnabled: false,
    preorderPrice: 0,
    preorderStock: 0,
    preorderEndsAt: null,
    bulkBuyAt: null,
    availableAt: null,
    banner: "Demo",
    featured: true,
    sortOrder: 2,
    poolTarget: 12,
    poolJoined: 6,
    image: "assets/deti-storefront.png",
  },
  {
    id: "demo-starter-vial",
    name: "Starter Vial Pack",
    category: "Starter",
    type: "Single",
    description: "Fake low-price add-on product for checkout suggestion testing.",
    originalPrice: 899,
    salePrice: 0,
    wholesaleTiers: [{ minQty: 3, unitPrice: 799 }, { minQty: 10, unitPrice: 699 }],
    saleEnabled: false,
    saleEndsAt: null,
    stock: 88,
    preorderEnabled: false,
    preorderPrice: 0,
    preorderStock: 0,
    preorderEndsAt: null,
    bulkBuyAt: null,
    availableAt: null,
    banner: "Cheap",
    featured: false,
    sortOrder: 4,
    poolTarget: 10,
    poolJoined: 4,
    image: "assets/deti-storefront.png",
  },
  {
    id: "demo-performance-stack",
    name: "Performance Stack",
    category: "Performance",
    type: "Stack",
    description: "Fake stack with three-piece wholesale pricing.",
    originalPrice: 2799,
    salePrice: 2499,
    wholesaleTiers: [{ minQty: 3, unitPrice: 2199 }, { minQty: 5, unitPrice: 1999 }],
    saleEnabled: true,
    saleEndsAt: Date.now() + 1000 * 60 * 60 * 36,
    stock: 37,
    preorderEnabled: false,
    preorderPrice: 0,
    preorderStock: 0,
    preorderEndsAt: null,
    bulkBuyAt: null,
    availableAt: null,
    banner: "Stack",
    featured: false,
    sortOrder: 5,
    poolTarget: 18,
    poolJoined: 11,
    image: "assets/deti-storefront.png",
  },
  {
    id: "demo-preorder-bundle",
    name: "Incoming Bulk Bundle",
    category: "Preorder",
    type: "Incoming",
    description: "Fake preorder product for testing the bulk buy menu.",
    originalPrice: 3299,
    salePrice: 0,
    wholesaleTiers: [],
    saleEnabled: false,
    saleEndsAt: null,
    stock: 0,
    preorderEnabled: true,
    preorderPrice: 2899,
    preorderStock: 24,
    preorderEndsAt: Date.now() + 1000 * 60 * 60 * 48,
    bulkBuyAt: Date.now() + 1000 * 60 * 60 * 72,
    availableAt: Date.now() + 1000 * 60 * 60 * 24 * 7,
    banner: "Preorder",
    featured: false,
    sortOrder: 6,
    poolTarget: 24,
    poolJoined: 8,
    image: "assets/deti-storefront.png",
  },
  {
    id: "demo-micro-addon",
    name: "Micro Add-On",
    category: "Starter",
    type: "Add-on",
    description: "Fake cheapest item for add-on and cart upsell testing.",
    originalPrice: 499,
    salePrice: 449,
    wholesaleTiers: [{ minQty: 4, unitPrice: 399 }, { minQty: 12, unitPrice: 349 }],
    saleEnabled: true,
    saleEndsAt: null,
    stock: 120,
    preorderEnabled: false,
    preorderPrice: 0,
    preorderStock: 0,
    preorderEndsAt: null,
    bulkBuyAt: null,
    availableAt: null,
    banner: "Add-on",
    featured: false,
    sortOrder: 7,
    poolTarget: 8,
    poolJoined: 3,
    image: "assets/deti-storefront.png",
  },
];

const tiers = [
  { label: "1-5 buyers", min: 1, max: 5, price: 2499 },
  { label: "6-15 buyers", min: 6, max: 15, price: 1999 },
  { label: "16+ buyers", min: 16, max: Infinity, price: 1499 },
];

const weekdayOptions = [
  { value: 0, short: "Sun", label: "Sunday" },
  { value: 1, short: "Mon", label: "Monday" },
  { value: 2, short: "Tue", label: "Tuesday" },
  { value: 3, short: "Wed", label: "Wednesday" },
  { value: 4, short: "Thu", label: "Thursday" },
  { value: 5, short: "Fri", label: "Friday" },
  { value: 6, short: "Sat", label: "Saturday" },
];

const reactionTypes = [
  { key: "like", label: "Like", emoji: "👍" },
  { key: "love", label: "Love", emoji: "💗" },
  { key: "haha", label: "Haha", emoji: "😂" },
  { key: "wow", label: "Wow", emoji: "😮" },
  { key: "sad", label: "Sad", emoji: "😢" },
  { key: "angry", label: "Angry", emoji: "😡" },
];

const legacyStateKey = "deti-state";
const userStateKey = "deti-user-state";
const communityStateKey = "deti-community-state";
const accountsStateKey = "deti-accounts";
const defaultAdminPasswordHash = "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9";
const localDataResetVersionKey = "deti-local-reset-version";
const localDataResetVersion = "2026-05-23-admin-only-clean";
const communityDataResetVersion = localDataResetVersion;
const productImageDataUrlLimit = 180000;
const apiBase = window.location.origin;
const systemProfileAuthor = "DETI System";
const receiptStatusOptions = [
  { key: "pending", label: "Pending" },
  { key: "verified", label: "Payment Verified" },
  { key: "processing", label: "Processing" },
  { key: "confirmed", label: "Confirmed" },
  { key: "delivered", label: "Delivered" },
  { key: "received", label: "Received" },
  { key: "rejected", label: "Rejected" },
];
const trollTriggerOptions = [
  { key: "visit", label: "Site visit" },
  { key: "purchase", label: "Purchase" },
  { key: "account-created", label: "Account created" },
  { key: "first-message-day", label: "User first message of day" },
];
const trollActionOptions = [
  { key: "group-message", label: "Message in GC" },
  { key: "photo-message", label: "Photo in GC" },
  { key: "private-message", label: "Private admin message" },
  { key: "receipt", label: "Send receipt" },
];
const defaultTrollControls = {
  enabled: false,
  roundRobin: true,
  maxParallel: 1,
  selectedRuleId: "",
  memberStatsEnabled: false,
  activeMultiplier: 1,
  totalMultiplier: 1,
  inactiveMembers: 0,
  cursorByTrigger: {},
  firstMessageDayByUser: {},
  trollAccounts: [],
  rules: [],
};
let remoteSyncAvailable = false;
let remoteSyncInFlight = false;
let remoteSyncDisabled = false;
let mediaUploadDisabled = false;
let sharedCommunityReady = false;
let sharedCommunityUnavailable = false;
let pendingLocalCommunitySeed = null;
const userStateKeys = [
  "handle",
  "username",
  "passwordHash",
  "passwordSet",
  "joinedCommunity",
  "replyToId",
  "openActionMenuId",
  "openReactionMenuId",
  "mentionInboxOpen",
  "readMentionIds",
  "chatMode",
  "adminTab",
  "adminReceiptStatusTab",
  "adminPrivateChatMember",
  "adminPrivateChatSearch",
  "adminPrivateSendMode",
  "adminActingAs",
  "adminGroupSendAsSearch",
  "adminPrivateSendAsSearch",
  "adminGroupVisibility",
  "adminChatFilter",
  "adminReceiptSearch",
  "adminReceiptPage",
  "adminAccountPage",
  "adminTrollAccountSearch",
  "cartOpen",
  "storeSearch",
  "storeCategory",
  "cart",
];
const communityStateKeys = [
  "buyerCount",
  "transactionCount",
  "receipts",
  "chat",
  "announcements",
  "directMessages",
  "members",
  "moderation",
  "products",
  "productDeletedAt",
  "productCategoryUpdatedAt",
  "productCategoryDeletedAt",
  "announcementDeletedAt",
  "chatDeletedAt",
  "directMessageDeletedAt",
  "memberDeletedAt",
  "replacementDeletedAt",
  "trollRuleDeletedAt",
  "productCategories",
  "demoCatalogSeeded",
  "buyerControlsEnabled",
  "goldenTicketEnabled",
  "trollControls",
  "dataResetVersion",
  "dataResetAt",
];

const fallbackState = {
  handle: `Anon-${Math.floor(1000 + Math.random() * 9000)}`,
  username: "",
  passwordHash: "",
  passwordSet: false,
  joinedCommunity: false,
  replyToId: null,
  openActionMenuId: null,
  openReactionMenuId: null,
  mentionInboxOpen: false,
  readMentionIds: [],
  chatMode: "group",
  adminTab: "announcements",
  adminReceiptStatusTab: "pending",
  adminPrivateChatMember: "",
  adminPrivateChatSearch: "",
  adminPrivateSendMode: "direct",
  adminActingAs: "",
  adminGroupSendAsSearch: "",
  adminPrivateSendAsSearch: "",
  adminGroupVisibility: "all",
  adminChatFilter: "all",
  adminReceiptSearch: "",
  adminReceiptPage: 1,
  adminAccountPage: 1,
  adminTrollAccountSearch: "",
  cartOpen: false,
  storeSearch: "",
  storeCategory: "All",
  buyerCount: 0,
  transactionCount: 0,
  buyerControlsEnabled: true,
  goldenTicketEnabled: true,
  trollControls: structuredClone(defaultTrollControls),
  products: structuredClone(defaultProducts),
  productDeletedAt: {},
  productCategoryUpdatedAt: {},
  productCategoryDeletedAt: {},
  announcementDeletedAt: {},
  chatDeletedAt: {},
  directMessageDeletedAt: {},
  memberDeletedAt: {},
  replacementDeletedAt: {},
  trollRuleDeletedAt: {},
  productCategories: [...new Set(defaultProducts.map((product) => product.category))],
  demoCatalogSeeded: true,
  cart: {},
  receipts: [],
  chat: [],
  announcements: [],
  directMessages: [],
  members: {},
  moderation: { blocked: {}, timeouts: {}, replacements: [] },
  dataResetVersion: communityDataResetVersion,
  dataResetAt: 0,
};

applyLocalDataReset();
let state = loadState();
let cartNoticeTimer = null;
let visibleChatCount = 20;
let pendingPaymentReceipt = null;
let pendingChatMedia = null;
let pendingPrivateChatMedia = null;
let pendingCheckoutAfterAuth = false;
let authMode = "join";
let lastCommunitySnapshot = "";
let chatSearchQuery = "";
let focusedBulkBuyProductId = "";
let trollStatsSaveTimer = null;

const els = {
  anonHandle: document.querySelector("#anonHandle"),
  buyerCount: document.querySelector("#buyerCount"),
  currentTier: document.querySelector("#currentTier"),
  nextDraw: document.querySelector("#nextDraw"),
  saleKicker: document.querySelector("#saleKicker"),
  heroHeadline: document.querySelector("#heroHeadline"),
  tierTrack: document.querySelector("#tierTrack"),
  refundStrip: document.querySelector("#refundStrip"),
  bulkBuyList: document.querySelector("#bulkBuyList"),
  categoryFilter: document.querySelector("#categoryFilter"),
  productGrid: document.querySelector("#productGrid"),
  stockChip: document.querySelector("#stockChip"),
  cartList: document.querySelector("#cartList"),
  cartSuggestions: document.querySelector("#cartSuggestions"),
  cartTotal: document.querySelector("#cartTotal"),
  cartCount: document.querySelector("#cartCount"),
  cartPopupBtn: document.querySelector("#cartPopupBtn"),
  preorderCartBtn: document.querySelector("#preorderCartBtn"),
  preorderCartCount: document.querySelector("#preorderCartCount"),
  cartPopover: document.querySelector("#cartPopover"),
  cartSentCard: document.querySelector("#cartSentCard"),
  paymentReceiptInput: document.querySelector("#paymentReceiptInput"),
  paymentReceiptPreview: document.querySelector("#paymentReceiptPreview"),
  paymentReceiptImage: document.querySelector("#paymentReceiptImage"),
  paymentReceiptName: document.querySelector("#paymentReceiptName"),
  removePaymentReceiptBtn: document.querySelector("#removePaymentReceiptBtn"),
  checkoutOverlay: document.querySelector("#checkoutOverlay"),
  checkoutCloseBtn: document.querySelector("#checkoutCloseBtn"),
  checkoutContinueBtn: document.querySelector("#checkoutContinueBtn"),
  checkoutSubmitBtn: document.querySelector("#checkoutSubmitBtn"),
  checkoutModalList: document.querySelector("#checkoutModalList"),
  checkoutUpsellList: document.querySelector("#checkoutUpsellList"),
  checkoutModalTotal: document.querySelector("#checkoutModalTotal"),
  checkoutModalCount: document.querySelector("#checkoutModalCount"),
  storeSearch: document.querySelector("#storeSearch"),
  orderSummary: document.querySelector("#orderSummary"),
  orderList: document.querySelector("#orderList"),
  receiptList: document.querySelector("#receiptList"),
  announcementList: document.querySelector("#announcementList"),
  pinnedSystemMessage: document.querySelector("#pinnedSystemMessage"),
  mentionInboxBtn: document.querySelector("#mentionInboxBtn"),
  mentionCount: document.querySelector("#mentionCount"),
  mentionInbox: document.querySelector("#mentionInbox"),
  blockedNotice: document.querySelector("#blockedNotice"),
  blockedNoticeTitle: document.querySelector("#blockedNoticeTitle"),
  blockedNoticeText: document.querySelector("#blockedNoticeText"),
  blockedReplacementUsernameInput: document.querySelector("#blockedReplacementUsernameInput"),
  blockedReplacementPasswordInput: document.querySelector("#blockedReplacementPasswordInput"),
  blockedReplacementError: document.querySelector("#blockedReplacementError"),
  blockedReplacementBtn: document.querySelector("#blockedReplacementBtn"),
  chatPanel: document.querySelector(".chat-panel"),
  chatPanelEyebrow: document.querySelector("#chatPanelEyebrow"),
  chatPanelTitle: document.querySelector("#chatPanelTitle"),
  chatModeButtons: document.querySelectorAll("[data-chat-mode]"),
  chatFeed: document.querySelector("#chatFeed"),
  chatSearchInput: document.querySelector("#chatSearchInput"),
  adminChatFilterSelect: document.querySelector("#adminChatFilterSelect"),
  chatSearchStatus: document.querySelector("#chatSearchStatus"),
  checkoutBtn: document.querySelector("#checkoutBtn"),
  clearCartBtn: document.querySelector("#clearCartBtn"),
  adminPanel: document.querySelector("#adminPanel"),
  adminStatus: document.querySelector("#adminStatus"),
  adminBuyerCount: document.querySelector("#adminBuyerCount"),
  adminTransactionCount: document.querySelector("#adminTransactionCount"),
  adminReceiptCount: document.querySelector("#adminReceiptCount"),
  adminChatCount: document.querySelector("#adminChatCount"),
  adminBroadcastForm: document.querySelector("#adminBroadcastForm"),
  adminAnnouncementTitle: document.querySelector("#adminAnnouncementTitle"),
  adminAnnouncementText: document.querySelector("#adminAnnouncementText"),
  adminBuyerControlsToggle: document.querySelector("#adminBuyerControlsToggle"),
  adminBuyerAmountInput: document.querySelector("#adminBuyerAmountInput"),
  adminProductSelect: document.querySelector("#adminProductSelect"),
  adminProductList: document.querySelector("#adminProductList"),
  adminProductNameInput: document.querySelector("#adminProductNameInput"),
  adminProductCategorySelect: document.querySelector("#adminProductCategorySelect"),
  adminNewCategoryInput: document.querySelector("#adminNewCategoryInput"),
  adminAddCategoryBtn: document.querySelector("#adminAddCategoryBtn"),
  adminRemoveCategoryBtn: document.querySelector("#adminRemoveCategoryBtn"),
  adminCategoryList: document.querySelector("#adminCategoryList"),
  adminProductTypeInput: document.querySelector("#adminProductTypeInput"),
  adminProductBannerInput: document.querySelector("#adminProductBannerInput"),
  adminProductSortInput: document.querySelector("#adminProductSortInput"),
  adminProductFeaturedInput: document.querySelector("#adminProductFeaturedInput"),
  adminProductDescriptionInput: document.querySelector("#adminProductDescriptionInput"),
  adminProductOriginalPriceInput: document.querySelector("#adminProductOriginalPriceInput"),
  adminProductSalePriceInput: document.querySelector("#adminProductSalePriceInput"),
  adminProductWholesaleInput: document.querySelector("#adminProductWholesaleInput"),
  adminProductVariantsInput: document.querySelector("#adminProductVariantsInput"),
  adminProductSaleEnabledInput: document.querySelector("#adminProductSaleEnabledInput"),
  adminProductSaleEndsInput: document.querySelector("#adminProductSaleEndsInput"),
  adminProductStockInput: document.querySelector("#adminProductStockInput"),
  adminProductOutOfStockInput: document.querySelector("#adminProductOutOfStockInput"),
  adminProductPreorderInput: document.querySelector("#adminProductPreorderInput"),
  adminProductBulkBuyAtInput: document.querySelector("#adminProductBulkBuyAtInput"),
  adminProductBulkBuyRepeatTimeInput: document.querySelector("#adminProductBulkBuyRepeatTimeInput"),
  adminProductAvailableAtInput: document.querySelector("#adminProductAvailableAtInput"),
  adminProductImageUrlInput: document.querySelector("#adminProductImageUrlInput"),
  adminProductImageInput: document.querySelector("#adminProductImageInput"),
  adminGoldenTicketToggle: document.querySelector("#adminGoldenTicketToggle"),
  adminGoldenDistanceInput: document.querySelector("#adminGoldenDistanceInput"),
  adminReceiptSearchInput: document.querySelector("#adminReceiptSearchInput"),
  adminReceiptStatusTabs: document.querySelector("#adminReceiptStatusTabs"),
  adminReceiptList: document.querySelector("#adminReceiptList"),
  adminReceiptPagination: document.querySelector("#adminReceiptPagination"),
  adminQuickUsernameInput: document.querySelector("#adminQuickUsernameInput"),
  adminQuickPasswordInput: document.querySelector("#adminQuickPasswordInput"),
  adminCreateQuickAccountBtn: document.querySelector("#adminCreateQuickAccountBtn"),
  adminRestoreAdminHandleBtn: document.querySelector("#adminRestoreAdminHandleBtn"),
  adminAccountList: document.querySelector("#adminAccountList"),
  adminMemberList: document.querySelector("#adminMemberList"),
  adminPulseBtn: document.querySelector("#adminPulseBtn"),
  adminAddBuyersBtn: document.querySelector("#adminAddBuyersBtn"),
  adminSetBuyersBtn: document.querySelector("#adminSetBuyersBtn"),
  adminTrollAutomationToggle: document.querySelector("#adminTrollAutomationToggle"),
  adminTrollRoundRobinToggle: document.querySelector("#adminTrollRoundRobinToggle"),
  adminTrollMaxParallelInput: document.querySelector("#adminTrollMaxParallelInput"),
  adminTrollAccountSelect: document.querySelector("#adminTrollAccountSelect"),
  adminTrollTriggerSelect: document.querySelector("#adminTrollTriggerSelect"),
  adminTrollActionSelect: document.querySelector("#adminTrollActionSelect"),
  adminTrollReceiptUnitsInput: document.querySelector("#adminTrollReceiptUnitsInput"),
  adminTrollProductSelect: document.querySelector("#adminTrollProductSelect"),
  adminTrollDelaySecondsInput: document.querySelector("#adminTrollDelaySecondsInput"),
  adminTrollDelayJitterInput: document.querySelector("#adminTrollDelayJitterInput"),
  adminTrollMessageInput: document.querySelector("#adminTrollMessageInput"),
  adminTrollPhotoInput: document.querySelector("#adminTrollPhotoInput"),
  adminTrollReceiptImageInput: document.querySelector("#adminTrollReceiptImageInput"),
  adminTrollUploadSummary: document.querySelector("#adminTrollUploadSummary"),
  adminNewTrollRuleBtn: document.querySelector("#adminNewTrollRuleBtn"),
  adminSaveTrollRuleBtn: document.querySelector("#adminSaveTrollRuleBtn"),
  adminDeleteTrollRuleBtn: document.querySelector("#adminDeleteTrollRuleBtn"),
  adminTrollRuleList: document.querySelector("#adminTrollRuleList"),
  adminTrollMemberStatsToggle: document.querySelector("#adminTrollMemberStatsToggle"),
  adminTrollActiveMultiplierInput: document.querySelector("#adminTrollActiveMultiplierInput"),
  adminTrollTotalMultiplierInput: document.querySelector("#adminTrollTotalMultiplierInput"),
  adminTrollInactiveMembersInput: document.querySelector("#adminTrollInactiveMembersInput"),
  adminSaveTrollStatsBtn: document.querySelector("#adminSaveTrollStatsBtn"),
  adminTrollMemberStatsPreview: document.querySelector("#adminTrollMemberStatsPreview"),
  adminNewProductBtn: document.querySelector("#adminNewProductBtn"),
  adminSaveProductBtn: document.querySelector("#adminSaveProductBtn"),
  adminRemoveProductBtn: document.querySelector("#adminRemoveProductBtn"),
  adminSetGoldenBtn: document.querySelector("#adminSetGoldenBtn"),
  adminRunGoldenBtn: document.querySelector("#adminRunGoldenBtn"),
  adminClearChatBtn: document.querySelector("#adminClearChatBtn"),
  adminClearReceiptsBtn: document.querySelector("#adminClearReceiptsBtn"),
  adminPreorderProductSelect: document.querySelector("#adminPreorderProductSelect"),
  adminPreorderEnabledInput: document.querySelector("#adminPreorderEnabledInput"),
  adminPreorderOutOfStockInput: document.querySelector("#adminPreorderOutOfStockInput"),
  adminPreorderPriceInput: document.querySelector("#adminPreorderPriceInput"),
  adminPreorderStockInput: document.querySelector("#adminPreorderStockInput"),
  adminPreorderWholesaleInput: document.querySelector("#adminPreorderWholesaleInput"),
  adminPreorderEndsAtInput: document.querySelector("#adminPreorderEndsAtInput"),
  adminPreorderBulkBuyAtInput: document.querySelector("#adminPreorderBulkBuyAtInput"),
  adminPreorderBulkBuyRepeatTimeInput: document.querySelector("#adminPreorderBulkBuyRepeatTimeInput"),
  adminPreorderAvailableAtInput: document.querySelector("#adminPreorderAvailableAtInput"),
  adminSavePreorderBtn: document.querySelector("#adminSavePreorderBtn"),
  adminClosePreorderBtn: document.querySelector("#adminClosePreorderBtn"),
  adminPreorderProductList: document.querySelector("#adminPreorderProductList"),
  chatForm: document.querySelector("#chatForm"),
  adminGroupSendAsSearchInput: document.querySelector("#adminGroupSendAsSearchInput"),
  adminGroupSendAsSelect: document.querySelector("#adminGroupSendAsSelect"),
  adminGroupVisibilitySelect: document.querySelector("#adminGroupVisibilitySelect"),
  chatInput: document.querySelector("#chatInput"),
  chatMediaBtn: document.querySelector("#chatMediaBtn"),
  chatMediaInput: document.querySelector("#chatMediaInput"),
  chatMediaPreview: document.querySelector("#chatMediaPreview"),
  privateChatMembers: document.querySelector("#privateChatMembers"),
  privateMemberSearchInput: document.querySelector("#privateMemberSearchInput"),
  privateMemberSelect: document.querySelector("#privateMemberSelect"),
  adminPrivateSendAsSearchInput: document.querySelector("#adminPrivateSendAsSearchInput"),
  adminPrivateSendAsSelect: document.querySelector("#adminPrivateSendAsSelect"),
  adminPrivateVisibilitySelect: document.querySelector("#adminPrivateVisibilitySelect"),
  privateSendModeSelect: document.querySelector("#privateSendModeSelect"),
  privateChatFeed: document.querySelector("#privateChatFeed"),
  privateChatForm: document.querySelector("#privateChatForm"),
  privateChatInput: document.querySelector("#privateChatInput"),
  privateChatMediaBtn: document.querySelector("#privateChatMediaBtn"),
  privateChatMediaInput: document.querySelector("#privateChatMediaInput"),
  privateChatMediaPreview: document.querySelector("#privateChatMediaPreview"),
  sendButton: document.querySelector(".send-button"),
  replyPreview: document.querySelector("#replyPreview"),
  replyText: document.querySelector("#replyText"),
  cancelReplyBtn: document.querySelector("#cancelReplyBtn"),
  goldenOverlay: document.querySelector("#goldenOverlay"),
  goldenReceipt: document.querySelector("#goldenReceipt"),
  signinBtn: document.querySelector("#signinBtn"),
  joinCommunityBtn: document.querySelector("#joinCommunityBtn"),
  signoutBtn: document.querySelector("#signoutBtn"),
  authOverlay: document.querySelector("#authOverlay"),
  authForm: document.querySelector("#authForm"),
  authCloseBtn: document.querySelector("#authCloseBtn"),
  authModeLabel: document.querySelector("#authModeLabel"),
  authTitle: document.querySelector("#authTitle"),
  authUsernameInput: document.querySelector("#authUsernameInput"),
  authPasswordInput: document.querySelector("#authPasswordInput"),
  authError: document.querySelector("#authError"),
  tabButtons: document.querySelectorAll("[data-tab]"),
  workspaceViews: document.querySelectorAll("[data-view]"),
  adminTabButtons: document.querySelectorAll("[data-admin-tab]"),
  adminPanels: document.querySelectorAll("[data-admin-panel]"),
};

function loadState() {
  const base = structuredClone(fallbackState);
  const legacyState = readSavedState(legacyStateKey);
  const savedUserState = readSavedState(userStateKey);
  const savedCommunityState = readSavedState(communityStateKey);
  const savedCommunityCandidate = {
    ...pickStateKeys(legacyState, communityStateKeys),
    ...pickStateKeys(savedCommunityState, communityStateKeys),
  };
  const savedViewerState = {
    ...pickStateKeys(legacyState, userStateKeys),
    ...pickStateKeys(savedUserState, userStateKeys),
  };
  const canUseSavedCommunity = Boolean(savedViewerState.joinedCommunity || savedViewerState.username || savedViewerState.passwordHash);
  const canPromoteSavedCommunity = hasCustomCommunityContent(savedCommunityCandidate);
  if (canPromoteSavedCommunity) {
    pendingLocalCommunitySeed = savedCommunityCandidate;
  }

  const nextState = {
    ...base,
    ...(canUseSavedCommunity ? pickStateKeys(legacyState, [...userStateKeys, ...communityStateKeys]) : pickStateKeys(legacyState, userStateKeys)),
    ...(canUseSavedCommunity || canPromoteSavedCommunity ? pickStateKeys(savedCommunityCandidate, communityStateKeys) : {}),
    ...pickStateKeys(savedUserState, userStateKeys),
  };

  return normalizeState(nextState);
}

function hasCustomCommunityContent(communityState = {}) {
  const products = Array.isArray(communityState.products) ? communityState.products : [];
  const seededProductsById = new Map([...defaultProducts, ...demoProducts].map((product) => [product.id, product]));
  const hasCustomProducts = products.some((product) => product?.id && !isSeededProductMatch(product, seededProductsById.get(product.id)));
  const visibleChat = Array.isArray(communityState.chat)
    ? communityState.chat.filter((message) => (!message.system || message.type === "receipt") && !String(message.id || "").startsWith("chat-seed-"))
    : [];
  const hasOrders = Array.isArray(communityState.receipts) && communityState.receipts.length > 0;
  const hasAnnouncements = Array.isArray(communityState.announcements) && communityState.announcements.length > 0;
  return hasCustomProducts || visibleChat.length > 0 || hasOrders || hasAnnouncements;
}

function isSeededProductMatch(product, seededProduct) {
  if (!seededProduct) return false;
  const comparableKeys = [
    "name",
    "category",
    "type",
    "description",
    "originalPrice",
    "salePrice",
    "stock",
    "preorderEnabled",
    "preorderPrice",
    "preorderStock",
    "banner",
    "featured",
    "image",
  ];
  return comparableKeys.every((key) => product?.[key] === seededProduct?.[key]) && JSON.stringify(product?.wholesaleTiers || []) === JSON.stringify(seededProduct?.wholesaleTiers || []);
}

function hasRemoteCommunityContent(communityState = {}) {
  if (!communityState || !Object.keys(communityState).length) return false;
  return hasCustomCommunityContent(communityState) || (Array.isArray(communityState.products) && communityState.products.length > 0);
}

function readSavedState(key) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function applyLocalDataReset() {
  if (localStorage.getItem(localDataResetVersionKey) === localDataResetVersion) return;
  localStorage.removeItem(userStateKey);
  localStorage.removeItem(communityStateKey);
  localStorage.setItem(
    accountsStateKey,
    JSON.stringify({
      admin: {
        username: "admin",
        passwordHash: defaultAdminPasswordHash,
      },
    }),
  );
  localStorage.setItem(localDataResetVersionKey, localDataResetVersion);
}

function pickStateKeys(source, keys) {
  return keys.reduce((picked, key) => {
    if (Object.hasOwn(source, key)) picked[key] = source[key];
    return picked;
  }, {});
}

function isDataUrl(value) {
  return /^data:/i.test(String(value || ""));
}

function isStorableDataUrl(value) {
  return isDataUrl(value) && String(value).length <= productImageDataUrlLimit;
}

function getStorableProductImage(image, fallbackImage = "") {
  const fallback = fallbackImage && (!isDataUrl(fallbackImage) || isStorableDataUrl(fallbackImage)) ? fallbackImage : "assets/deti-storefront.png";
  if (!image) return fallback;
  if (isDataUrl(image)) return isStorableDataUrl(image) ? image : fallback;
  return image;
}

function sanitizeCommunityStateForStorage(communityState) {
  return {
    ...communityState,
    products: Array.isArray(communityState.products)
      ? communityState.products.map((product) => ({
          ...product,
          image: getStorableProductImage(product.image),
        }))
      : communityState.products,
  };
}

function normalizeTrollControls(controls = {}) {
  const nextControls = {
    ...structuredClone(defaultTrollControls),
    ...(controls || {}),
  };
  nextControls.enabled = Boolean(nextControls.enabled);
  nextControls.roundRobin = nextControls.roundRobin !== false;
  nextControls.maxParallel = clampNumber(nextControls.maxParallel, 1, 20, 1);
  nextControls.selectedRuleId = String(nextControls.selectedRuleId || "");
  nextControls.memberStatsEnabled = Boolean(nextControls.memberStatsEnabled);
  nextControls.activeMultiplier = clampNumber(nextControls.activeMultiplier, 1, 50, 1);
  nextControls.totalMultiplier = clampNumber(nextControls.totalMultiplier, 1, 50, 1);
  nextControls.inactiveMembers = clampNumber(nextControls.inactiveMembers, 0, 9999, 0);
  nextControls.cursorByTrigger = nextControls.cursorByTrigger && typeof nextControls.cursorByTrigger === "object" ? nextControls.cursorByTrigger : {};
  nextControls.firstMessageDayByUser =
    nextControls.firstMessageDayByUser && typeof nextControls.firstMessageDayByUser === "object" ? nextControls.firstMessageDayByUser : {};
  nextControls.trollAccounts = Array.isArray(nextControls.trollAccounts)
    ? [...new Set(nextControls.trollAccounts.map((account) => String(account || "").trim()).filter((account) => account && account !== "admin"))]
    : [];
  nextControls.rules = Array.isArray(nextControls.rules) ? nextControls.rules.map(normalizeTrollRule).filter((rule) => rule.account) : [];
  if (nextControls.selectedRuleId && !nextControls.rules.some((rule) => rule.id === nextControls.selectedRuleId)) {
    nextControls.selectedRuleId = "";
  }
  return nextControls;
}

function normalizeTrollRule(rule = {}) {
  const action = trollActionOptions.some((option) => option.key === rule.action) ? rule.action : "group-message";
  const trigger = trollTriggerOptions.some((option) => option.key === rule.trigger) ? rule.trigger : "visit";
  return {
    id: String(rule.id || `troll-rule-${Date.now()}-${Math.floor(Math.random() * 10000)}`),
    account: String(rule.account || "").trim(),
    trigger,
    action,
    message: String(rule.message || "").trim().slice(0, 180),
    receiptUnits: clampNumber(rule.receiptUnits, 1, 20, 1),
    productId: String(rule.productId || "").trim(),
    delaySeconds: clampNumber(rule.delaySeconds, 0, 300, 0),
    delayJitterSeconds: clampNumber(rule.delayJitterSeconds, 0, 300, 0),
    photo: normalizeTrollUpload(rule.photo),
    receiptImage: normalizeTrollUpload(rule.receiptImage || rule.paymentReceipt),
    enabled: rule.enabled !== false,
    createdAt: Number(rule.createdAt) || Date.now(),
    lastRunAt: Number(rule.lastRunAt) || 0,
  };
}

function normalizeTrollUpload(upload) {
  if (!upload?.src) return null;
  return {
    name: String(upload.name || "uploaded-image").slice(0, 120),
    src: String(upload.src),
    type: String(upload.type || "image/jpeg"),
    createdAt: Number(upload.createdAt) || Date.now(),
  };
}

function clampNumber(value, min, max, fallback) {
  const number = Math.round(Number(value));
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function normalizeState(nextState) {
  nextState.username = nextState.username || (nextState.joinedCommunity ? nextState.handle : "");
  nextState.passwordHash = nextState.passwordHash || "";
  nextState.passwordSet = Boolean(nextState.passwordSet);
  nextState.joinedCommunity = Boolean(nextState.joinedCommunity);
  nextState.replyToId = nextState.replyToId || null;
  nextState.openActionMenuId = nextState.openActionMenuId || null;
  nextState.openReactionMenuId = nextState.openReactionMenuId || null;
  nextState.mentionInboxOpen = Boolean(nextState.mentionInboxOpen);
  nextState.readMentionIds = Array.isArray(nextState.readMentionIds) ? [...new Set(nextState.readMentionIds.map(String))].slice(-200) : [];
  nextState.chatMode = ["group", "admin"].includes(nextState.chatMode) ? nextState.chatMode : "group";
  if (nextState.adminTab === "pools") nextState.adminTab = "buyers";
  nextState.adminTab = ["announcements", "store", "preorder", "buyers", "trolls", "orders", "accounts", "moderation"].includes(nextState.adminTab) ? nextState.adminTab : "announcements";
  nextState.adminReceiptStatusTab = [...receiptStatusOptions.map((status) => status.key), "all"].includes(nextState.adminReceiptStatusTab)
    ? nextState.adminReceiptStatusTab
    : "pending";
  nextState.adminPrivateChatMember = nextState.adminPrivateChatMember || "";
  nextState.adminPrivateChatSearch = nextState.adminPrivateChatSearch || "";
  nextState.adminPrivateSendMode = ["direct", "group", "note"].includes(nextState.adminPrivateSendMode) ? nextState.adminPrivateSendMode : "direct";
  nextState.adminActingAs = nextState.adminActingAs === "admin" ? "" : nextState.adminActingAs || "";
  nextState.adminGroupSendAsSearch = nextState.adminGroupSendAsSearch || "";
  nextState.adminPrivateSendAsSearch = nextState.adminPrivateSendAsSearch || "";
  nextState.adminGroupVisibility = ["all", "hide-target", "only-target"].includes(nextState.adminGroupVisibility) ? nextState.adminGroupVisibility : "all";
  nextState.adminChatFilter = ["all", "real", "trolls"].includes(nextState.adminChatFilter) ? nextState.adminChatFilter : "all";
  nextState.adminReceiptSearch = nextState.adminReceiptSearch || "";
  nextState.adminReceiptPage = Math.max(1, Number(nextState.adminReceiptPage) || 1);
  nextState.adminAccountPage = Math.max(1, Number(nextState.adminAccountPage) || 1);
  nextState.adminTrollAccountSearch = nextState.adminTrollAccountSearch || "";
  nextState.cartOpen = Boolean(nextState.cartOpen);
  nextState.storeSearch = nextState.storeSearch || "";
  nextState.productDeletedAt = normalizeDeletedAtMap(nextState.productDeletedAt);
  nextState.productCategoryUpdatedAt = normalizeDeletedAtMap(nextState.productCategoryUpdatedAt);
  nextState.productCategoryDeletedAt = normalizeDeletedAtMap(nextState.productCategoryDeletedAt);
  nextState.announcementDeletedAt = normalizeDeletedAtMap(nextState.announcementDeletedAt);
  nextState.chatDeletedAt = normalizeDeletedAtMap(nextState.chatDeletedAt);
  nextState.directMessageDeletedAt = normalizeDeletedAtMap(nextState.directMessageDeletedAt);
  nextState.memberDeletedAt = normalizeDeletedAtMap(nextState.memberDeletedAt);
  nextState.replacementDeletedAt = normalizeDeletedAtMap(nextState.replacementDeletedAt);
  nextState.trollRuleDeletedAt = normalizeDeletedAtMap(nextState.trollRuleDeletedAt);
  nextState.products = Array.isArray(nextState.products) ? nextState.products.map(normalizeProduct) : structuredClone(defaultProducts);
  nextState.products = nextState.products
    .filter((product) => !isDeleted(product.id, nextState.productDeletedAt, product.updatedAt))
    .map((product) => withActiveProductCategory(product, nextState.productCategoryDeletedAt));
  if (!nextState.demoCatalogSeeded) {
    nextState.demoCatalogSeeded = true;
  }
  nextState.cart =
    nextState.cart && typeof nextState.cart === "object"
      ? Object.fromEntries(
          Object.entries(nextState.cart)
            .map(([cartKey, qty]) => [String(cartKey), clampNumber(qty, 1, 999, 1)])
            .filter(([cartKey]) => {
              const { productId, variantId } = parseCartKey(cartKey);
              const product = nextState.products.find((item) => item.id === productId);
              if (!product) return false;
              return !variantId || Boolean(getProductVariant(product, variantId, { fallback: false }));
            }),
        )
      : {};
  nextState.productCategories = Array.isArray(nextState.productCategories)
    ? nextState.productCategories.filter(
        (category) => category && !isDeleted(category, nextState.productCategoryDeletedAt, nextState.productCategoryUpdatedAt[category]),
      )
    : [];
  const categories = getStoreCategories(nextState.products, nextState.productCategories);
  nextState.storeCategory = categories.includes(nextState.storeCategory) ? nextState.storeCategory : "All";
  nextState.announcements = nextState.announcements || [];
  nextState.buyerControlsEnabled = nextState.buyerControlsEnabled !== false;
  nextState.goldenTicketEnabled = nextState.goldenTicketEnabled !== false;
  nextState.trollControls = normalizeTrollControls(nextState.trollControls);
  nextState.trollControls.rules = nextState.trollControls.rules.filter(
    (rule) => !isDeleted(rule.id, nextState.trollRuleDeletedAt) && !isDeleted(rule.account, nextState.memberDeletedAt, getMemberUpdatedAt(nextState.members?.[rule.account])),
  );
  nextState.trollControls.trollAccounts = nextState.trollControls.trollAccounts.filter((account) =>
    !isDeleted(account, nextState.memberDeletedAt, getMemberUpdatedAt(nextState.members?.[account])),
  );
  nextState.dataResetVersion = nextState.dataResetVersion || "";
  nextState.dataResetAt = Math.max(0, Number(nextState.dataResetAt) || 0);
  nextState.directMessages = Array.isArray(nextState.directMessages)
    ? nextState.directMessages.map((message) => ({
        ...message,
        receiptStatus: message.receiptStatus ? normalizeReceiptStatus(message.receiptStatus) : null,
        visibility: message.visibility || "direct",
        adminActingAs: message.adminActingAs || "",
        media: message.media || null,
      }))
    : [];
  nextState.members = Object.fromEntries(
    Object.entries(nextState.members || {}).filter(([memberId, member]) => !isDeleted(memberId, nextState.memberDeletedAt, getMemberUpdatedAt(member))),
  );
  nextState.moderation = {
    blocked: Object.fromEntries(Object.entries(nextState.moderation?.blocked || {}).filter(([memberId]) => !isDeleted(memberId, nextState.memberDeletedAt))),
    timeouts: Object.fromEntries(Object.entries(nextState.moderation?.timeouts || {}).filter(([memberId]) => !isDeleted(memberId, nextState.memberDeletedAt))),
    replacements: (nextState.moderation?.replacements || []).filter(
      (entry) =>
        !isDeleted(getReplacementSignalId(entry), nextState.replacementDeletedAt) &&
        !isDeleted(entry.previous, nextState.memberDeletedAt) &&
        !isDeleted(entry.next, nextState.memberDeletedAt),
    ),
    clearChatAt: Math.max(0, Number(nextState.moderation?.clearChatAt) || 0),
    clearReceiptsAt: Math.max(0, Number(nextState.moderation?.clearReceiptsAt) || 0),
  };
  nextState.receipts = (nextState.receipts || []).map((receipt) => ({
    ...receipt,
    status: normalizeReceiptStatus(receipt.status),
  }))
    .filter((receipt) => !["DETI-9916", "DETI-9917", "DETI-9918"].includes(receipt.id))
    .filter((receipt) => !nextState.moderation.clearReceiptsAt || (receipt.createdAt || 0) > nextState.moderation.clearReceiptsAt);
  nextState.chat = (nextState.chat || [])
    .filter((message) => !String(message.id || "").startsWith("chat-seed-"))
    .filter((message) => {
      if (message.type === "receipt") return !nextState.moderation.clearReceiptsAt || (message.createdAt || 0) > nextState.moderation.clearReceiptsAt;
      return !nextState.moderation.clearChatAt || (message.createdAt || 0) > nextState.moderation.clearChatAt;
    })
    .filter((message) => !isAutomaticCheckoutStatusMessage(message))
    .map((message, index) => ({
      ...message,
      id: message.id || `chat-${message.createdAt || Date.now()}-${index}`,
      userReactions: message.userReactions || {},
      type: message.type || "text",
      pinned: message.pinned !== false && !isReplacementSignalMessage(message),
      adminActingAs: message.adminActingAs || "",
      audience: normalizeGroupAudience(message.audience),
      media: message.media || null,
      receipt: message.receipt ? { ...message.receipt, status: normalizeReceiptStatus(message.receipt.status) } : null,
      reactions: {
        ...Object.fromEntries(reactionTypes.map((reaction) => [reaction.key, 0])),
        ...(message.reactions || {}),
      },
    }))
    .filter((message) => !isDeleted(message.id, nextState.chatDeletedAt));
  nextState.directMessages = nextState.directMessages.filter(
    (message) => !nextState.moderation.clearReceiptsAt || !message.receiptId || (message.createdAt || 0) > nextState.moderation.clearReceiptsAt,
  ).filter((message) => !isDeleted(message.id, nextState.directMessageDeletedAt));
  nextState.announcements = nextState.announcements
    .filter((announcement) => !String(announcement.id || "").startsWith("ann-seed-"))
    .filter((announcement) => !nextState.moderation.clearChatAt || (announcement.createdAt || 0) > nextState.moderation.clearChatAt)
    .filter((announcement) => !isDeleted(announcement.id, nextState.announcementDeletedAt));
  if (nextState.dataResetAt) {
    filterStateAfterReset(nextState, nextState.dataResetAt);
  }
  return nextState;
}

function filterStateAfterReset(targetState, resetAt) {
  [
    "productDeletedAt",
    "productCategoryUpdatedAt",
    "productCategoryDeletedAt",
    "announcementDeletedAt",
    "chatDeletedAt",
    "directMessageDeletedAt",
    "memberDeletedAt",
    "replacementDeletedAt",
    "trollRuleDeletedAt",
  ].forEach((key) => {
    targetState[key] = Object.fromEntries(Object.entries(normalizeDeletedAtMap(targetState[key])).filter(([, timestamp]) => timestamp > resetAt));
  });
  targetState.chat = (targetState.chat || []).filter((message) => (Number(message.createdAt) || 0) > resetAt);
  targetState.directMessages = (targetState.directMessages || []).filter((message) => (Number(message.createdAt) || 0) > resetAt);
  targetState.announcements = (targetState.announcements || []).filter((announcement) => (Number(announcement.createdAt) || 0) > resetAt);
  targetState.receipts = (targetState.receipts || []).filter((receipt) => (Number(receipt.createdAt) || 0) > resetAt);
  targetState.members = Object.fromEntries(
    Object.entries(targetState.members || {}).filter(([, member]) => {
      const timestamp = Math.max(Number(member?.joinedAt) || 0, Number(member?.lastSeen) || 0);
      return timestamp > resetAt;
    }),
  );
}

function isAutomaticCheckoutStatusMessage(message) {
  if (message?.author !== systemProfileAuthor) return false;
  return /@(.*)\s+(verifying payment receipt|order confirmed|order processing)\s+for\s+DETI-\d+\./i.test(String(message.text || ""));
}

function isReplacementSignalMessage(message) {
  return Boolean(message?.system && /was created from blocked account/i.test(String(message.text || "")));
}

function normalizeProduct(product, index = 0) {
  const originalPrice = Math.max(0, Number(product.originalPrice ?? product.basePrice) || 0);
  const salePrice = Math.max(0, Number(product.salePrice) || 0);
  const saleEndsAt = product.saleEndsAt ? Number(product.saleEndsAt) : null;
  const preorderPrice = Math.max(0, Number(product.preorderPrice) || 0);
  const preorderEndsAt = product.preorderEndsAt ? Number(product.preorderEndsAt) : null;
  const bulkBuyAt = product.bulkBuyAt ? Number(product.bulkBuyAt) : null;
  const availableAt = product.availableAt ? Number(product.availableAt) : null;
  const bulkBuyRepeatDays = normalizeWeekdayList(product.bulkBuyRepeatDays ?? product.bulkBuyDays ?? product.repeatDays);
  const bulkBuyRepeatTime = normalizeTimeValue(product.bulkBuyRepeatTime ?? product.bulkBuyTime ?? product.repeatTime);
  return {
    id: product.id || `product-${Date.now()}-${index}`,
    name: product.name || "Untitled product",
    category: product.category || "General",
    type: product.type || "Standard",
    description: product.description || "Product available in the group store.",
    originalPrice,
    salePrice,
    wholesaleTiers: normalizeWholesaleTiers(product.wholesaleTiers, originalPrice),
    preorderWholesaleTiers: normalizeWholesaleTiers(product.preorderWholesaleTiers ?? product.preorderWholesale ?? [], preorderPrice || originalPrice),
    variants: normalizeProductVariants(product.variants, {
      originalPrice,
      salePrice,
      preorderPrice,
      wholesaleTiers: product.wholesaleTiers,
      preorderWholesaleTiers: product.preorderWholesaleTiers,
    }),
    featured: Boolean(product.featured || product.highlighted || product.big),
    sortOrder: clampNumber(product.sortOrder ?? product.menuOrder ?? product.order, 1, 999, index + 1),
    saleEnabled: Boolean(product.saleEnabled),
    saleEndsAt: Number.isFinite(saleEndsAt) ? saleEndsAt : null,
    basePrice: originalPrice,
    stock: Math.max(0, Number(product.stock) || 0),
    preorderEnabled: Boolean(product.preorderEnabled),
    preorderPrice,
    preorderStock: Math.max(0, Number(product.preorderStock) || 0),
    preorderEndsAt: Number.isFinite(preorderEndsAt) ? preorderEndsAt : null,
    bulkBuyAt: Number.isFinite(bulkBuyAt) ? bulkBuyAt : null,
    bulkBuyRepeatDays,
    bulkBuyRepeatTime,
    availableAt: Number.isFinite(availableAt) ? availableAt : null,
    banner: product.banner || "New",
    poolTarget: Math.max(1, Number(product.poolTarget) || 1),
    poolJoined: Math.max(0, Number(product.poolJoined) || 0),
    image: product.image || "assets/deti-storefront.png",
    updatedAt: Math.max(0, Number(product.updatedAt) || 0),
  };
}

function normalizeDeletedAtMap(deletedAt = {}) {
  if (!deletedAt || typeof deletedAt !== "object" || Array.isArray(deletedAt)) return {};
  return Object.fromEntries(
    Object.entries(deletedAt)
      .map(([recordId, timestamp]) => [String(recordId || "").trim(), Math.max(0, Number(timestamp) || 0)])
      .filter(([recordId, timestamp]) => recordId && timestamp > 0),
  );
}

function mergeDeletedAtMaps(...deletedAtMaps) {
  return deletedAtMaps.reduce((merged, deletedAt) => {
    Object.entries(normalizeDeletedAtMap(deletedAt)).forEach(([recordId, timestamp]) => {
      merged[recordId] = Math.max(Number(merged[recordId]) || 0, timestamp);
    });
    return merged;
  }, {});
}

function isDeleted(recordId, deletedAt = {}, updatedAt = 0) {
  const deletedTimestamp = Number(deletedAt?.[recordId]) || 0;
  return deletedTimestamp > 0 && deletedTimestamp > (Number(updatedAt) || 0);
}

function markDeleted(deletedAtKey, recordId, timestamp = Date.now()) {
  if (!recordId) return;
  state[deletedAtKey] = {
    ...normalizeDeletedAtMap(state[deletedAtKey]),
    [String(recordId)]: timestamp,
  };
}

function restoreDeleted(deletedAtKey, recordId) {
  if (!recordId) return;
  state[deletedAtKey] = normalizeDeletedAtMap(state[deletedAtKey]);
  delete state[deletedAtKey][String(recordId)];
}

function withActiveProductCategory(product, categoryDeletedAt = {}) {
  const categoryDeletedTimestamp = Number(categoryDeletedAt?.[product.category]) || 0;
  if (!categoryDeletedTimestamp || categoryDeletedTimestamp <= (Number(product.updatedAt) || 0)) return product;
  return { ...product, category: "General", updatedAt: categoryDeletedTimestamp };
}

function getMemberUpdatedAt(member) {
  return Math.max(Number(member?.joinedAt) || 0, Number(member?.lastSeen) || 0);
}

function getReplacementSignalId(entry) {
  const createdAt = Number(entry?.createdAt) || 0;
  return createdAt ? String(createdAt) : "";
}

function normalizeProductVariants(variants, product = {}) {
  const entries = Array.isArray(variants) ? variants : [];
  const normalized = entries
    .map((variant, index) => {
      const label = String(variant.label ?? variant.size ?? variant.name ?? "").trim();
      if (!label) return null;
      const originalPrice = Math.max(0, Math.round(Number(variant.originalPrice ?? variant.price ?? variant.basePrice ?? product.originalPrice) || 0));
      const salePrice = Math.max(0, Math.round(Number(variant.salePrice) || 0));
      const preorderPrice = Math.max(0, Math.round(Number(variant.preorderPrice ?? variant.bulkPrice) || 0));
      const id = String(variant.id || slugifyProductId(label) || `size-${index + 1}`).slice(0, 54);
      return {
        id,
        label,
        originalPrice,
        salePrice,
        preorderPrice,
        wholesaleTiers: normalizeWholesaleTiers(variant.wholesaleTiers, originalPrice),
        preorderWholesaleTiers: normalizeWholesaleTiers(variant.preorderWholesaleTiers ?? variant.preorderWholesale ?? [], preorderPrice || product.preorderPrice || originalPrice),
      };
    })
    .filter((variant) => variant && variant.originalPrice > 0);
  const byId = new Map();
  normalized.forEach((variant) => {
    const key = variant.id || slugifyProductId(variant.label);
    if (!byId.has(key)) byId.set(key, { ...variant, id: key });
  });
  return [...byId.values()];
}

function seedDemoCatalog(products = []) {
  const seededProducts = products.map((product, index) =>
    normalizeProduct({
      ...product,
      featured: Boolean(product.featured) && index < 2,
      sortOrder: Number(product.sortOrder) || index + 1,
    }, index),
  );
  const existingIds = new Set(seededProducts.map((product) => product.id));
  const nextProducts = [
    ...seededProducts,
    ...demoProducts.filter((product) => !existingIds.has(product.id)).map((product, index) => normalizeProduct(product, seededProducts.length + index)),
  ];
  return nextProducts.map((product, index) => ({
    ...product,
    featured: index < 2,
    sortOrder: index + 1,
  }));
}

function getWholesaleDiscountPercent(tier) {
  const raw = tier?.discountPercent ?? tier?.percent ?? tier?.discount ?? tier?.discountRate;
  const value = Number(raw);
  if (!Number.isFinite(value)) return 0;
  return clampNumber(value, 0, 99, 0);
}

function getWholesaleUnitPrice(tier, basePrice = 0) {
  const price = Math.max(0, Math.round(Number(tier?.unitPrice ?? tier?.price) || 0));
  const discountPercent = getWholesaleDiscountPercent(tier);
  const base = Math.max(0, Math.round(Number(basePrice) || 0));
  if (discountPercent > 0 && base > 0) {
    return Math.max(0, Math.round(base * (1 - discountPercent / 100)));
  }
  return price;
}

function normalizeWholesaleTiers(tiers, fallbackPrice = 0) {
  const entries = Array.isArray(tiers) ? tiers : [];
  const normalized = entries
    .map((tier) => {
      const discountPercent = getWholesaleDiscountPercent(tier);
      const unitPrice = getWholesaleUnitPrice(tier, fallbackPrice);
      return {
        minQty: Math.max(2, Math.round(Number(tier.minQty ?? tier.qty ?? tier.quantity) || 0)),
        unitPrice,
        discountPercent,
      };
    })
    .filter((tier) => {
      const hasDiscount = tier.discountPercent > 0;
      const hasPrice = tier.unitPrice > 0;
      return tier.minQty >= 2 && (hasDiscount || hasPrice) && (!fallbackPrice || !hasPrice || tier.unitPrice < fallbackPrice);
    })
    .sort((a, b) => a.minQty - b.minQty || getWholesaleSortPrice(a, fallbackPrice) - getWholesaleSortPrice(b, fallbackPrice));
  const byQty = new Map();
  normalized.forEach((tier) => {
    const current = byQty.get(tier.minQty);
    if (!current || getWholesaleSortPrice(tier, fallbackPrice) < getWholesaleSortPrice(current, fallbackPrice)) {
      byQty.set(tier.minQty, tier);
    }
  });
  return [...byQty.values()];
}

function getWholesaleSortPrice(tier, fallbackPrice = 0) {
  return getWholesaleUnitPrice(tier, fallbackPrice) || Number.MAX_SAFE_INTEGER;
}

function parseWholesaleTiers(value, basePrice = 0) {
  const tiers = normalizePriceCommas(value)
    .split(/\r?\n|,/)
    .map((line) => {
      const match = line.trim().match(/^(\d+)\s*(?:pcs?|pieces?|x)?\s*(?:=|:|-|for|@)?\s*(.+)$/i);
      if (!match) return null;
      const valueText = match[2].trim();
      const percentMatch = valueText.match(/(\d+(?:\.\d+)?)\s*(?:%|percent)\s*(?:off|discount)?/i);
      if (percentMatch) {
        return {
          minQty: Number(match[1]),
          discountPercent: Number(percentMatch[1]),
        };
      }
      const priceMatch = valueText.match(/^(?:php|p|₱)?\s*(\d+)$/i);
      if (!priceMatch) return null;
      return {
        minQty: Number(match[1]),
        unitPrice: Number(priceMatch[1]),
      };
    })
    .filter(Boolean);
  return normalizeWholesaleTiers(tiers, basePrice);
}

function normalizePriceCommas(value) {
  return String(value || "").replace(/(\d),(?=\d{3}\b)/g, "$1");
}

function parseMoneyNumber(value) {
  const match = normalizePriceCommas(value).match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function formatWholesaleTiers(tiers = []) {
  return normalizeWholesaleTiers(tiers)
    .map((tier) => `${tier.minQty}=${formatWholesaleTierValue(tier)}`)
    .join("\n");
}

function formatWholesaleInline(tiers = []) {
  return normalizeWholesaleTiers(tiers)
    .map((tier) => `${tier.minQty}=${formatWholesaleTierValue(tier)}`)
    .join(", ");
}

function formatWholesaleTierValue(tier) {
  return tier.discountPercent > 0 ? `${formatPercent(tier.discountPercent)}%` : String(tier.unitPrice);
}

function formatPercent(value) {
  const amount = Number(value) || 0;
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(1).replace(/\.0$/, "");
}

function parseProductVariants(value) {
  return normalizeProductVariants(
    String(value || "")
      .split(/\r?\n/)
      .map((line) => parseProductVariantLine(line))
      .filter(Boolean),
  );
}

function parseProductVariantLine(line) {
  const parts = normalizePriceCommas(line)
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);
  if (!parts.length) return null;

  let label = "";
  let originalPrice = 0;
  const firstMatch = parts[0].match(/^(.+?)\s*(?:=|:)\s*(?:php)?\s*(\d+)$/i);
  const originalMatch = parts[0].match(/^(.+?)(?:\s+Non-preorder)?\s*:?\s*original\s+(\d+)$/i);
  if (firstMatch) {
    label = firstMatch[1].trim();
    originalPrice = Number(firstMatch[2]);
  } else if (originalMatch) {
    label = originalMatch[1].trim();
    originalPrice = Number(originalMatch[2]);
  } else {
    label = parts[0].trim();
    originalPrice = parseMoneyNumber(parts[1] || "");
    if (originalPrice) parts.splice(1, 1);
  }

  if (!label || !originalPrice) return null;

  const variant = { label, originalPrice, salePrice: 0, preorderPrice: 0, wholesaleTiers: [], preorderWholesaleTiers: [] };
  parts.slice(1).forEach((part) => {
    const normalized = part.replace(/php/gi, "").trim();
    const price = parseMoneyNumber(normalized);
    if (/preorder.*(wholesale|tier)|(wholesale|tier).*preorder/i.test(normalized)) {
      variant.preorderWholesaleTiers = parseWholesaleTiers(normalized.replace(/preorder|wholesale|tiers?/gi, ""), variant.preorderPrice || originalPrice);
      return;
    }
    if (/wholesale|tier/i.test(normalized)) {
      variant.wholesaleTiers = parseWholesaleTiers(normalized.replace(/wholesale|tiers?/gi, ""), originalPrice);
      return;
    }
    if (/preorder|bulk/i.test(normalized)) {
      variant.preorderPrice = price;
      return;
    }
    if (/\bsale\b/i.test(normalized)) {
      variant.salePrice = price;
      return;
    }
    const wholesaleTiers = parseWholesaleTiers(normalized, originalPrice);
    if (wholesaleTiers.length) {
      variant.wholesaleTiers = wholesaleTiers;
    } else if (!variant.salePrice && price) {
      variant.salePrice = price;
    }
  });
  return variant;
}

function formatProductVariants(variants = []) {
  return normalizeProductVariants(variants)
    .map((variant) => {
      const parts = [`${variant.label} = ${variant.originalPrice}`];
      if (variant.salePrice) parts.push(`sale ${variant.salePrice}`);
      if (variant.preorderPrice) parts.push(`preorder ${variant.preorderPrice}`);
      if (variant.wholesaleTiers.length) parts.push(`wholesale ${formatWholesaleInline(variant.wholesaleTiers)}`);
      if (variant.preorderWholesaleTiers.length) parts.push(`preorder wholesale ${formatWholesaleInline(variant.preorderWholesaleTiers)}`);
      return parts.join(" | ");
    })
    .join("\n");
}

function getProductVariants(product) {
  return normalizeProductVariants(product?.variants);
}

function getDefaultProductVariant(product) {
  return getProductVariants(product)[0] || null;
}

function getProductVariant(product, variantId, options = {}) {
  const variants = getProductVariants(product);
  const found = variants.find((variant) => variant.id === variantId);
  return found || (options.fallback === false ? null : variants[0] || null);
}

function getVariantOriginalPrice(product, variant = null) {
  return variant?.originalPrice > 0 ? variant.originalPrice : product.originalPrice;
}

function getVariantSalePrice(product, variant = null) {
  return variant ? variant.salePrice || 0 : product.salePrice;
}

function getVariantPreorderPrice(product, variant = null) {
  return variant ? variant.preorderPrice || 0 : product.preorderPrice;
}

function isPreorderMode(product, mode = "") {
  return mode === "preorder" && Boolean(product?.preorderEnabled);
}

function getVariantWholesaleTiers(product, variant = null, mode = "") {
  if (isPreorderMode(product, mode)) {
    return variant ? variant.preorderWholesaleTiers : product.preorderWholesaleTiers;
  }
  return variant ? variant.wholesaleTiers : product.wholesaleTiers;
}

function getVariantLabel(variant = null) {
  return variant?.label ? ` / ${variant.label}` : "";
}

function getCartItemName(product, variant = null) {
  return `${product.name}${getVariantLabel(variant)}`;
}

function isProductSaleActive(product, now = Date.now(), variant = null) {
  const originalPrice = getVariantOriginalPrice(product, variant);
  const salePrice = getVariantSalePrice(product, variant);
  if (!product.saleEnabled || !salePrice) return false;
  if (product.saleEndsAt && product.saleEndsAt <= now) return false;
  return salePrice < originalPrice;
}

function getProductDisplayPrice(product, variant = null) {
  return isProductSaleActive(product, Date.now(), variant) ? getVariantSalePrice(product, variant) : getVariantOriginalPrice(product, variant);
}

function isPreorderEnded(product, now = Date.now()) {
  return Boolean(product.preorderEnabled && product.preorderEndsAt && product.preorderEndsAt <= now);
}

function getPreorderPrice(product, variant = null) {
  if (!product.preorderEnabled) return getProductDisplayPrice(product, variant);
  const preorderPrice = getVariantPreorderPrice(product, variant);
  return preorderPrice > 0 ? preorderPrice : getProductDisplayPrice(product, variant);
}

function getWholesaleBasePrice(product, variant = null, mode = "") {
  return isPreorderMode(product, mode) ? getPreorderPrice(product, variant) : getProductDisplayPrice(product, variant);
}

function getWholesaleTier(product, qty = 1, variant = null, mode = "") {
  const count = Math.max(1, Math.round(Number(qty) || 1));
  return normalizeWholesaleTiers(getVariantWholesaleTiers(product, variant, mode), getWholesaleBasePrice(product, variant, mode))
    .filter((tier) => count >= tier.minQty)
    .at(-1) || null;
}

function getWholesaleTiers(product, variant = null, mode = "") {
  return normalizeWholesaleTiers(getVariantWholesaleTiers(product, variant, mode), getWholesaleBasePrice(product, variant, mode));
}

function getCheapestWholesaleTier(product, variant = null, mode = "") {
  return getWholesaleTiers(product, variant, mode).sort((a, b) => a.unitPrice - b.unitPrice || a.minQty - b.minQty)[0] || null;
}

function getProductEffectivePrice(product, qty = 1, variant = null, mode = "") {
  const basePrice = getWholesaleBasePrice(product, variant, mode);
  const wholesaleTier = getWholesaleTier(product, qty, variant, mode);
  return wholesaleTier ? Math.min(basePrice, wholesaleTier.unitPrice) : basePrice;
}

function getWholesaleSummary(product, variant = null, mode = "") {
  const tiers = getWholesaleTiers(product, variant, mode);
  if (!tiers.length) return "";
  return tiers.map((tier) => `${tier.minQty}+ pcs ${formatWholesaleTierLabel(tier)}`).join(" / ");
}

function getNextWholesaleTier(product, qty = 1, variant = null, mode = "") {
  const count = Math.max(1, Math.round(Number(qty) || 1));
  return normalizeWholesaleTiers(getVariantWholesaleTiers(product, variant, mode), getWholesaleBasePrice(product, variant, mode)).find((tier) => count < tier.minQty) || null;
}

function formatWholesaleTierLabel(tier) {
  if (tier.discountPercent > 0) {
    return `${formatPercent(tier.discountPercent)}% off (${formatMoney(tier.unitPrice)} each)`;
  }
  return `${formatMoney(tier.unitPrice)} each`;
}

function getWholesaleSavings(tier, basePrice = 0, qty = tier?.minQty || 1) {
  const unitSaved = Math.max(0, Math.round(Number(basePrice) || 0) - Math.max(0, Math.round(Number(tier?.unitPrice) || 0)));
  const count = Math.max(1, Math.round(Number(qty) || 1));
  return {
    unitSaved,
    totalSaved: unitSaved * count,
  };
}

function formatWholesaleSavings(tier, basePrice = 0, qty = tier?.minQty || 1) {
  const savings = getWholesaleSavings(tier, basePrice, qty);
  if (!savings.unitSaved) return "";
  return `Save ${formatMoney(savings.unitSaved)} each / ${formatMoney(savings.totalSaved)} at ${Math.max(1, Math.round(Number(qty) || 1))} pcs`;
}

function renderWholesaleContent(product, variant = null, mode = "") {
  const tiers = getWholesaleTiers(product, variant, mode);
  if (!tiers.length) return "";
  const cheapest = getCheapestWholesaleTier(product, variant, mode);
  const basePrice = getWholesaleBasePrice(product, variant, mode);
  const label = isPreorderMode(product, mode) ? "Lowest preorder wholesale" : "Lowest wholesale";
  return `
    <div class="wholesale-strip-head">
      <span><b>${label}</b>${escapeHtml(formatWholesaleTierLabel(cheapest))} at ${cheapest.minQty}+ pcs</span>
      <button type="button" data-toggle-wholesale aria-expanded="false">Menu</button>
    </div>
    <div class="wholesale-tier-list" role="menu" hidden>
      ${tiers
        .map((tier) => {
          const savings = formatWholesaleSavings(tier, basePrice);
          return `<span role="menuitem"><b>${tier.minQty}+ pcs</b>${escapeHtml(formatWholesaleTierLabel(tier))}${savings ? `<small>${escapeHtml(savings)}</small>` : ""}</span>`;
        })
        .join("")}
    </div>
  `;
}

function getSaleTimeLeft(product) {
  if (!isProductSaleActive(product) || !product.saleEndsAt) return "";
  const remaining = Math.max(0, product.saleEndsAt - Date.now());
  const hours = Math.floor(remaining / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  return hours > 0 ? `${hours}h ${minutes}m left` : `${minutes}m left`;
}

function getPreorderCountdown(product) {
  if (!product.preorderEndsAt) return "Preorder countdown pending";
  const remaining = product.preorderEndsAt - Date.now();
  if (remaining <= 0) return "Preorder ended";
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  if (days > 0) return `${days}d ${hours}h left`;
  if (hours > 0) return `${hours}h ${minutes}m left`;
  return `${Math.max(1, minutes)}m left`;
}

function getPreorderStockLabel(product) {
  return product.preorderStock > 0 ? `${product.preorderStock} preorder slot${product.preorderStock === 1 ? "" : "s"}` : "Preorder slots not set";
}

function renderPreorderSummary(product, options = {}) {
  const ended = isPreorderEnded(product);
  const status = ended ? "Ended" : product.preorderEndsAt ? getPreorderCountdown(product) : "Open";
  const bulkBuy = getBulkBuyShortLabel(product);
  const incoming = product.availableAt ? getAvailabilityLabel(product) : "Incoming pending";
  return `
    <div class="preorder-summary ${options.compact ? "compact" : ""}">
      <span><b>Preorder</b>${escapeHtml(status)}</span>
      <span><b>Deadline</b>${escapeHtml(bulkBuy)}</span>
      <span><b>Slots</b>${escapeHtml(product.preorderStock > 0 ? String(product.preorderStock) : "Not set")}</span>
      <span><b>Incoming</b>${escapeHtml(incoming.replace(/^Estimated incoming\s*/, ""))}</span>
    </div>
  `;
}

function renderVariantSelect(product) {
  const variants = getProductVariants(product);
  if (!variants.length) return "";
  return `
    <label class="variant-picker">
      <span>Size</span>
      <select data-size-select="${escapeHtml(product.id)}">
        ${variants.map((variant) => `<option value="${escapeHtml(variant.id)}">${escapeHtml(variant.label)}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderProductPrice(product, variant = null, label = "Current price", mode = "") {
  const cheapestWholesale = getCheapestWholesaleTier(product, variant, mode);
  const price = cheapestWholesale?.unitPrice || getProductEffectivePrice(product, 1, variant, mode);
  const basePrice = cheapestWholesale ? getWholesaleBasePrice(product, variant, mode) : getVariantOriginalPrice(product, variant);
  const priceLabel = cheapestWholesale ? (isPreorderMode(product, mode) ? "Lowest preorder wholesale" : "Lowest wholesale") : label;
  return `
    <span>${escapeHtml(priceLabel)}</span>
    <div>
      <strong>${formatMoney(price)}</strong>
      ${basePrice > price ? `<s>${formatMoney(basePrice)}</s>` : ""}
      ${cheapestWholesale ? `<small>${cheapestWholesale.minQty}+ pcs</small>` : ""}
    </div>
  `;
}

function updateVariantCardPricing(select) {
  const product = getProducts().find((item) => item.id === select?.dataset.sizeSelect);
  if (!product) return;
  const variant = getProductVariant(product, select.value);
  const card = select.closest(".product-card");
  const mode = card?.dataset.orderMode || "";
  const price = card?.querySelector(`[data-price-for="${CSS.escape(product.id)}"]`);
  const wholesale = card?.querySelector(`[data-wholesale-for="${CSS.escape(product.id)}"]`);
  if (price) {
    price.innerHTML = renderProductPrice(product, variant, isPreorderMode(product, mode) ? "Preorder price" : "Current price", mode);
  }
  if (wholesale) {
    const content = renderWholesaleContent(product, variant, mode);
    wholesale.innerHTML = content;
    wholesale.hidden = !content;
  }
}

function closeWholesaleMenus(except = null) {
  document.querySelectorAll(".wholesale-strip").forEach((strip) => {
    if (strip === except) return;
    strip.classList.remove("open");
    const list = strip.querySelector(".wholesale-tier-list");
    const button = strip.querySelector("[data-toggle-wholesale]");
    if (list) list.hidden = true;
    if (button) {
      button.textContent = "Menu";
      button.setAttribute("aria-expanded", "false");
    }
  });
}

function formatScheduleDate(value) {
  return new Date(value).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getScheduledProductValue(item, key) {
  const product = item?.productId ? getProducts().find((entry) => entry.id === item.productId) : null;
  const productValue = product?.[key] ? Number(product[key]) : null;
  if (Number.isFinite(productValue)) return productValue;
  const directValue = item?.[key] ? Number(item[key]) : null;
  return Number.isFinite(directValue) ? directValue : null;
}

function getScheduledProductArray(item, key) {
  const product = item?.productId ? getProducts().find((entry) => entry.id === item.productId) : null;
  const productValue = normalizeWeekdayList(product?.[key]);
  if (productValue.length) return productValue;
  return normalizeWeekdayList(item?.[key]);
}

function getScheduledProductText(item, key) {
  const product = item?.productId ? getProducts().find((entry) => entry.id === item.productId) : null;
  return normalizeTimeValue(product?.[key]) || normalizeTimeValue(item?.[key]);
}

function getBulkBuyLabel(product) {
  const repeatDays = getScheduledProductArray(product, "bulkBuyRepeatDays");
  if (repeatDays.length) {
    const repeatTime = getScheduledProductText(product, "bulkBuyRepeatTime") || "00:00";
    const nextBulkBuyAt = getNextWeeklyTimestamp(repeatDays, repeatTime);
    return `Bulk buy deadline every ${formatWeekdayList(repeatDays)} at ${formatTimeLabel(repeatTime)} / next deadline ${formatScheduleDate(nextBulkBuyAt)}`;
  }
  const bulkBuyAt = getScheduledProductValue(product, "bulkBuyAt");
  if (!bulkBuyAt) return "Bulk buy deadline pending";
  return `Bulk buy deadline ${formatScheduleDate(bulkBuyAt)}`;
}

function getBulkBuyShortLabel(product) {
  const repeatDays = getScheduledProductArray(product, "bulkBuyRepeatDays");
  if (repeatDays.length) {
    const repeatTime = getScheduledProductText(product, "bulkBuyRepeatTime") || "00:00";
    return `Every ${formatWeekdayList(repeatDays)} ${formatTimeLabel(repeatTime)}`;
  }
  const bulkBuyAt = getScheduledProductValue(product, "bulkBuyAt");
  return bulkBuyAt ? formatScheduleDate(bulkBuyAt) : "Pending";
}

function getAvailabilityLabel(product) {
  const availableAt = getScheduledProductValue(product, "availableAt");
  if (!availableAt) return "Incoming date pending";
  return `Estimated incoming ${formatScheduleDate(availableAt)}`;
}

function formatDateTimeLocal(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function parseDateTimeLocal(value) {
  if (!value) return null;
  const timestamp = new Date(value).getTime();
  return Number.isFinite(timestamp) ? timestamp : null;
}

function normalizeWeekdayList(value) {
  const dayMap = new Map(weekdayOptions.flatMap((day) => [[day.short.toLowerCase(), day.value], [day.label.toLowerCase(), day.value], [String(day.value), day.value]]));
  const entries = Array.isArray(value) ? value : String(value || "").split(/[\s,|/]+/);
  const days = entries
    .map((entry) => {
      const key = String(entry).trim().toLowerCase();
      if (!key) return null;
      return dayMap.has(key) ? dayMap.get(key) : Number(entry);
    })
    .filter((entry) => Number.isInteger(entry) && entry >= 0 && entry <= 6);
  return [...new Set(days)].sort((a, b) => a - b);
}

function normalizeTimeValue(value) {
  const match = String(value || "").trim().match(/^([01]?\d|2[0-3]):([0-5]\d)$/);
  if (!match) return "";
  return `${match[1].padStart(2, "0")}:${match[2]}`;
}

function getNextWeeklyTimestamp(days, timeValue, from = Date.now()) {
  const repeatDays = normalizeWeekdayList(days);
  const repeatTime = normalizeTimeValue(timeValue) || "00:00";
  if (!repeatDays.length) return null;
  const [hours, minutes] = repeatTime.split(":").map(Number);
  const now = new Date(from);
  const candidates = repeatDays.map((day) => {
    const candidate = new Date(now);
    candidate.setHours(hours, minutes, 0, 0);
    const dayOffset = (day - now.getDay() + 7) % 7;
    candidate.setDate(now.getDate() + dayOffset);
    if (candidate.getTime() <= now.getTime()) candidate.setDate(candidate.getDate() + 7);
    return candidate.getTime();
  });
  return Math.min(...candidates);
}

function formatWeekdayList(days) {
  const repeatDays = normalizeWeekdayList(days);
  if (repeatDays.length === 7) return "day";
  return repeatDays.map((day) => weekdayOptions.find((option) => option.value === day)?.short).filter(Boolean).join("/");
}

function formatTimeLabel(value) {
  const normalized = normalizeTimeValue(value);
  if (!normalized) return "12:00 AM";
  const [hours, minutes] = normalized.split(":").map(Number);
  return new Date(2000, 0, 1, hours, minutes).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function getSelectedWeekdays(group) {
  return [...document.querySelectorAll(`[data-weekday-group="${group}"] input[type="checkbox"]:checked`)].map((input) => Number(input.value));
}

function setSelectedWeekdays(group, days = []) {
  const selected = new Set(normalizeWeekdayList(days));
  document.querySelectorAll(`[data-weekday-group="${group}"] input[type="checkbox"]`).forEach((input) => {
    input.checked = selected.has(Number(input.value));
  });
}

function getProducts(source = state.products) {
  const products = Array.isArray(source) ? source : defaultProducts;
  return [...products].sort((a, b) => {
    if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1;
    return (Number(a.sortOrder) || 999) - (Number(b.sortOrder) || 999) || String(a.name || "").localeCompare(String(b.name || ""));
  });
}

function getStoreCategories(source = getProducts(), categorySource = []) {
  const savedCategories = Array.isArray(categorySource) ? categorySource : [];
  return ["All", ...new Set([...savedCategories, ...source.map((product) => product.category || "General")])];
}

function getStoreCategoryCount(category) {
  const products = getProducts();
  return category === "All" ? products.length : products.filter((product) => product.category === category).length;
}

function saveState() {
  localStorage.setItem(userStateKey, JSON.stringify(pickStateKeys(state, userStateKeys)));
  localStorage.setItem(communityStateKey, JSON.stringify(sanitizeCommunityStateForStorage(pickStateKeys(state, communityStateKeys))));
}

function saveUserState() {
  localStorage.setItem(userStateKey, JSON.stringify(pickStateKeys(state, userStateKeys)));
}

function saveCommunityState() {
  normalizeModerationRecords();
  touchMemberPresence();
  const communityState = sanitizeCommunityStateForStorage(pickStateKeys(state, communityStateKeys));
  lastCommunitySnapshot = JSON.stringify(communityState);
  localStorage.setItem(communityStateKey, lastCommunitySnapshot);
  return pushCommunityState();
}

function applyCommunityState(nextCommunityState) {
  const localModeration = state.moderation || {};
  const incomingModeration = nextCommunityState?.moderation || {};
  const mergedModeration = {
    ...incomingModeration,
    clearChatAt: Math.max(Number(localModeration.clearChatAt) || 0, Number(incomingModeration.clearChatAt) || 0),
    clearReceiptsAt: Math.max(Number(localModeration.clearReceiptsAt) || 0, Number(incomingModeration.clearReceiptsAt) || 0),
  };
  const mergedCommunityState = { ...nextCommunityState, moderation: mergedModeration };
  if (!Object.hasOwn(nextCommunityState || {}, "demoCatalogSeeded")) {
    mergedCommunityState.demoCatalogSeeded = true;
  }
  [
    "productDeletedAt",
    "productCategoryUpdatedAt",
    "productCategoryDeletedAt",
    "announcementDeletedAt",
    "chatDeletedAt",
    "directMessageDeletedAt",
    "memberDeletedAt",
    "replacementDeletedAt",
    "trollRuleDeletedAt",
  ].forEach((key) => {
    mergedCommunityState[key] = mergeDeletedAtMaps(state[key], nextCommunityState?.[key]);
  });
  mergedCommunityState.chat = mergeCommunityRecords(state.chat, nextCommunityState?.chat, { limit: 140 });
  mergedCommunityState.directMessages = mergeCommunityRecords(state.directMessages, nextCommunityState?.directMessages, { limit: 300 });
  mergedCommunityState.announcements = mergeCommunityRecords(state.announcements, nextCommunityState?.announcements, { limit: 30, descending: true });
  mergedCommunityState.receipts = mergeCommunityRecords(state.receipts, nextCommunityState?.receipts, { limit: 24, descending: true });
  const normalized = normalizeState({ ...structuredClone(fallbackState), ...state, ...pickStateKeys(mergedCommunityState, communityStateKeys) });
  Object.assign(state, pickStateKeys(normalized, communityStateKeys));
  normalizeModerationRecords();
}

function mergeCommunityRecords(localRecords = [], incomingRecords = [], options = {}) {
  const byId = new Map();
  const addRecord = (record, prefer = true) => {
    const id = record?.id;
    if (!id) return;
    if (prefer || !byId.has(id)) byId.set(id, record);
  };
  (Array.isArray(localRecords) ? localRecords : []).forEach((record) => addRecord(record, false));
  (Array.isArray(incomingRecords) ? incomingRecords : []).forEach((record) => addRecord(record, true));
  const sorted = [...byId.values()].sort((a, b) => {
    const diff = (Number(a.createdAt) || 0) - (Number(b.createdAt) || 0);
    return options.descending ? -diff : diff;
  });
  return options.limit ? sorted.slice(options.descending ? 0 : -options.limit) : sorted;
}

function syncCommunityState() {
  applyCommunityState(readSavedState(communityStateKey));
}

async function requestJson(pathname, options = {}) {
  const response = await fetch(`${apiBase}${pathname}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });
  if (!response.ok) {
    const error = new Error(`Request failed: ${response.status}`);
    error.status = response.status;
    error.pathname = pathname;
    throw error;
  }
  return response.json();
}

async function pullCommunityState() {
  if (remoteSyncDisabled) {
    sharedCommunityReady = false;
    sharedCommunityUnavailable = true;
    return;
  }
  try {
    const remoteCommunity = await requestJson("/api/community");
    remoteSyncAvailable = true;
    sharedCommunityUnavailable = false;
    if (!hasRemoteCommunityContent(remoteCommunity)) {
      sharedCommunityReady = false;
      if (pendingLocalCommunitySeed) {
        applyCommunityState(pendingLocalCommunitySeed);
        pendingLocalCommunitySeed = null;
        await saveCommunityState();
      } else if (state.joinedCommunity || hasAdminCredentials()) {
        await saveCommunityState();
      }
      return;
    }
    pendingLocalCommunitySeed = null;
    sharedCommunityReady = true;
    const nextSnapshot = JSON.stringify(remoteCommunity);
    if (nextSnapshot === lastCommunitySnapshot) return;
    lastCommunitySnapshot = nextSnapshot;
    applyCommunityState(remoteCommunity);
    localStorage.setItem(communityStateKey, JSON.stringify(pickStateKeys(state, communityStateKeys)));
    render();
  } catch (error) {
    if (error.status === 404) remoteSyncDisabled = true;
    remoteSyncAvailable = false;
    sharedCommunityReady = false;
    sharedCommunityUnavailable = true;
  }
}

async function pushCommunityState() {
  if (remoteSyncDisabled) return null;
  if (remoteSyncInFlight) {
    await remoteSyncInFlight;
  }
  remoteSyncInFlight = true;
  const syncPromise = requestJson("/api/community", {
    method: "POST",
    body: JSON.stringify(sanitizeCommunityStateForStorage(pickStateKeys(state, communityStateKeys))),
  });
  remoteSyncInFlight = syncPromise;
  try {
    const savedCommunity = await syncPromise;
    if (savedCommunity && Object.keys(savedCommunity).length) {
      lastCommunitySnapshot = JSON.stringify(savedCommunity);
      applyCommunityState(savedCommunity);
      localStorage.setItem(communityStateKey, JSON.stringify(pickStateKeys(state, communityStateKeys)));
    }
    remoteSyncAvailable = true;
    sharedCommunityReady = true;
    sharedCommunityUnavailable = false;
  } catch (error) {
    if (error.status === 404) remoteSyncDisabled = true;
    remoteSyncAvailable = false;
    sharedCommunityUnavailable = true;
  } finally {
    if (remoteSyncInFlight === syncPromise) remoteSyncInFlight = false;
  }
}

function loadAccounts() {
  return readSavedState(accountsStateKey);
}

function ensureDefaultAdminAccount() {
  const accounts = loadAccounts();
  if (accounts.admin?.passwordHash === defaultAdminPasswordHash) return;
  accounts.admin = { username: "admin", passwordHash: defaultAdminPasswordHash };
  localStorage.setItem(accountsStateKey, JSON.stringify(accounts));
  pushAccount("admin", defaultAdminPasswordHash);
}

function saveAccount(username, passwordHash) {
  const accounts = loadAccounts();
  accounts[username] = { username, passwordHash };
  localStorage.setItem(accountsStateKey, JSON.stringify(accounts));
  pushAccount(username, passwordHash);
}

function getAccount(username) {
  const accounts = loadAccounts();
  return accounts[username] || null;
}

function deleteLocalAccount(username) {
  const accounts = loadAccounts();
  delete accounts[username];
  localStorage.setItem(accountsStateKey, JSON.stringify(accounts));
  deleteRemoteAccount(username);
}

async function getRemoteAccount(username) {
  try {
    const account = await requestJson(`/api/account?username=${encodeURIComponent(username)}`);
    remoteSyncAvailable = true;
    return account;
  } catch {
    return null;
  }
}

async function pushAccount(username, passwordHash) {
  try {
    await requestJson("/api/account", {
      method: "POST",
      body: JSON.stringify({ username, passwordHash }),
    });
    remoteSyncAvailable = true;
  } catch {
    remoteSyncAvailable = false;
  }
}

async function deleteRemoteAccount(username) {
  try {
    await requestJson(`/api/account?username=${encodeURIComponent(username)}`, {
      method: "DELETE",
    });
    remoteSyncAvailable = true;
  } catch {
    remoteSyncAvailable = false;
  }
}

function getTier(count = state.buyerCount) {
  return tiers.find((tier) => count >= tier.min && count <= tier.max) || tiers[0];
}

function makeCartKey(productId, variantId = "", mode = "stock") {
  return mode === "preorder" ? `${productId}::${variantId || ""}::preorder` : variantId ? `${productId}::${variantId}` : productId;
}

function parseCartKey(cartKey) {
  const [productId, ...variantParts] = String(cartKey || "").split("::");
  let mode = "stock";
  if (variantParts.at(-1) === "preorder") {
    mode = "preorder";
    variantParts.pop();
  }
  return {
    productId,
    variantId: variantParts.join("::"),
    mode,
  };
}

function getCartLine(cartKey) {
  const { productId, variantId, mode: parsedMode } = parseCartKey(cartKey);
  const product = getProducts().find((item) => item.id === productId);
  if (!product) return null;
  const variant = variantId ? getProductVariant(product, variantId, { fallback: false }) : null;
  const mode = parsedMode === "preorder" || (parsedMode === "stock" && product.stock <= 0 && product.preorderEnabled) ? "preorder" : "stock";
  return { key: cartKey, productId, variantId: variant?.id || "", mode, product, variant };
}

function getSelectedProductVariantId(control) {
  const card = control?.closest(".product-card, .cart-suggestion, .upsell-card");
  const productId = control?.dataset.add || control?.dataset.openPreorder || "";
  return card?.querySelector(`[data-size-select="${CSS.escape(productId)}"]`)?.value || "";
}

function getSelectedOrderMode(control) {
  return control?.dataset.orderMode || control?.closest(".product-card, .cart-suggestion, .upsell-card")?.dataset.orderMode || "stock";
}

function getCartUnits() {
  return Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
}

function getCartTotal() {
  return Object.entries(state.cart).reduce((sum, [cartKey, qty]) => {
    const line = getCartLine(cartKey);
    if (!line) return sum;
    return sum + getProductEffectivePrice(line.product, qty, line.variant, line.mode) * qty;
  }, 0);
}

function getCartSavings() {
  return Object.entries(state.cart).reduce((sum, [cartKey, qty]) => {
    const line = getCartLine(cartKey);
    if (!line) return sum;
    const basePrice = getWholesaleBasePrice(line.product, line.variant, line.mode);
    const paidPrice = getProductEffectivePrice(line.product, qty, line.variant, line.mode);
    return sum + Math.max(0, basePrice - paidPrice) * qty;
  }, 0);
}

function getCartItemCount() {
  return Object.keys(state.cart).length;
}

function getCartSuggestions() {
  const suggestions = [];
  const cartProductIds = new Set(Object.keys(state.cart).map((cartKey) => parseCartKey(cartKey).productId));

  Object.entries(state.cart).forEach(([cartKey, qty]) => {
    const line = getCartLine(cartKey);
    const product = line?.product;
    if (!product) return;
    const nextTier = getNextWholesaleTier(product, qty, line.variant, line.mode);
    if (!nextTier) return;
    const addQty = nextTier.minQty - qty;
    suggestions.push({
      type: "wholesale",
      product,
      variant: line.variant,
      variantId: line.variantId,
      mode: line.mode,
      addQty,
      title: `Add ${addQty} more ${addQty === 1 ? "pc" : "pcs"} of ${getCartItemName(product, line.variant)}`,
      detail: `Unlock ${line.mode === "preorder" ? "preorder " : ""}${formatWholesaleTierLabel(nextTier)} wholesale pricing.`,
      action: `Add ${addQty}`,
    });
  });

  const cheapestAddOns = getProducts()
    .filter((product) => !cartProductIds.has(product.id))
    .filter((product) => product.stock > 0)
    .sort((a, b) => getProductEffectivePrice(a, 1, getDefaultProductVariant(a), "stock") - getProductEffectivePrice(b, 1, getDefaultProductVariant(b), "stock"))
    .slice(0, Math.max(0, 3 - suggestions.length))
    .map((product) => ({
      type: "addon",
      product,
      variant: getDefaultProductVariant(product),
      variantId: getDefaultProductVariant(product)?.id || "",
      mode: "stock",
      addQty: 1,
      title: product.name,
      detail: `${formatMoney(getProductEffectivePrice(product, 1, getDefaultProductVariant(product), "stock"))} add-on from ${product.category}.`,
      action: "Add",
    }));

  return [...suggestions, ...cheapestAddOns].slice(0, 3);
}

function getCheckoutUpsells() {
  const cartProductIds = new Set(Object.keys(state.cart).map((cartKey) => parseCartKey(cartKey).productId));
  const wholesaleTargets = getCartSuggestions().filter((suggestion) => suggestion.type === "wholesale").slice(0, 1);
  const addOns = getProducts()
    .filter((product) => !cartProductIds.has(product.id))
    .filter((product) => product.stock > 0 || product.preorderEnabled)
    .sort((a, b) => {
      const aMode = a.stock > 0 ? "stock" : "preorder";
      const bMode = b.stock > 0 ? "stock" : "preorder";
      const aPrice = getProductEffectivePrice(a, 1, getDefaultProductVariant(a), aMode);
      const bPrice = getProductEffectivePrice(b, 1, getDefaultProductVariant(b), bMode);
      if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1;
      return aPrice - bPrice;
    })
    .slice(0, Math.max(0, 3 - wholesaleTargets.length))
    .map((product) => ({
      type: product.preorderEnabled ? "preorder" : "addon",
      product,
      variant: getDefaultProductVariant(product),
      variantId: getDefaultProductVariant(product)?.id || "",
      mode: product.stock > 0 ? "stock" : "preorder",
      addQty: 1,
      title: product.name,
      detail: product.preorderEnabled
        ? `${formatMoney(getProductEffectivePrice(product, 1, getDefaultProductVariant(product), product.stock > 0 ? "stock" : "preorder"))} ${product.stock > 0 ? "add-on" : "preorder add-on"} ${getWholesaleSummary(product, getDefaultProductVariant(product), product.stock > 0 ? "stock" : "preorder") || ""}`.trim()
        : `${formatMoney(getProductEffectivePrice(product, 1, getDefaultProductVariant(product), "stock"))} ${getWholesaleSummary(product, getDefaultProductVariant(product), "stock") || "quick add-on"}`,
      action: "Add",
    }));
  return [...wholesaleTargets, ...addOns].slice(0, 3);
}

function getReceiptUnits(receipt) {
  if (receipt.items) {
    return receipt.items.reduce((sum, item) => sum + item.qty, 0);
  }
  return receipt.units || 0;
}

function getReceiptPaidTotal(receipt) {
  if (receipt.items) {
    return receipt.items.reduce((sum, item) => sum + item.paidUnit * item.qty, 0);
  }
  return (receipt.paidUnit || 0) * (receipt.units || 0);
}

function getReceiptTargetRefund(receipt, activePrice) {
  if (receipt.items) {
    return receipt.items.reduce((sum, item) => {
      const product = getProducts().find((entry) => entry.id === item.productId);
      const variant = product ? getProductVariant(product, item.variantId, { fallback: false }) : null;
      const targetUnit = Math.min(product ? getProductDisplayPrice(product, variant) : item.paidUnit, activePrice);
      return sum + Math.max(0, item.paidUnit - targetUnit) * item.qty;
    }, 0);
  }
  return Math.max(0, ((receipt.paidUnit || 0) - activePrice) * (receipt.units || 0));
}

function formatMoney(value) {
  return currency.format(value).replace("PHP", "PHP ");
}

async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  if (!globalThis.crypto?.subtle) {
    return btoa([...data].map((byte) => String.fromCharCode(byte)).join(""));
  }
  const digest = await globalThis.crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function nextDrawDistance() {
  const remainder = state.transactionCount % 50;
  return remainder === 0 ? 50 : 50 - remainder;
}

function areBuyerControlsEnabled() {
  return state.buyerControlsEnabled !== false;
}

function isGoldenTicketEnabled() {
  return state.goldenTicketEnabled !== false;
}

function addChat(author, text, system = false, options = {}) {
  const createdAt = Date.now();
  const message = {
    id: `chat-${createdAt}-${Math.floor(Math.random() * 10000)}`,
    author,
    text,
    system,
    reactions: { like: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 },
    createdAt,
    expiresAt: options.expiresAfter ? createdAt + options.expiresAfter : null,
    replyToId: options.replyToId || null,
    type: options.type || "text",
    pinned: options.pinned !== false,
    receipt: options.receipt || null,
    media: options.media || null,
    adminActingAs: options.adminActingAs || "",
    audience: normalizeGroupAudience(options.audience),
  };
  state.chat.push(message);
  state.chat = trimChatHistory(state.chat);

  if (system) {
    addAnnouncement(options.announcementTitle || "System update", text);
  }

  return message;
}

function normalizeGroupAudience(audience) {
  const mode = ["all", "hide-target", "only-target"].includes(audience?.mode) ? audience.mode : "all";
  const target = String(audience?.target || "").trim();
  return mode === "all" || !target ? { mode: "all", target: "" } : { mode, target };
}

function trimChatHistory(messages) {
  const recentRegularMessages = messages.filter((message) => message.type !== "receipt").slice(-60);
  return messages.filter((message) => message.type === "receipt" || recentRegularMessages.includes(message));
}

function addAnnouncement(title, text) {
  state.announcements.unshift({
    id: `ann-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    title,
    text,
    createdAt: Date.now(),
  });
  state.announcements = state.announcements.slice(0, 30);
}

function getActiveMemberId() {
  return state.username || state.handle || "";
}

function getAdminActingAs() {
  if (!isAdmin()) return "";
  const actingAs = String(state.adminActingAs || "").trim();
  return actingAs && actingAs !== "admin" ? actingAs : "";
}

function getChatIdentity() {
  if (hasAdminCredentials()) return state.handle || state.username || "admin";
  return state.username || state.handle || "";
}

function getChatIdentityLabel() {
  const actingAs = getAdminActingAs();
  return actingAs || getChatIdentity();
}

function getGroupChatAuthorOptions() {
  const actingAs = getAdminActingAs();
  if (!actingAs) return { author: getChatIdentity() };
  return { author: "admin", adminActingAs: actingAs };
}

function getAdminGroupAudience(fallbackTarget = "") {
  if (!isAdmin()) return { mode: "all", target: "" };
  const target = getAdminActingAs() || String(fallbackTarget || "").trim();
  const mode = ["all", "hide-target", "only-target"].includes(state.adminGroupVisibility) ? state.adminGroupVisibility : "all";
  return normalizeGroupAudience({ mode, target });
}

function getMemberAliases(memberId) {
  const aliases = new Set([memberId]);
  const member = state.members?.[memberId];
  if (member?.handle) aliases.add(member.handle);
  if (member?.username) aliases.add(member.username);

  (state.moderation?.replacements || []).forEach((entry) => {
    if (entry.previous === memberId || entry.next === memberId || aliases.has(entry.previous) || aliases.has(entry.next)) {
      if (entry.previous) aliases.add(entry.previous);
      if (entry.next) aliases.add(entry.next);
    }
  });

  return [...aliases].filter((alias) => alias && alias !== "admin");
}

function getMemberAccountAliases(memberId) {
  const aliases = new Set([memberId]);
  const member = state.members?.[memberId];
  if (member?.handle) aliases.add(member.handle);
  if (member?.username) aliases.add(member.username);
  return [...aliases].filter((alias) => alias && alias !== "admin");
}

function normalizeModerationRecords() {
  state.moderation = {
    blocked: state.moderation?.blocked || {},
    timeouts: state.moderation?.timeouts || {},
    replacements: Array.isArray(state.moderation?.replacements) ? state.moderation.replacements : [],
    clearChatAt: Math.max(0, Number(state.moderation?.clearChatAt) || 0),
    clearReceiptsAt: Math.max(0, Number(state.moderation?.clearReceiptsAt) || 0),
  };
  delete state.moderation.blocked.admin;
  delete state.moderation.timeouts.admin;

  const now = Date.now();
  Object.entries(state.moderation.timeouts).forEach(([memberId, timeout]) => {
    if (!timeout?.until || timeout.until <= now) {
      delete state.moderation.timeouts[memberId];
    }
  });
}

function touchMemberPresence() {
  if (!state.joinedCommunity) return;
  const memberId = getActiveMemberId();
  if (!memberId) return;
  const existing = state.members[memberId] || {};
  state.members[memberId] = {
    handle: hasAdminCredentials() ? state.handle || memberId : memberId,
    username: state.username || memberId,
    joinedAt: existing.joinedAt || Date.now(),
    lastSeen: Date.now(),
  };
}

function getCurrentMemberIds() {
  return [...new Set([state.username, hasAdminCredentials() ? state.handle : "", getActiveMemberId()].filter(Boolean))];
}

function getCurrentMemberModeration() {
  return getCurrentMemberIds().map((memberId) => getMemberModeration(memberId)).find(Boolean) || null;
}

function getMemberModeration(memberId = state.username || state.handle) {
  if (!memberId) return null;
  const aliases = getMemberAccountAliases(memberId);
  const blockedId = aliases.find((alias) => state.moderation?.blocked?.[alias]);
  if (blockedId) return { type: "blocked", record: state.moderation.blocked[blockedId] };
  const timeoutId = aliases.find((alias) => state.moderation?.timeouts?.[alias]?.until > Date.now());
  if (timeoutId) return { type: "timeout", record: state.moderation.timeouts[timeoutId] };
  return null;
}

function isMemberRestricted(memberId = "") {
  if (isAdmin()) return false;
  return Boolean(memberId ? getMemberModeration(memberId) : getCurrentMemberModeration());
}

function getGroupPresenceStats() {
  const members = { ...(state.members || {}) };
  state.chat.forEach((message) => {
    const handle = message.type === "receipt" ? message.receipt?.handle || message.author : message.author;
    if (!handle || handle === "System") return;
    members[handle] = members[handle] || {
      handle,
      joinedAt: message.createdAt || Date.now(),
      lastSeen: 0,
    };
  });

  if (state.joinedCommunity) {
    const memberId = getActiveMemberId();
    members[memberId] = members[memberId] || {
      handle: state.handle || memberId,
      joinedAt: Date.now(),
      lastSeen: Date.now(),
    };
  }

  const now = Date.now();
  return getAdjustedGroupPresenceStats({
    members: Object.keys(members).length,
    active: Object.values(members).filter((member) => member.lastSeen && now - member.lastSeen < 2 * 60 * 1000).length,
  });
}

function getGroupStatusText() {
  const presence = getGroupPresenceStats();
  return `${presence.active} online / ${presence.members} members`;
}

function getRealGroupPresenceStats() {
  const controls = state.trollControls;
  state.trollControls = { ...(controls || {}), memberStatsEnabled: false };
  const stats = getGroupPresenceStats();
  state.trollControls = controls;
  return stats;
}

function getAdjustedGroupPresenceStats(realStats) {
  const controls = normalizeTrollControls(state.trollControls);
  if (!controls.memberStatsEnabled) return realStats;
  const active = Math.max(realStats.active, realStats.active * controls.activeMultiplier);
  const baseTotal = Math.max(realStats.members, active);
  const members = Math.max(active, baseTotal * controls.totalMultiplier + controls.inactiveMembers);
  return {
    active: Math.round(active),
    members: Math.round(members),
  };
}

function getMessageById(messageId) {
  return state.chat.find((message) => message.id === messageId && canCurrentViewerSeeGroupMessage(message));
}

function canCurrentViewerSeeGroupMessage(message) {
  const audience = normalizeGroupAudience(message?.audience);
  if (audience.mode === "all" || !audience.target) return true;
  if (isAdmin()) return true;
  const isTarget = isCurrentViewerAudienceTarget(audience.target);
  if (audience.mode === "hide-target") return !isTarget;
  if (audience.mode === "only-target") return isTarget;
  return true;
}

function isCurrentViewerAudienceTarget(target) {
  if (!state.joinedCommunity && !hasAdminCredentials()) return false;
  const currentAliases = new Set(getCurrentMemberIds().flatMap((memberId) => getMemberAliases(memberId)));
  const targetAliases = new Set(getMemberAliases(target));
  targetAliases.add(target);
  return [...targetAliases].some((alias) => currentAliases.has(alias));
}

function getReplySnippet(messageId) {
  const message = getMessageById(messageId);
  if (!message) return null;
  const text = message.text || (message.type === "media" ? "Media attachment" : "");
  return {
    author: message.author,
    text: text.length > 80 ? `${text.slice(0, 80)}...` : text,
  };
}

function requireCommunityJoin() {
  if (state.joinedCommunity) return true;
  openAuth("join");
  return false;
}

function requireMemberCanAct() {
  if (hasAdminCredentials() && !state.joinedCommunity) {
    state.joinedCommunity = true;
    state.handle = state.handle || state.username || "admin";
    saveUserState();
  }
  if (!requireCommunityJoin()) return false;
  if (!state.handle) {
    state.handle = state.username || `Anon-${Math.floor(1000 + Math.random() * 9000)}`;
    saveUserState();
  }
  if (!isMemberRestricted()) return true;
  renderCommunityState();
  return false;
}

function hasAdminCredentials() {
  return state.username === "admin" || Boolean(state.passwordHash && getAccount("admin")?.passwordHash === state.passwordHash);
}

function isAdmin() {
  return hasAdminCredentials();
}

function isGuestViewer() {
  return !state.joinedCommunity && !hasAdminCredentials();
}

function shouldHoldGuestCommunity() {
  return isGuestViewer() && !sharedCommunityReady;
}

function getSharedCommunityMessage(surface) {
  if (sharedCommunityUnavailable) {
    return surface === "chat"
      ? "Shared group chat is unavailable right now."
      : "Shared store is unavailable right now.";
  }
  return surface === "chat"
    ? "Shared group chat is loading."
    : "Shared store is loading. Refresh after admin saves products.";
}

function requireAdmin() {
  if (isAdmin()) return true;
  return false;
}

function pruneExpiredChat() {
  syncCommunityState();
  const now = Date.now();
  const originalLength = state.chat.length;
  state.chat = state.chat.filter((message) => !message.expiresAt || message.expiresAt > now);
  if (state.chat.length !== originalLength) {
    saveCommunityState();
    renderChat();
  }
}

function addToCart(productId, qty = 1, options = {}) {
  if (isMemberRestricted()) {
    renderCommunityState();
    return;
  }
  const product = getProducts().find((item) => item.id === productId);
  if (!product) return;
  const mode = options.mode === "preorder" ? "preorder" : "stock";
  if (mode === "stock" && product.stock <= 0) return;
  if (mode === "preorder" && !product.preorderEnabled) return;
  if (mode === "preorder" && isPreorderEnded(product)) {
    window.alert("This preorder has ended.");
    return;
  }
  const variant = options.variantId ? getProductVariant(product, options.variantId, { fallback: false }) : getDefaultProductVariant(product);
  const cartKey = makeCartKey(productId, variant?.id || "", mode);
  state.cart[cartKey] = (state.cart[cartKey] || 0) + qty;
  state.cartOpen = options.keepCartClosed ? false : true;
  showCartNotice(`${getCartItemName(product, variant)}${mode === "preorder" ? " preorder" : ""}`);
  saveUserState();
  render();
  if (options.openSharedCart) {
    setWorkspaceTab("store");
    toggleCartPopup(true);
  }
}

function showCartNotice(productName) {
  window.clearTimeout(cartNoticeTimer);
  els.cartSentCard.innerHTML = `
    <strong>Sent to cart</strong>
    <span>${escapeHtml(productName)}</span>
  `;
  els.cartSentCard.classList.add("show");
  cartNoticeTimer = window.setTimeout(() => {
    els.cartSentCard.classList.remove("show");
  }, 2400);
}

function updateCart(cartKey, delta) {
  const next = (state.cart[cartKey] || 0) + delta;
  if (next <= 0) {
    delete state.cart[cartKey];
  } else {
    state.cart[cartKey] = next;
  }
  saveUserState();
  render();
}

function clearCart() {
  state.cart = {};
  state.cartOpen = false;
  closeCheckoutModal();
  clearPaymentReceipt();
  saveUserState();
  render();
}

function clearPaymentReceipt() {
  pendingPaymentReceipt = null;
  if (els.paymentReceiptInput) els.paymentReceiptInput.value = "";
  renderPaymentReceiptUpload();
}

function renderPaymentReceiptUpload() {
  if (!els.paymentReceiptPreview) return;

  updateCheckoutButtonState();
  els.paymentReceiptPreview.hidden = !pendingPaymentReceipt;
  if (!pendingPaymentReceipt) {
    els.paymentReceiptImage.removeAttribute("src");
    els.paymentReceiptName.textContent = "Receipt photo";
    return;
  }

  els.paymentReceiptImage.src = pendingPaymentReceipt.src;
  els.paymentReceiptName.textContent = pendingPaymentReceipt.name;
}

function hasCheckoutAccount() {
  return hasAdminCredentials() || Boolean(state.joinedCommunity && state.username && state.passwordSet);
}

function requireCheckoutAccount() {
  if (hasCheckoutAccount()) return true;
  pendingCheckoutAfterAuth = true;
  state.cartOpen = false;
  renderCart();
  openAuth("checkout");
  return false;
}

function openCheckoutModal() {
  if (!getCartUnits()) return;
  if (!requireCheckoutAccount()) return;
  state.cartOpen = false;
  renderCart();
  renderCheckoutModal();
  els.checkoutOverlay?.classList.add("show");
  els.checkoutOverlay?.setAttribute("aria-hidden", "false");
}

function closeCheckoutModal() {
  els.checkoutOverlay?.classList.remove("show");
  els.checkoutOverlay?.setAttribute("aria-hidden", "true");
}

function renderCheckoutModal() {
  if (!els.checkoutOverlay) return;
  updateCheckoutButtonState();
  const savedTotal = getCartSavings();
  els.checkoutModalTotal.textContent = formatMoney(getCartTotal());
  els.checkoutModalCount.textContent = `${getCartUnits()} pc${getCartUnits() === 1 ? "" : "s"}${savedTotal ? ` / saved ${formatMoney(savedTotal)}` : ""}`;
  els.checkoutModalList.innerHTML = renderCartLineItems({ compact: true }) || `<div class="empty-store">Cart empty</div>`;
  els.checkoutUpsellList.innerHTML = renderUpsellCards();
  els.checkoutUpsellList.classList.toggle("empty", !getCheckoutUpsells().length);
  renderPaymentReceiptUpload();
}

function updateCheckoutButtonState() {
  if (!els.checkoutBtn) return;
  const hasCartItems = Object.keys(state.cart).length > 0;
  els.checkoutBtn.disabled = !hasCartItems;
  els.checkoutBtn.textContent = !hasCartItems ? "Cart Empty" : hasCheckoutAccount() ? "Review Checkout" : "Create Account to Checkout";
  if (els.checkoutSubmitBtn) {
    els.checkoutSubmitBtn.disabled = !hasCartItems;
    els.checkoutSubmitBtn.textContent = pendingPaymentReceipt ? "Submit Anonymous Order" : "Upload Receipt to Submit";
  }
}

function handlePaymentReceiptUpload(event) {
  const file = event.target.files?.[0];
  if (!file) {
    clearPaymentReceipt();
    return;
  }

  if (!file.type.startsWith("image/")) {
    clearPaymentReceipt();
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    pendingPaymentReceipt = {
      name: file.name,
      src: String(reader.result),
    };
    renderPaymentReceiptUpload();
  });
  reader.readAsDataURL(file);
}

function clearChatMedia() {
  pendingChatMedia = null;
  if (els.chatMediaInput) els.chatMediaInput.value = "";
  renderChatMediaPreview();
}

function clearPrivateChatMedia() {
  pendingPrivateChatMedia = null;
  if (els.privateChatMediaInput) els.privateChatMediaInput.value = "";
  renderPrivateChatMediaPreview();
}

function renderChatMediaPreview() {
  if (!els.chatMediaPreview) return;
  els.chatMediaPreview.hidden = !pendingChatMedia;
  if (!pendingChatMedia) {
    els.chatMediaPreview.innerHTML = "";
    return;
  }

  const isVideo = pendingChatMedia.type.startsWith("video/");
  els.chatMediaPreview.innerHTML = `
    <div class="media-preview-card">
      ${isVideo ? `<video src="${pendingChatMedia.src}" muted playsinline></video>` : `<img src="${pendingChatMedia.src}" alt="${escapeHtml(pendingChatMedia.name)}" />`}
      <span>${escapeHtml(pendingChatMedia.name)}</span>
      <button class="icon-button" type="button" data-clear-chat-media aria-label="Remove media">x</button>
    </div>
  `;
}

function renderPrivateChatMediaPreview() {
  if (!els.privateChatMediaPreview) return;
  els.privateChatMediaPreview.hidden = !pendingPrivateChatMedia;
  if (!pendingPrivateChatMedia) {
    els.privateChatMediaPreview.innerHTML = "";
    return;
  }

  els.privateChatMediaPreview.innerHTML = `
    <div class="media-preview-card">
      <img src="${pendingPrivateChatMedia.src}" alt="${escapeHtml(pendingPrivateChatMedia.name)}" />
      <span>${escapeHtml(pendingPrivateChatMedia.name)}</span>
      <button class="icon-button" type="button" data-clear-private-chat-media aria-label="Remove photo">x</button>
    </div>
  `;
}

function handleChatMediaUpload(event) {
  const file = event.target.files?.[0];
  if (!file) {
    clearChatMedia();
    return;
  }

  if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
    clearChatMedia();
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    clearChatMedia();
    window.alert("Media must be 10 MB or smaller.");
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    pendingChatMedia = {
      name: file.name,
      type: file.type,
      size: file.size,
      src: String(reader.result),
    };
    renderChatMediaPreview();
  });
  reader.readAsDataURL(file);
}

function handlePrivateChatMediaUpload(event) {
  const file = event.target.files?.[0];
  if (!file) {
    clearPrivateChatMedia();
    return;
  }

  if (!file.type.startsWith("image/")) {
    clearPrivateChatMedia();
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    clearPrivateChatMedia();
    window.alert("Photo must be 10 MB or smaller.");
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    pendingPrivateChatMedia = {
      name: file.name,
      type: file.type,
      size: file.size,
      src: String(reader.result),
    };
    renderPrivateChatMediaPreview();
  });
  reader.readAsDataURL(file);
}

async function uploadMedia(media) {
  if (!media) return null;
  if (mediaUploadDisabled) return { url: media.src };
  try {
    return await requestJson("/api/media", {
      method: "POST",
      body: JSON.stringify({
        name: media.name,
        type: media.type,
        file: media.src,
      }),
    });
  } catch (error) {
    if (error.status === 404) mediaUploadDisabled = true;
    return { url: media.src };
  }
}

async function uploadChatMedia() {
  return uploadMedia(pendingChatMedia);
}

async function uploadPrivateChatMedia() {
  return uploadMedia(pendingPrivateChatMedia);
}

function recalculateRefunds(previousTierPrice) {
  const activePrice = getTier().price;
  const refundMessages = [];

  state.receipts = state.receipts.map((receipt) => {
    if (receipt.golden) return receipt;
    const targetRefund = getReceiptTargetRefund(receipt, activePrice);
    if (targetRefund > receipt.refunded) {
      refundMessages.push(`${receipt.id} partial refund ${formatMoney(targetRefund - receipt.refunded)} unlocked.`);
    }
    return { ...receipt, refunded: targetRefund };
  });

  if (activePrice < previousTierPrice && refundMessages.length) {
    addChat("System", refundMessages.slice(0, 3).join(" "), true, {
      announcementTitle: "Partial refunds issued",
    });
  }
}

function normalizeReceiptStatus(status) {
  if (status === "approved") return "confirmed";
  return receiptStatusOptions.some((option) => option.key === status) ? status : "pending";
}

function addCheckoutVerificationReply(receipt, receiptMessageId) {
  addChat(systemProfileAuthor, `${getMentionCode(receipt.handle)} verifying GCash receipt ${receipt.id}.`, false, {
    replyToId: receiptMessageId,
  });
}

function getReceiptMessageId(receiptId) {
  return state.chat.find((message) => message.type === "receipt" && message.receipt?.id === receiptId)?.id || null;
}

function addDirectMessage(from, to, text, options = {}) {
  state.directMessages = Array.isArray(state.directMessages) ? state.directMessages : [];
  state.directMessages.push({
    id: `dm-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    from,
    to,
    text: String(text || "").slice(0, 500),
    receiptId: options.receiptId || null,
    receiptStatus: options.receiptStatus || null,
    visibility: options.visibility || "direct",
    adminActingAs: options.adminActingAs || "",
    media: options.media || null,
    createdAt: Date.now(),
  });
  state.directMessages = state.directMessages.slice(-300);
}

function getReceiptStatusLabel(status = "pending") {
  return receiptStatusOptions.find((option) => option.key === normalizeReceiptStatus(status))?.label || "Pending";
}

function getReceiptStatusActions(status) {
  const normalizedStatus = normalizeReceiptStatus(status);
  const actions = {
    pending: [{ key: "verified", label: "Verify Payment" }, { key: "rejected", label: "Reject" }],
    verified: [{ key: "processing", label: "Processing" }, { key: "rejected", label: "Reject" }],
    processing: [{ key: "confirmed", label: "Confirm" }, { key: "rejected", label: "Reject" }],
    confirmed: [{ key: "delivered", label: "Delivered" }, { key: "rejected", label: "Reject" }],
    delivered: [],
    received: [],
    rejected: [],
  };
  return actions[normalizedStatus] || actions.pending;
}

function renderReceiptStatusButtons(receiptId, status) {
  return getReceiptStatusActions(status)
    .map((action) => `<button class="ghost-button" type="button" data-set-receipt-status="${escapeHtml(receiptId)}" data-status="${action.key}">${action.label}</button>`)
    .join("");
}

function getReceiptStatusMessage(receiptId, status) {
  const label = getReceiptStatusLabel(status).toLowerCase();
  if (status === "verified") return `Payment verified for receipt ${receiptId}.`;
  if (status === "processing") return `Order processing for receipt ${receiptId}.`;
  if (status === "confirmed") return `Order confirmed for receipt ${receiptId}.`;
  if (status === "delivered") return `Order delivered for receipt ${receiptId}.`;
  if (status === "received") return `Order received and vouched for receipt ${receiptId}.`;
  if (status === "rejected") return `Receipt ${receiptId} rejected.`;
  return `Receipt ${receiptId} is ${label}.`;
}

function getCurrentMemberReceipts() {
  if (!state.joinedCommunity && !hasAdminCredentials()) return [];
  if (isAdmin()) return state.receipts;
  const aliases = new Set(getCurrentMemberIds().flatMap((memberId) => getMemberAliases(memberId)));
  return state.receipts.filter((receipt) => aliases.has(receipt.handle));
}

function syncDirectReceiptStatus(receiptId, status) {
  state.directMessages = (state.directMessages || []).map((message) =>
    message.receiptId === receiptId ? { ...message, receiptStatus: status } : message,
  );
}

async function checkout() {
  if (!requireCheckoutAccount()) return;
  if (isMemberRestricted()) {
    renderCommunityState();
    return;
  }
  const units = getCartUnits();
  if (!units) return;
  if (!pendingPaymentReceipt) {
    window.alert("Upload a payment receipt photo before checkout.");
    els.paymentReceiptInput?.focus();
    return;
  }

  await pullCommunityState();
  const previousTierPrice = getTier().price;
  const items = Object.entries(state.cart).flatMap(([cartKey, qty]) => {
    const line = getCartLine(cartKey);
    if (!line) return [];
    const product = line.product;
    const variant = line.variant;
    return [{
      productId: line.productId,
      variantId: line.variantId,
      variantLabel: variant?.label || "",
      name: getCartItemName(product, variant),
      qty,
      paidUnit: getProductEffectivePrice(product, qty, variant, line.mode),
      retailUnit: getWholesaleBasePrice(product, variant, line.mode),
      wholesaleTier: getWholesaleTier(product, qty, variant, line.mode),
      preorder: line.mode === "preorder",
      preorderEndsAt: product.preorderEndsAt,
      preorderStock: product.preorderStock,
      bulkBuyAt: product.bulkBuyAt,
      bulkBuyRepeatDays: product.bulkBuyRepeatDays,
      bulkBuyRepeatTime: product.bulkBuyRepeatTime,
      availableAt: product.availableAt,
    }];
  });
  const paidTotal = items.reduce((sum, item) => sum + item.paidUnit * item.qty, 0);
  state.buyerCount += units;
  state.transactionCount += 1;

  const receipt = {
    id: `DETI-${9919 + state.transactionCount}`,
    handle: getChatIdentity(),
    itemCount: getCartItemCount(),
    items,
    units,
    refunded: 0,
    golden: false,
    status: "pending",
    paymentReceipt: pendingPaymentReceipt,
    preorder: items.some((item) => item.preorder),
    createdAt: Date.now(),
  };

  state.receipts.unshift(receipt);
  state.receipts = state.receipts.slice(0, 24);
  const receiptMessage = addChat(
    receipt.handle,
    `Posted GCash receipt ${receipt.id}.`,
    false,
    {
      type: "receipt",
      receipt: {
        id: receipt.id,
        handle: receipt.handle,
        total: paidTotal,
        units,
        itemCount: getCartItemCount(),
        items,
        status: receipt.status,
        preorder: receipt.preorder,
        paymentReceipt: pendingPaymentReceipt,
        createdAt: receipt.createdAt,
      },
    },
  );
  addCheckoutVerificationReply(receipt, receiptMessage.id);
  addDirectMessage(receipt.handle, "admin", `GCash receipt ${receipt.id} submitted for admin review. Status: ${getReceiptStatusLabel(receipt.status)}.`, {
    receiptId: receipt.id,
    receiptStatus: receipt.status,
  });
  addAnnouncement("Receipt broadcast", `${receipt.handle} posted receipt ${receipt.id}.`);

  recalculateRefunds(previousTierPrice);
  maybeTriggerGoldenTicket(receipt);
  await runTrollAutomations("purchase", {
    buyer: receipt.handle,
    receipt,
    product: items[0] ? getProducts().find((product) => product.id === items[0].productId) : null,
  });

  state.cart = {};
  state.cartOpen = false;
  closeCheckoutModal();
  clearPaymentReceipt();
  saveUserState();
  await saveCommunityState();
  render();
  setWorkspaceTab("orders");
}

function maybeTriggerGoldenTicket(latestReceipt) {
  if (!isGoldenTicketEnabled()) return;
  if (state.transactionCount % 50 !== 0) return;
  triggerGoldenTicket(latestReceipt);
}

function triggerGoldenTicket(latestReceipt = state.receipts[0]) {
  if (!isGoldenTicketEnabled()) return;
  const candidates = state.receipts.filter((receipt) => !receipt.golden);
  const winner = candidates[Math.floor(Math.random() * candidates.length)] || latestReceipt;
  if (!winner) {
    addChat("System", "Golden Ticket draw skipped because there are no receipts.", true, {
      announcementTitle: "Golden Ticket skipped",
    });
    return;
  }
  const fullRefund = getReceiptPaidTotal(winner);

  state.receipts = state.receipts.map((receipt) => {
    if (receipt.id !== winner.id) return receipt;
    return { ...receipt, golden: true, refunded: fullRefund };
  });

  addChat("System", `GOLDEN TICKET! Receipt #${winner.id} was chosen at random. Order refunded 100%.`, true, {
    announcementTitle: "Golden Ticket winner",
  });
  flashGolden(winner.id);
}

function flashGolden(receiptId) {
  els.goldenReceipt.textContent = `Receipt #${receiptId}`;
  els.goldenOverlay.classList.add("show");
  window.setTimeout(() => els.goldenOverlay.classList.remove("show"), 2600);
}

function pulseBuyers() {
  if (!areBuyerControlsEnabled()) return;
  syncCommunityState();
  const previousTierPrice = getTier().price;
  const burst = Math.floor(2 + Math.random() * 5);
  state.buyerCount += burst;
  state.transactionCount += 1;
  addChat("System", `${burst} anonymous buyers joined the group discount.`, true, {
    announcementTitle: "Buyer activity spike",
  });
  recalculateRefunds(previousTierPrice);
  maybeTriggerGoldenTicket(state.receipts[0]);
  saveCommunityState();
  render();
}

function renderHero() {
  if (!els.saleKicker || !els.heroHeadline) return;
  const activeTier = getTier();
  els.buyerCount.textContent = state.buyerCount;
  els.currentTier.textContent = formatMoney(activeTier.price);
  els.nextDraw.textContent = nextDrawDistance();
  els.saleKicker.textContent = state.buyerCount >= 16 ? "Lowest Tier Live" : "Group Discount Live";
  els.heroHeadline.textContent =
    state.buyerCount >= 16
      ? "Lowest preorder (bulk buy) price is unlocked."
      : `${16 - state.buyerCount} preorder buyers until PHP 1,499.`;
}

function renderTiers() {
  if (shouldHoldGuestCommunity()) {
    els.tierTrack.innerHTML = `
      <article class="preorder-stat">
        <span>Open products</span>
        <strong>...</strong>
      </article>
      <article class="preorder-stat">
        <span>Preorder stock</span>
        <strong>...</strong>
      </article>
      <article class="preorder-stat">
        <span>Next closing</span>
        <strong>...</strong>
      </article>
    `;
    els.refundStrip.hidden = true;
    if (els.bulkBuyList) els.bulkBuyList.innerHTML = `<div class="empty-store">${getSharedCommunityMessage("store")}</div>`;
    return;
  }
  const preorderProducts = getProducts().filter((product) => product.preorderEnabled);
  const totalSlots = preorderProducts.reduce((sum, product) => sum + (product.preorderStock || 0), 0);
  const endingSoon = preorderProducts
    .filter((product) => product.preorderEndsAt && product.preorderEndsAt > Date.now())
    .sort((a, b) => a.preorderEndsAt - b.preorderEndsAt)[0];
  els.tierTrack.innerHTML = `
    <article class="preorder-stat">
      <span>Open products</span>
      <strong>${preorderProducts.length}</strong>
    </article>
    <article class="preorder-stat">
      <span>Preorder stock</span>
      <strong>${totalSlots || "Set in admin"}</strong>
    </article>
    <article class="preorder-stat">
      <span>Next closing</span>
      <strong>${endingSoon ? escapeHtml(getPreorderCountdown(endingSoon)) : "Not set"}</strong>
    </article>
  `;
  els.refundStrip.hidden = true;
  if (!els.bulkBuyList) return;
  els.bulkBuyList.innerHTML = preorderProducts.length
    ? preorderProducts
        .map((product) => {
          const variant = getDefaultProductVariant(product);
          const wholesaleContent = renderWholesaleContent(product, variant, "preorder");
          const ended = isPreorderEnded(product);
          return `
            <article class="product-card bulk-buy-card ${focusedBulkBuyProductId === product.id ? "focused" : ""}" data-bulk-product="${escapeHtml(product.id)}" data-order-mode="preorder">
              <img class="product-shot" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
              <div class="product-main">
                <div class="product-top">
                  <div>
                    <p class="eyebrow">${escapeHtml(product.category)} / ${escapeHtml(product.type)}</p>
                    <h2>${escapeHtml(product.name)}</h2>
                  </div>
                  <span class="banner-chip ${ended ? "muted" : ""}">${ended ? "Ended" : "Preorder"}</span>
                </div>
                <p class="product-description">${escapeHtml(product.description)}</p>
                ${renderPreorderSummary(product)}
                ${renderVariantSelect(product)}
                <div class="wholesale-strip" data-wholesale-for="${escapeHtml(product.id)}" ${wholesaleContent ? "" : "hidden"}>${wholesaleContent}</div>
              </div>
              <div class="price" data-price-for="${escapeHtml(product.id)}">${renderProductPrice(product, variant, "Preorder price", "preorder")}</div>
              <button class="join-button" type="button" data-add="${escapeHtml(product.id)}" data-order-mode="preorder" ${ended ? "disabled" : ""}>Join now</button>
            </article>
          `;
        })
        .join("")
    : `<div class="empty-store">No Preorder (Bulk Buy) products are open.</div>`;
}

function renderProducts() {
  if (shouldHoldGuestCommunity()) {
    els.stockChip.textContent = sharedCommunityUnavailable ? "Shared store unavailable" : "Shared store loading";
    els.storeSearch.value = state.storeSearch;
    els.categoryFilter.innerHTML = "";
    els.productGrid.innerHTML = `<div class="empty-store">${getSharedCommunityMessage("store")}</div>`;
    return;
  }
  const products = getProducts();
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
  const bulkOpenCount = products.filter((product) => product.preorderEnabled).length;
  const search = state.storeSearch.trim().toLowerCase();
  const activeCategory = state.storeCategory || "All";
  const visibleProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = [product.name, product.type, product.banner, product.category, ...getProductVariants(product).map((variant) => variant.label)].some((value) =>
      value.toLowerCase().includes(search),
    );
    return matchesCategory && matchesSearch;
  });
  els.stockChip.textContent = bulkOpenCount ? `${totalStock} in stock / ${bulkOpenCount} preorder open` : `${totalStock} in stock`;
  els.storeSearch.value = state.storeSearch;
  els.categoryFilter.innerHTML = getStoreCategories(products, state.productCategories)
    .map(
      (category) => `
        <button class="${category === activeCategory ? "active" : ""}" type="button" data-category="${category}" aria-pressed="${category === activeCategory}">
          <span>${category === "All" ? "All products" : category}</span>
          <b>${getStoreCategoryCount(category)}</b>
        </button>
      `,
    )
    .join("");

  if (!visibleProducts.length) {
    els.productGrid.innerHTML = `<div class="empty-store">No products found.</div>`;
    return;
  }

  const featuredProductIds = new Set(visibleProducts.filter((product) => product.featured).slice(0, 2).map((product) => product.id));
  const firstFeaturedId = [...featuredProductIds][0] || "";
  const firstMenuProductId = visibleProducts.find((product) => !featuredProductIds.has(product.id))?.id || "";
  els.productGrid.innerHTML = visibleProducts
    .map((product) => {
      const variant = getDefaultProductVariant(product);
      const outOfStock = product.stock <= 0;
      const canPreorder = product.preorderEnabled;
      const storeMode = outOfStock && canPreorder ? "preorder" : "stock";
      const wholesaleContent = renderWholesaleContent(product, variant, storeMode);
      const saleActive = storeMode === "stock" && isProductSaleActive(product, Date.now(), variant);
      const showPreorderSummary = storeMode === "preorder";
      const ended = isPreorderEnded(product);
      const topFeatured = featuredProductIds.has(product.id);
      const primaryDisabled = (storeMode === "preorder" && ended) || (outOfStock && !canPreorder);
      const badgeLabel = topFeatured ? "Top pick" : !outOfStock && canPreorder ? "Stock + preorder" : canPreorder ? "Preorder" : outOfStock ? "Out" : saleActive ? "Sale" : product.banner;
      const sectionLabel =
        product.id === firstFeaturedId
          ? `<div class="menu-section-label"><strong>Kiosk picks</strong><span>Highlighted by admin</span></div>`
          : product.id === firstMenuProductId
          ? `<div class="menu-section-label"><strong>Full menu</strong><span>Manual admin order</span></div>`
          : "";
      const preorderButtonLabel = outOfStock && canPreorder ? "Preorder" : outOfStock ? "Out of stock" : "Add to cart";
      return `
        ${sectionLabel}
        <article class="product-card ${topFeatured ? "featured-product" : ""} ${outOfStock && !canPreorder ? "out-of-stock" : ""} ${showPreorderSummary ? "preorder-product" : ""}" data-order-mode="${storeMode}">
          <img class="product-shot" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
          <div class="product-main">
            <div class="product-top">
              <div>
                <p class="eyebrow">${escapeHtml(product.category)} / ${escapeHtml(product.type)}</p>
                <h2>${escapeHtml(product.name)}</h2>
              </div>
              <span class="banner-chip ${outOfStock && !canPreorder ? "muted" : ""}">${escapeHtml(badgeLabel)}</span>
            </div>
            <p class="product-description">${escapeHtml(product.description)}</p>
            ${
              showPreorderSummary
                ? renderPreorderSummary(product, { compact: true })
                : `<div class="product-meta">
                    <span>${outOfStock ? "Out of stock" : `${product.stock} in stock`}</span>
                    ${canPreorder ? `<span>Preorder open</span>` : ""}
                    ${saleActive && product.saleEndsAt ? `<span>Sale ${getSaleTimeLeft(product)}</span>` : ""}
                  </div>`
            }
            ${renderVariantSelect(product)}
            <div class="wholesale-strip" data-wholesale-for="${escapeHtml(product.id)}" ${wholesaleContent ? "" : "hidden"}>${wholesaleContent}</div>
          </div>
          <div class="price" data-price-for="${escapeHtml(product.id)}">${renderProductPrice(product, variant, storeMode === "preorder" ? "Preorder price" : "Current price", storeMode)}</div>
          <div class="product-actions">
            <button class="add-button" type="button" ${storeMode === "preorder" ? `data-open-preorder="${escapeHtml(product.id)}"` : `data-add="${escapeHtml(product.id)}" data-order-mode="stock"`} ${primaryDisabled ? "disabled" : ""}>${storeMode === "preorder" && ended ? "Preorder ended" : preorderButtonLabel}</button>
            ${canPreorder && !outOfStock ? `<button class="ghost-button preorder-inline-button" type="button" data-open-preorder="${escapeHtml(product.id)}" ${ended ? "disabled" : ""}>${ended ? "Preorder ended" : "Preorder"}</button>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCart() {
  const entries = Object.entries(state.cart);
  updateCheckoutButtonState();
  els.cartTotal.textContent = formatMoney(getCartTotal());
  els.cartCount.textContent = getCartUnits();
  if (els.preorderCartCount) els.preorderCartCount.textContent = getCartUnits();
  els.cartPopover.classList.toggle("show", state.cartOpen);
  renderPaymentReceiptUpload();

  if (!entries.length) {
    els.cartList.className = "cart-list empty";
    els.cartList.textContent = "Cart empty";
    if (els.cartSuggestions) els.cartSuggestions.innerHTML = "";
    return;
  }

  els.cartList.className = "cart-list";
  els.cartList.innerHTML = renderCartLineItems();
  renderCartSuggestions();
  renderCheckoutModal();
}

function renderCartLineItems(options = {}) {
  const entries = Object.entries(state.cart);
  return entries
    .filter(([cartKey]) => Boolean(getCartLine(cartKey)))
    .map(([cartKey, qty]) => {
      const { product, variant } = getCartLine(cartKey);
      const line = getCartLine(cartKey);
      const price = getProductEffectivePrice(product, qty, variant, line.mode);
      const retailPrice = getWholesaleBasePrice(product, variant, line.mode);
      const wholesaleTier = getWholesaleTier(product, qty, variant, line.mode);
      const nextWholesaleTier = getNextWholesaleTier(product, qty, variant, line.mode);
      return `
        <div class="cart-row ${options.compact ? "compact" : ""}">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
          <div>
            <strong>${escapeHtml(getCartItemName(product, variant))}</strong>
            <span>${
              line.mode === "preorder"
                ? wholesaleTier
                  ? `Preorder wholesale / ${formatMoney(price)} each${wholesaleTier.discountPercent > 0 ? ` / ${formatPercent(wholesaleTier.discountPercent)}% off` : ""} / saved ${formatMoney((retailPrice - price) * qty)} / ${getBulkBuyLabel(product)}`
                  : `Preorder (Bulk Buy) order / ${formatMoney(price)} each${nextWholesaleTier ? ` / add ${nextWholesaleTier.minQty - qty} more for ${formatWholesaleTierLabel(nextWholesaleTier)}` : ""} / ${getBulkBuyLabel(product)} / ${getAvailabilityLabel(product)}`
                : wholesaleTier
                ? `${formatMoney(price)} each wholesale${wholesaleTier.discountPercent > 0 ? ` / ${formatPercent(wholesaleTier.discountPercent)}% off` : ""} / saved ${formatMoney((retailPrice - price) * qty)}`
                : `${formatMoney(price)} each${nextWholesaleTier ? ` / add ${nextWholesaleTier.minQty - qty} more for ${formatWholesaleTierLabel(nextWholesaleTier)}` : ""}`
            }</span>
          </div>
          <div class="qty-controls">
            <button type="button" data-dec="${escapeHtml(cartKey)}">-</button>
            <strong>${qty}</strong>
            <button type="button" data-inc="${escapeHtml(cartKey)}">+</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderCartSuggestions() {
  if (!els.cartSuggestions) return;
  const suggestions = getCartSuggestions();
  els.cartSuggestions.innerHTML = suggestions.length
    ? `
      <div class="cart-suggestion-head">
        <strong>Checkout options</strong>
        <span>Reach wholesale or add cheaper items</span>
      </div>
      ${suggestions
        .map(
          (suggestion) => `
            <article class="cart-suggestion ${suggestion.type}">
              <img src="${escapeHtml(suggestion.product.image)}" alt="${escapeHtml(suggestion.product.name)}" loading="lazy" />
              <div>
                <strong>${escapeHtml(suggestion.title)}</strong>
                <span>${escapeHtml(suggestion.detail)}</span>
              </div>
              <button class="ghost-button" type="button" data-add="${escapeHtml(suggestion.product.id)}" data-variant-id="${escapeHtml(suggestion.variantId || "")}" data-order-mode="${escapeHtml(suggestion.mode || "stock")}" data-add-qty="${suggestion.addQty}">${escapeHtml(suggestion.action)}</button>
            </article>
          `,
        )
        .join("")}
    `
    : "";
}

function renderUpsellCards() {
  const upsells = getCheckoutUpsells();
  return upsells.length
    ? upsells
        .map(
          (suggestion) => `
            <article class="upsell-card ${suggestion.type}">
              <img src="${escapeHtml(suggestion.product.image)}" alt="${escapeHtml(suggestion.product.name)}" loading="lazy" />
              <div>
                <strong>${escapeHtml(suggestion.title)}</strong>
                <span>${escapeHtml(suggestion.detail)}</span>
              </div>
              <button class="ghost-button" type="button" data-add="${escapeHtml(suggestion.product.id)}" data-variant-id="${escapeHtml(suggestion.variantId || "")}" data-order-mode="${escapeHtml(suggestion.mode || "stock")}" data-add-qty="${suggestion.addQty}">${escapeHtml(suggestion.action)}</button>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-store compact-empty">No add-ons available.</div>`;
}

function renderReceipts() {
  if (!els.receiptList) return;
  if (!state.receipts.length) {
    els.receiptList.className = "receipt-list empty";
    els.receiptList.textContent = "No receipts yet";
    return;
  }

  els.receiptList.className = "receipt-list";
  els.receiptList.innerHTML = state.receipts
    .map(
      (receipt) => {
        const bulkItem = (receipt.items || []).find((item) => item.preorder);
        return `
        <div class="receipt-row ${receipt.golden ? "golden" : ""}">
          <div>
            <strong>#${receipt.id}</strong>
            <span>${receipt.handle} - ${receipt.preorder ? "preorder (bulk buy) - " : ""}${getReceiptUnits(receipt)} unit${getReceiptUnits(receipt) === 1 ? "" : "s"}${receipt.paymentReceipt ? " - payment photo attached" : ""}</span>
            ${bulkItem ? `<span>${escapeHtml(getAvailabilityLabel(bulkItem))}</span>` : ""}
          </div>
          <div class="status">
            <strong>${receipt.golden ? "FREE" : formatMoney(getReceiptPaidTotal(receipt) - receipt.refunded)}</strong>
            <span>${getReceiptStatusLabel(receipt.status)}</span>
            ${receipt.refunded ? `<span>${formatMoney(receipt.refunded)} refunded</span>` : ""}
            ${
              isAdmin()
                ? `
                  <div class="receipt-actions">
                    ${renderReceiptStatusButtons(receipt.id, receipt.status) || `<span>No further actions</span>`}
                  </div>
                `
                : ""
            }
          </div>
        </div>
      `;
      },
    )
    .join("");
}

function renderMemberOrders() {
  if (!els.orderSummary || !els.orderList) return;
  const receipts = getCurrentMemberReceipts();
  const activeOrders = receipts.filter((receipt) => !["received", "rejected"].includes(normalizeReceiptStatus(receipt.status))).length;
  els.orderSummary.innerHTML = `
    <article>
      <span>Total orders</span>
      <strong>${receipts.length}</strong>
    </article>
    <article>
      <span>In progress</span>
      <strong>${activeOrders}</strong>
    </article>
    <article>
      <span>Received</span>
      <strong>${receipts.filter((receipt) => normalizeReceiptStatus(receipt.status) === "received").length}</strong>
    </article>
  `;

  els.orderList.innerHTML = receipts.length
    ? receipts
        .map((receipt) => {
          const status = normalizeReceiptStatus(receipt.status);
          const bulkItem = (receipt.items || []).find((item) => item.preorder);
          return `
            <article class="order-row ${status}">
              <div>
                <strong>${escapeHtml(receipt.id)}</strong>
                <span>${getReceiptUnits(receipt)} unit${getReceiptUnits(receipt) === 1 ? "" : "s"} / ${formatMoney(getReceiptPaidTotal(receipt) - receipt.refunded)}</span>
                <small>${getReceiptStatusLabel(status)} / GCash receipt uploaded${bulkItem ? ` / ${escapeHtml(getAvailabilityLabel(bulkItem))}` : ""}</small>
              </div>
              ${
                !isAdmin() && status === "delivered"
                  ? `<button class="ghost-button" type="button" data-receive-order="${escapeHtml(receipt.id)}">Vouch Received</button>`
                  : ""
              }
            </article>
          `;
        })
        .join("")
    : `<div class="empty-store">${state.joinedCommunity || hasAdminCredentials() ? "No orders yet." : "Join community to view orders."}</div>`;
}

function renderAnnouncements() {
  if (!els.announcementList) return;
  if (!state.announcements.length) {
    els.announcementList.innerHTML = `<div class="empty-store">No announcements yet.</div>`;
    return;
  }

  els.announcementList.innerHTML = state.announcements
    .map(
      (announcement) => `
        <article class="announcement-card">
          <span>${new Date(announcement.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
          <strong>${escapeHtml(announcement.title)}</strong>
          <p>${escapeHtml(announcement.text)}</p>
          ${isAdmin() ? `<button class="ghost-button" type="button" data-delete-announcement="${announcement.id}">Delete</button>` : ""}
        </article>
      `,
    )
    .join("");
}

function renderChat(options = {}) {
  renderChatMode();
  renderReplyComposer();
  renderCommunityState();
  renderPinnedSystemMessage();
  renderMentionInbox();
  syncChatComposerClearance();
  if (shouldHoldGuestCommunity()) {
    els.chatSearchInput.value = chatSearchQuery;
    els.chatSearchStatus.textContent = sharedCommunityUnavailable ? "Shared chat unavailable" : "Shared chat loading";
    els.chatFeed.innerHTML = `<div class="chat-start">${getSharedCommunityMessage("chat")}</div>`;
    return;
  }
  const previousHeight = els.chatFeed.scrollHeight;
  const previousTop = els.chatFeed.scrollTop;
  const searchTerm = chatSearchQuery.trim().toLowerCase();
  const baseFeedMessages = state.chat.filter((message) => (!message.system || message.type === "receipt") && canCurrentViewerSeeGroupMessage(message));
  const feedMessages = filterAdminChatMessages(baseFeedMessages);
  const searchedMessages = searchTerm ? feedMessages.filter((message) => getMessageSearchText(message).includes(searchTerm)) : feedMessages;
  const hasOlderMessages = !searchTerm && visibleChatCount < feedMessages.length;
  const visibleMessages = searchTerm ? searchedMessages : searchedMessages.slice(-visibleChatCount);

  els.chatSearchInput.value = chatSearchQuery;
  if (els.adminChatFilterSelect) els.adminChatFilterSelect.value = state.adminChatFilter || "all";
  els.chatSearchStatus.textContent = getChatStatusText(searchTerm, visibleMessages.length, feedMessages.length, baseFeedMessages.length);

  els.chatFeed.innerHTML = `
    ${
      searchTerm && !visibleMessages.length
        ? `<div class="chat-start">No matching messages</div>`
        : hasOlderMessages
        ? `<button class="load-more-chat" type="button" data-load-chat="older">Load older messages</button>`
        : `<div class="chat-start">Start of conversation</div>`
    }
    ${visibleMessages
    .map(
      (message) => `
        <div class="chat-message ${message.system ? "system" : ""} ${
        message.author === "admin" && !message.adminActingAs ? "admin-message" : ""
      } ${message.author === systemProfileAuthor ? "system-profile-message" : ""} ${getMessageDisplayAuthor(message) === getChatIdentity() ? "mine" : ""} ${
        message.expiresAt ? "disappearing" : ""
      } ${message.type === "receipt" ? "receipt-message" : ""}" data-message-id="${message.id}">
          <div class="message-wrap">
            <div class="bubble">
              ${renderReplyQuote(message.replyToId)}
              ${renderMessageContent(message)}
            </div>
            ${renderReactionSummary(message)}
            <button class="message-menu-button" type="button" title="Message actions" aria-label="Message actions" data-menu="${message.id}">...</button>
            <div class="message-menu ${state.openActionMenuId === message.id ? "show" : ""}">
              <button type="button" data-reply="${message.id}">Reply</button>
              <button type="button" data-mention="${message.id}">Mention</button>
              <button type="button" data-toggle-react="${message.id}">React</button>
              ${isAdmin() && message.type !== "receipt" ? `<button type="button" data-delete-message="${message.id}">Delete</button>` : ""}
              ${state.openReactionMenuId === message.id ? renderReactionPicker(message) : ""}
            </div>
          </div>
        </div>
      `,
    )
    .join("")}
  `;

  if (options.preserveScrollTop) {
    els.chatFeed.scrollTop = previousTop;
  } else if (options.preservePosition) {
    els.chatFeed.scrollTop = els.chatFeed.scrollHeight - previousHeight;
  } else {
    scrollChatToBottom();
  }
}

function getChatStatusText(searchTerm, visibleCount, filteredCount, totalCount) {
  if (searchTerm) return `${visibleCount} found`;
  if (isAdmin() && state.adminChatFilter && state.adminChatFilter !== "all") {
    return `${filteredCount} shown / ${totalCount} total`;
  }
  return getGroupStatusText();
}

function filterAdminChatMessages(messages) {
  if (!isAdmin()) return messages;
  const filter = ["all", "real", "trolls"].includes(state.adminChatFilter) ? state.adminChatFilter : "all";
  if (filter === "all") return messages;
  return messages.filter((message) => {
    const troll = isTrollChatMessage(message);
    return filter === "trolls" ? troll : !troll;
  });
}

function isTrollChatMessage(message) {
  const controls = getTrollControls();
  const trollAccounts = new Set(controls.trollAccounts || []);
  Object.entries(state.members || {}).forEach(([memberId, member]) => {
    if (member?.automated) trollAccounts.add(memberId);
  });
  const ids = [
    message?.author,
    message?.adminActingAs,
    message?.receipt?.handle,
    getMessageDisplayAuthor(message),
  ];
  return ids.some((id) => id && trollAccounts.has(id));
}

function renderChatMode() {
  const adminMode = state.chatMode === "admin";
  renderAdminSenderControls();
  els.chatPanel.classList.toggle("admin-chat-mode", adminMode);
  els.chatPanelEyebrow.textContent = adminMode ? "Admin Chat" : "Group Chat";
  els.chatPanelTitle.textContent = adminMode ? (isAdmin() ? "Member Conversation" : "Admin Support") : "pepfactory Messenger";
  els.chatModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.chatMode === state.chatMode);
    button.setAttribute("aria-pressed", String(button.dataset.chatMode === state.chatMode));
  });
  els.chatSearchInput.hidden = adminMode;
  if (els.adminChatFilterSelect) els.adminChatFilterSelect.hidden = adminMode || !isAdmin();
  els.mentionInboxBtn.hidden = adminMode;
  els.mentionInbox.hidden = adminMode || !state.mentionInboxOpen;
  els.pinnedSystemMessage.hidden = adminMode || els.pinnedSystemMessage.hidden;
  els.chatFeed.hidden = adminMode;
  els.chatForm.hidden = adminMode;
  els.privateChatMembers.hidden = !adminMode || !isAdmin();
  els.privateChatFeed.hidden = !adminMode;
  els.privateChatForm.hidden = !adminMode;
}

function renderAdminSenderControls() {
  const selects = [els.adminGroupSendAsSelect, els.adminPrivateSendAsSelect].filter(Boolean);
  const searchInputs = [els.adminGroupSendAsSearchInput, els.adminPrivateSendAsSearchInput].filter(Boolean);
  const visibilitySelects = [els.adminGroupVisibilitySelect, els.adminPrivateVisibilitySelect].filter(Boolean);
  if (!selects.length && !searchInputs.length && !visibilitySelects.length) return;
  const admin = isAdmin();
  els.chatForm?.classList.toggle("admin-send-as-active", admin);
  const actingAs = getAdminActingAs();
  const memberIds = [...getKnownMemberIds()].filter((memberId) => memberId !== "admin").sort((a, b) => a.localeCompare(b));
  if (actingAs && !memberIds.includes(actingAs)) memberIds.unshift(actingAs);

  const getFilteredOptions = (query) => {
    const normalizedQuery = String(query || "").trim().toLowerCase();
    const filteredMemberIds = normalizedQuery
      ? memberIds.filter((memberId) => memberId.toLowerCase().includes(normalizedQuery))
      : memberIds;
    const visibleMemberIds = actingAs && !filteredMemberIds.includes(actingAs) ? [actingAs, ...filteredMemberIds] : filteredMemberIds;
    return [
      `<option value="">Send as admin</option>`,
      ...visibleMemberIds.map((memberId) => `<option value="${escapeHtml(memberId)}">Send as ${escapeHtml(memberId)}</option>`),
      normalizedQuery && !filteredMemberIds.length ? `<option value="" disabled>No matching users</option>` : "",
    ].join("");
  };

  searchInputs.forEach((input) => {
    input.hidden = !admin;
  });
  if (els.adminGroupSendAsSearchInput) els.adminGroupSendAsSearchInput.value = state.adminGroupSendAsSearch || "";
  if (els.adminPrivateSendAsSearchInput) els.adminPrivateSendAsSearchInput.value = state.adminPrivateSendAsSearch || "";

  selects.forEach((select) => {
    select.hidden = !admin;
    if (!admin) return;
    const query =
      select === els.adminPrivateSendAsSelect ? state.adminPrivateSendAsSearch : state.adminGroupSendAsSearch;
    select.innerHTML = getFilteredOptions(query);
    select.value = actingAs;
  });
  visibilitySelects.forEach((select) => {
    select.hidden = !admin;
    if (!admin) return;
    select.value = state.adminGroupVisibility || "all";
    select.title = getAdminGroupAudience(getActivePrivateChatMember()).target
      ? "Choose who can see the next group message"
      : "Select a user first for hidden or only-user visibility";
  });
}

function scrollChatToBottom() {
  els.chatFeed.scrollTop = els.chatFeed.scrollHeight;
  window.requestAnimationFrame(() => {
    syncChatComposerClearance();
    els.chatFeed.scrollTop = els.chatFeed.scrollHeight;
  });
}

function syncChatComposerClearance() {
  const composerHeight = Math.ceil(els.chatForm.getBoundingClientRect().height || 0);
  els.chatFeed.style.setProperty("--chat-composer-clearance", `${composerHeight + 20}px`);
}

function getDirectMessagesForCurrentMember() {
  const messages = Array.isArray(state.directMessages) ? state.directMessages : [];
  if (isAdmin()) return messages.slice(-12).reverse();
  if (!state.joinedCommunity) return [];
  const aliases = new Set(getCurrentMemberIds().flatMap((memberId) => getMemberAliases(memberId)));
  return messages
    .filter((message) => message.visibility !== "admin-note")
    .filter((message) => aliases.has(message.to))
    .slice(-8)
    .reverse();
}

function renderDirectMessages() {
  const messages = getDirectMessagesForCurrentMember();
  if (!messages.length) return "";

  return `
    <div class="direct-message-stack">
      ${messages
        .map(
          (message) => `
            <article class="direct-message-card">
              <span>${isAdmin() ? `To ${escapeHtml(message.to)}` : message.adminActingAs ? `From ${escapeHtml(message.adminActingAs)}` : "Admin message"} / ${new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}</span>
              <strong>${escapeHtml(message.text)}</strong>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function getPrivateChatMembers() {
  const members = { ...(state.members || {}) };
  Object.keys(loadAccounts()).forEach((username) => {
    members[username] = members[username] || { handle: username, username, joinedAt: 0, lastSeen: 0 };
  });
  state.chat.forEach((message) => {
    const memberId = message.type === "receipt" ? message.receipt?.handle || message.author : message.adminActingAs || message.author;
    if (!memberId || memberId === "admin" || memberId === "System" || memberId === systemProfileAuthor) return;
    members[memberId] = members[memberId] || { handle: memberId, username: memberId, joinedAt: message.createdAt || 0, lastSeen: 0 };
  });
  (state.directMessages || []).forEach((message) => {
    [message.from, message.to].forEach((memberId) => {
      if (!memberId || memberId === "admin") return;
      members[memberId] = members[memberId] || { handle: memberId, username: memberId, joinedAt: message.createdAt || 0, lastSeen: 0 };
    });
  });
  return Object.entries(members)
    .filter(([memberId]) => memberId !== "admin")
    .sort(([a], [b]) => a.localeCompare(b));
}

function getKnownMemberIds() {
  const ids = new Set();
  getPrivateChatMembers().forEach(([memberId]) => ids.add(memberId));
  state.chat.forEach((message) => {
    if (message.author && message.author !== "admin" && message.author !== "System" && message.author !== systemProfileAuthor) ids.add(message.author);
    if (message.receipt?.handle) ids.add(message.receipt.handle);
    if (message.adminActingAs) ids.add(message.adminActingAs);
  });
  return ids;
}

function getPrivateConversationMessages(memberId) {
  const aliases = new Set(getMemberAliases(memberId));
  aliases.add(memberId);
  return (state.directMessages || []).filter((message) => {
    if (message.visibility === "admin-note" && !isAdmin()) return false;
    const fromAdmin = message.from === "admin";
    const toAdmin = message.to === "admin";
    return (fromAdmin && aliases.has(message.to)) || (toAdmin && aliases.has(message.from));
  });
}

function getActivePrivateChatMember() {
  if (!isAdmin()) return getActiveMemberId();
  const members = getPrivateChatMembers();
  if (members.some(([memberId]) => memberId === state.adminPrivateChatMember)) return state.adminPrivateChatMember;
  return members[0]?.[0] || "";
}

function renderPrivateChat() {
  if (!els.privateChatFeed) return;
  renderChatMode();
  if (state.chatMode !== "admin") return;
  const admin = isAdmin();
  const memberId = getActivePrivateChatMember();
  const member = memberId ? state.members?.[memberId] || { handle: memberId } : null;
  const messages = memberId ? getPrivateConversationMessages(memberId) : [];
  const sendMode = ["direct", "group", "note"].includes(state.adminPrivateSendMode) ? state.adminPrivateSendMode : "direct";

  els.chatSearchStatus.textContent = admin ? (memberId ? `${member.handle || memberId} / ${getAdminSendModeLabel(sendMode)}` : getAdminSendModeLabel(sendMode)) : "1-on-1";
  els.privateChatMembers.hidden = !admin;
  if (admin) {
    const query = state.adminPrivateChatSearch.trim().toLowerCase();
    const members = getPrivateChatMembers().filter(([entryId, entry]) =>
      [entryId, entry.handle, entry.username].filter(Boolean).some((value) => String(value).toLowerCase().includes(query)),
    );
    els.privateMemberSearchInput.value = state.adminPrivateChatSearch;
    els.privateMemberSelect.innerHTML = members.length
      ? members
          .map(([entryId, entry]) => {
            const count = getPrivateConversationMessages(entryId).length;
            return `<option value="${escapeHtml(entryId)}">${escapeHtml(entry.handle || entryId)} (${count})</option>`;
          })
          .join("")
      : `<option value="">No members found</option>`;
    els.privateMemberSelect.value = members.some(([entryId]) => entryId === memberId) ? memberId : members[0]?.[0] || "";
    if (els.privateMemberSelect.value && els.privateMemberSelect.value !== state.adminPrivateChatMember) {
      state.adminPrivateChatMember = els.privateMemberSelect.value;
      saveUserState();
    }
    els.privateSendModeSelect.value = sendMode;
  }

  els.privateChatFeed.innerHTML = messages.length
    ? messages
        .map((message) => {
          const mine = admin ? message.from === "admin" : message.from !== "admin";
          const note = message.visibility === "admin-note";
          const label = note ? "Admin note" : message.adminActingAs || (message.from === "admin" ? "Admin" : message.from);
          if (message.receiptId) return renderPrivateReceiptStatusMessage(message, { mine, note, label });
          return `
            <article class="private-chat-message ${mine ? "mine" : ""} ${note ? "admin-note" : ""}">
              <strong>${escapeHtml(label)}</strong>
              ${
                message.receiptId
                  ? `<small>${escapeHtml(message.receiptId)} / ${escapeHtml(getReceiptStatusLabel(message.receiptStatus))}</small>`
                  : message.adminActingAs
                  ? `<small>Admin</small>`
                  : ""
              }
              ${message.text ? `<p>${escapeHtml(message.text)}</p>` : ""}
              ${renderPrivateMessageMedia(message)}
              <span>${new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
            </article>
          `;
        })
        .join("")
    : `<div class="chat-start">${admin ? "Select a member or wait for a message." : "No admin messages yet."}</div>`;

  const canSend = admin ? sendMode === "group" || Boolean(memberId) : state.joinedCommunity && !isMemberRestricted();
  els.privateChatInput.disabled = !canSend;
  els.privateChatInput.placeholder = admin ? getAdminPrivatePlaceholder(sendMode, memberId ? member.handle || memberId : "") : "Message admin";
  els.privateChatForm.querySelector(".send-button").disabled = !canSend;
  if (els.privateChatMediaBtn) els.privateChatMediaBtn.disabled = !canSend;
  els.privateChatFeed.scrollTop = els.privateChatFeed.scrollHeight;
}

function renderPrivateReceiptStatusMessage(message, options = {}) {
  const status = normalizeReceiptStatus(message.receiptStatus);
  const label = getReceiptStatusLabel(status);
  const stepMap = {
    pending: "1",
    verified: "2",
    processing: "3",
    confirmed: "4",
    delivered: "5",
    received: "6",
    rejected: "!",
  };
  return `
    <article class="private-chat-message receipt-status-message ${options.mine ? "mine" : ""} status-${status}">
      <div class="receipt-status-card">
        <div class="receipt-status-mark">${escapeHtml(stepMap[status] || "1")}</div>
        <div class="receipt-status-body">
          <div class="receipt-status-head">
            <strong>${escapeHtml(label)}</strong>
            <small>${escapeHtml(message.receiptId)}</small>
          </div>
          ${message.text ? `<p>${escapeHtml(message.text)}</p>` : ""}
          <div class="receipt-status-meta">
            <span>${escapeHtml(options.label || "Admin")}</span>
            <span>${new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderPrivateMessageMedia(message) {
  const media = message.media;
  if (!media?.url) return "";
  return `
    <figure class="private-chat-media-card">
      <img src="${escapeHtml(media.url)}" alt="${escapeHtml(media.name || "Private chat photo")}" loading="lazy" />
      ${media.name ? `<figcaption>${escapeHtml(media.name)}</figcaption>` : ""}
    </figure>
  `;
}

function getAdminSendModeLabel(mode) {
  if (mode === "group") return "Public group chat";
  if (mode === "note") return "Hidden admin-only note";
  return "Private to selected user";
}

function getAdminPrivatePlaceholder(mode, memberLabel) {
  const actingAs = getAdminActingAs();
  if (mode === "group") return actingAs ? `Send to everyone as ${actingAs}` : "Send to everyone in group chat as Admin";
  if (mode === "note") return memberLabel ? `Hidden admin note about ${memberLabel}` : "Select a user for hidden admin note";
  return memberLabel ? `Send only to ${memberLabel} as Admin` : "Select a user";
}

function renderPinnedSystemMessage() {
  const pinned = [...state.chat].reverse().find((message) => message.system && message.type !== "receipt" && message.pinned !== false);
  if (!pinned || state.chatMode === "admin") {
    els.pinnedSystemMessage.hidden = true;
    els.pinnedSystemMessage.textContent = "";
    return;
  }

  els.pinnedSystemMessage.hidden = false;
  els.pinnedSystemMessage.innerHTML = `
    <span>Pinned</span>
    <strong>${escapeHtml(pinned.text)}</strong>
  `;
}

function getMentionInboxItems() {
  const identity = getChatIdentity();
  const myCode = getMentionCode(identity);
  const myMessageIds = new Set(state.chat.filter((message) => message.author === identity).map((message) => message.id));
  return state.chat
    .filter((message) => canCurrentViewerSeeGroupMessage(message))
    .filter((message) => !message.system && message.author !== identity)
    .filter((message) => {
      const textMentionsMe = String(message.text || "").toUpperCase().includes(myCode);
      const repliesToMe = message.replyToId && myMessageIds.has(message.replyToId);
      return textMentionsMe || repliesToMe;
    })
    .slice(-12)
    .reverse();
}

function getUnreadMentionItems() {
  const readIds = new Set(state.readMentionIds || []);
  return getMentionInboxItems().filter((message) => !readIds.has(message.id));
}

function markMentionsRead(messages = getMentionInboxItems()) {
  const mentionIds = messages.map((message) => message.id).filter(Boolean);
  if (!mentionIds.length) return;
  const readIds = new Set(state.readMentionIds || []);
  const previousSize = readIds.size;
  mentionIds.forEach((id) => readIds.add(id));
  state.readMentionIds = [...readIds].slice(-200);
  if (state.readMentionIds.length !== previousSize) saveUserState();
}

function renderMentionInbox() {
  const mentions = getMentionInboxItems();
  const unreadMentions = getUnreadMentionItems();
  els.mentionCount.textContent = unreadMentions.length;
  els.mentionInbox.hidden = state.chatMode === "admin" || !state.mentionInboxOpen;
  els.mentionInboxBtn.classList.toggle("active", state.mentionInboxOpen);
  els.mentionInboxBtn.classList.toggle("unread", unreadMentions.length > 0);
  if (state.chatMode === "admin" || !state.mentionInboxOpen) {
    els.mentionInbox.innerHTML = "";
    return;
  }

  markMentionsRead(mentions);
  els.mentionCount.textContent = "0";
  els.mentionInboxBtn.classList.remove("unread");
  els.mentionInbox.innerHTML = mentions.length
    ? mentions
        .map(
          (message) => `
            <button type="button" data-jump-reply="${message.id}">
              <span>${message.replyToId ? "Reply" : "Mention"} from ${escapeHtml(message.author)}</span>
              <strong>${escapeHtml(message.text || "Media or receipt message")}</strong>
            </button>
          `,
        )
        .join("")
    : `<div>No mentions yet. Your code is ${getMentionCode(getChatIdentity())}.</div>`;
}

function renderReactionPicker(message) {
  const activeReaction = message.userReactions?.[getChatIdentity()] || "";
  return `
    <div class="reaction-picker" aria-label="Choose a reaction">
      ${reactionTypes
        .map(
          (reaction) => `
            <button class="${activeReaction === reaction.key ? "active" : ""}" type="button" data-react="${message.id}" data-reaction="${reaction.key}" title="${activeReaction === reaction.key ? `Remove ${reaction.label}` : reaction.label}" aria-label="${activeReaction === reaction.key ? `Remove ${reaction.label}` : reaction.label}">
              <span>${reaction.emoji}</span>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderReactionSummary(message) {
  const reactions = reactionTypes.filter((reaction) => (message.reactions?.[reaction.key] || 0) > 0);
  if (!reactions.length) return "";

  return `
    <div class="reaction-summary" aria-label="Message reactions">
      ${reactions
        .map(
          (reaction) => `
            <span title="${reaction.label}">
              ${reaction.emoji}
              <b>${message.reactions[reaction.key]}</b>
            </span>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMessageContent(message) {
  if (message.type === "media" && message.media) {
    const media = message.media;
    const isVideo = media.type === "video" || media.contentType?.startsWith("video/");
    return `
      <strong>${highlightSearch(getMessageDisplayAuthor(message))}</strong>
      ${message.text ? `<p>${highlightSearch(message.text)}</p>` : ""}
      <figure class="chat-media-card">
        ${
          isVideo
            ? `<video src="${escapeHtml(media.url)}" controls playsinline></video>`
            : `<img src="${escapeHtml(media.url)}" alt="${escapeHtml(media.name || "Chat media")}" loading="lazy" />`
        }
        <figcaption>${escapeHtml(media.name || "Media attachment")}</figcaption>
      </figure>
    `;
  }

  if (message.type === "receipt" && message.receipt) {
    const receipt = message.receipt;
    const actor = receipt.handle || message.author || "Anonymous buyer";
    const receiptItems = receipt.items?.length
      ? receipt.items
      : [{ name: `${receipt.itemCount || 1} item${receipt.itemCount === 1 ? "" : "s"}`, qty: receipt.units || 1, paidUnit: receipt.total || 0 }];

    return `
      <div class="chat-receipt-card">
        <div class="receipt-card-head">
          <span>${highlightSearch(actor)} posted a GCash receipt</span>
          <strong>#${highlightSearch(receipt.id)}</strong>
        </div>
        <div class="receipt-screenshot" aria-label="Receipt screenshot">
          <div class="receipt-screenshot-top">
            <strong>DETI</strong>
            <span>${new Date(receipt.createdAt || message.createdAt).toLocaleString([], {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}</span>
          </div>
          <div class="receipt-screenshot-meta">
            <span>Anonymous handle</span>
            <b>${highlightSearch(receipt.handle)}</b>
          </div>
          ${
            receipt.paymentReceipt?.src
              ? `
                <figure class="payment-receipt-shot">
                  <img src="${receipt.paymentReceipt.src}" alt="Uploaded payment receipt" />
                  <figcaption>${escapeHtml(receipt.paymentReceipt.name || "Payment receipt photo")}</figcaption>
                </figure>
              `
              : ""
          }
          <div class="receipt-screenshot-lines">
            ${receiptItems
              .map(
                (item) => `
                  <div>
                    <span>${highlightSearch(item.name)} x${item.qty}</span>
                    <b>${item.preorder ? "Preorder paid" : formatMoney(item.paidUnit * item.qty)}</b>
                  </div>
                  ${item.preorder ? `<small>${escapeHtml(getBulkBuyLabel(item))} / ${escapeHtml(getAvailabilityLabel(item))}</small>` : ""}
                `,
              )
              .join("")}
          </div>
          <div class="receipt-screenshot-total">
            <span>GCash total paid</span>
            <strong>${formatMoney(receipt.total)}</strong>
          </div>
          <div class="receipt-screenshot-status">
            <span>Status</span>
            <strong>${getReceiptStatusLabel(receipt.status)}</strong>
          </div>
          <p>Auto-refund eligible when the group discount drops tiers.</p>
        </div>
      </div>
    `;
  }

  return `
    <strong>${highlightSearch(getMessageDisplayAuthor(message))}</strong>
    ${message.author === "admin" && !message.adminActingAs ? `<span class="admin-badge">Admin</span>` : ""}
    ${message.author === systemProfileAuthor ? `<span class="system-badge">System</span>` : ""}
    <p>${highlightSearch(message.text)}</p>
  `;
}

function getMessageDisplayAuthor(message) {
  return message.adminActingAs || message.author;
}

function getMessageSearchText(message) {
  return [
    message.author,
    message.adminActingAs,
    message.text,
    message.receipt?.id,
    message.receipt?.handle,
    message.media?.name,
    ...(message.receipt?.items || []).map((item) => item.name),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function highlightSearch(value) {
  const escapedValue = escapeHtml(String(value));
  const query = chatSearchQuery.trim();
  if (!query) return escapedValue;

  const escapedQuery = escapeRegExp(query);
  return escapedValue.replace(new RegExp(`(${escapedQuery})`, "gi"), '<mark class="chat-search-hit">$1</mark>');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderReplyQuote(replyToId) {
  const snippet = replyToId ? getReplySnippet(replyToId) : null;
  if (!snippet) return "";
  return `
    <button class="reply-quote" type="button" data-jump-reply="${replyToId}" title="Go to replied message">
      <span>${escapeHtml(snippet.author)}</span>
      <p>${escapeHtml(snippet.text)}</p>
    </button>
  `;
}

function renderReplyComposer() {
  const snippet = state.replyToId ? getReplySnippet(state.replyToId) : null;
  if (!snippet) {
    els.replyPreview.classList.remove("show");
    els.replyText.textContent = "";
    return;
  }

  els.replyPreview.classList.add("show");
  els.replyText.textContent = `Replying to ${snippet.author}: ${snippet.text}`;
}

function renderCommunityState() {
  const identityLabel = getChatIdentityLabel();
  els.anonHandle.textContent = identityLabel || "Guest";
  if (!chatSearchQuery.trim()) {
    els.chatSearchStatus.textContent = getGroupStatusText();
  }
  const moderation = getCurrentMemberModeration();
  const restricted = Boolean(moderation) && !isAdmin();
  const blocked = moderation?.type === "blocked" && !isAdmin();
  const canUseComposer = state.joinedCommunity || hasAdminCredentials();
  els.blockedNotice.hidden = !blocked;
  if (blocked) {
    els.blockedNoticeTitle.textContent = "Account blocked";
    els.blockedNoticeText.textContent =
      "This account is blocked. Create a replacement account to continue.";
  }
  els.chatInput.disabled = !canUseComposer || restricted;
  els.sendButton.disabled = !canUseComposer || restricted;
  els.chatMediaBtn.disabled = !canUseComposer || restricted;
  els.chatInput.placeholder = restricted
    ? "Account restricted"
    : canUseComposer && getAdminActingAs()
    ? `Message the group as ${getAdminActingAs()}`
    : canUseComposer
    ? "Message the group"
    : "Join community to chat";
  els.signinBtn.hidden = state.joinedCommunity;
  els.joinCommunityBtn.textContent = state.joinedCommunity ? "Joined" : "Join Community";
  els.joinCommunityBtn.disabled = state.joinedCommunity;
  els.joinCommunityBtn.hidden = state.joinedCommunity;
  els.signoutBtn.hidden = !state.joinedCommunity;
  els.adminPanel.hidden = !isAdmin();
}

function renderAdminPanel() {
  const admin = isAdmin();
  const actingAs = getAdminActingAs();
  els.adminStatus.textContent = admin ? (actingAs ? `Sending as ${actingAs}` : "Admin Active") : "Locked";
  els.adminBuyerControlsToggle.checked = areBuyerControlsEnabled();
  els.adminGoldenTicketToggle.checked = isGoldenTicketEnabled();
  els.adminBuyerCount.textContent = state.buyerCount;
  els.adminTransactionCount.textContent = state.transactionCount;
  els.adminReceiptCount.textContent = state.receipts.length;
  els.adminChatCount.textContent = state.chat.length;
  renderAdminProductOptions();
  renderAdminPreorderControls();
  renderAdminReceiptOptions();
  renderAdminAccountList();
  renderAdminMemberList();
  renderAdminTrollControls();
  if (document.activeElement !== els.adminGoldenDistanceInput) {
    els.adminGoldenDistanceInput.value = nextDrawDistance();
  }
  renderAdminTabs();
  els.adminPanel.querySelectorAll("input, textarea, button, select").forEach((control) => {
    control.disabled = !admin || control.dataset.adminProtected === "true";
  });
  els.adminBuyerAmountInput.disabled = !admin || !areBuyerControlsEnabled();
  els.adminPulseBtn.disabled = !admin || !areBuyerControlsEnabled();
  els.adminAddBuyersBtn.disabled = !admin || !areBuyerControlsEnabled();
  els.adminSetBuyersBtn.disabled = !admin || !areBuyerControlsEnabled();
  els.adminGoldenDistanceInput.disabled = !admin || !isGoldenTicketEnabled();
  els.adminSetGoldenBtn.disabled = !admin || !isGoldenTicketEnabled();
  els.adminRunGoldenBtn.disabled = !admin || !isGoldenTicketEnabled();
  els.adminTrollMaxParallelInput.disabled = !admin || !getTrollControls().enabled;
  els.adminTrollRoundRobinToggle.disabled = !admin || !getTrollControls().enabled;
  els.adminSaveTrollRuleBtn.disabled = !admin || !getTrollControls().enabled || !els.adminTrollAccountSelect.value;
  els.adminDeleteTrollRuleBtn.disabled = !admin || !getSelectedTrollRule();
  els.adminSaveTrollStatsBtn.disabled = !admin;
}

function renderAdminTabs() {
  els.adminTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.adminTab === state.adminTab);
  });
  els.adminPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.adminPanel === state.adminTab);
  });
}

function renderAdminProductOptions() {
  const selectedId = els.adminProductSelect.value;
  const selectedCategory = els.adminProductCategorySelect.value;
  const products = getProducts();
  els.adminProductSelect.innerHTML = `
    <option value="">New product</option>
    ${products
      .map((product) => `<option value="${escapeHtml(product.id)}">${escapeHtml(product.name)}</option>`)
      .join("")}
  `;
  if (products.some((product) => product.id === selectedId)) {
    els.adminProductSelect.value = selectedId;
  }
  els.adminProductCategorySelect.innerHTML = getStoreCategories(getProducts(), state.productCategories)
    .filter((category) => category !== "All")
    .map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
    .join("");
  if (getStoreCategories(getProducts(), state.productCategories).includes(selectedCategory)) {
    els.adminProductCategorySelect.value = selectedCategory;
  } else if (!els.adminProductCategorySelect.value && els.adminProductCategorySelect.options.length) {
    els.adminProductCategorySelect.selectedIndex = 0;
  }
  renderAdminCategoryList();
  renderAdminProductList(products);
}

function renderAdminCategoryList() {
  if (!els.adminCategoryList) return;
  const categories = getStoreCategories(getProducts(), state.productCategories).filter((category) => category !== "All");
  els.adminCategoryList.innerHTML = categories.length
    ? categories
        .map(
          (category) => `
            <article>
              <span>${escapeHtml(category)}</span>
              <button class="ghost-button" type="button" data-remove-category="${escapeHtml(category)}">Remove</button>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-store">No categories.</div>`;
}

function renderAdminProductList(products = getProducts()) {
  if (!els.adminProductList) return;
  els.adminProductList.innerHTML = `
    <div class="admin-list-head">
      <strong>Existing products</strong>
      <span>${products.length} total</span>
    </div>
    ${
      products.length
        ? products
            .map((product) => {
              const saleActive = isProductSaleActive(product);
              const adminMode = product.stock > 0 ? "stock" : product.preorderEnabled ? "preorder" : "stock";
              const wholesaleSummary = getWholesaleSummary(product, null, adminMode);
              const variantSummary = getProductVariants(product).length ? ` / ${getProductVariants(product).length} size${getProductVariants(product).length === 1 ? "" : "s"}` : "";
              return `
                <article class="admin-product-row ${product.featured ? "featured-admin-product" : ""}">
                  <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
                  <div>
                    <strong>${escapeHtml(product.name)}</strong>
            <span>${escapeHtml(product.category)} / ${escapeHtml(product.type)} / ${
              product.preorderEnabled ? "preorder" : product.stock <= 0 ? "out of stock" : `${product.stock} stock`
            }</span>
                    <small>${
                      product.preorderEnabled
                        ? `Order ${product.sortOrder}${product.featured ? " / highlighted" : ""} / ${formatMoney(getProductDisplayPrice(product))}${variantSummary} / ${escapeHtml(getBulkBuyLabel(product))} / ${escapeHtml(getAvailabilityLabel(product))}`
                        : `Order ${product.sortOrder}${product.featured ? " / highlighted" : ""} / ${formatMoney(getProductDisplayPrice(product))}${variantSummary}${saleActive ? ` sale${product.saleEndsAt ? `, ${getSaleTimeLeft(product)}` : ""}` : ""}${wholesaleSummary ? ` / ${escapeHtml(wholesaleSummary)}` : ""}`
                    }</small>
                  </div>
                  <div class="admin-row-actions">
                    <button class="ghost-button" type="button" data-move-product="${escapeHtml(product.id)}" data-direction="up">Up</button>
                    <button class="ghost-button" type="button" data-move-product="${escapeHtml(product.id)}" data-direction="down">Down</button>
                    <button class="ghost-button" type="button" data-edit-product="${escapeHtml(product.id)}">Edit</button>
                    <button class="ghost-button" type="button" data-remove-product="${escapeHtml(product.id)}">Delete</button>
                  </div>
                </article>
              `;
            })
            .join("")
        : `<div class="empty-store">No products yet.</div>`
    }
  `;
}

function renderAdminPreorderControls() {
  if (!els.adminPreorderProductSelect) return;
  const products = getProducts();
  const selectedId = products.some((product) => product.id === els.adminPreorderProductSelect.value)
    ? els.adminPreorderProductSelect.value
    : products[0]?.id || "";

  els.adminPreorderProductSelect.innerHTML = products.length
    ? products.map((product) => `<option value="${escapeHtml(product.id)}">${escapeHtml(product.name)}</option>`).join("")
    : `<option value="">No products</option>`;
  els.adminPreorderProductSelect.value = selectedId;
  loadAdminPreorderForm(selectedId, { renderList: false });

  const preorderProducts = products.filter((product) => product.preorderEnabled);
  els.adminPreorderProductList.innerHTML = `
    <div class="admin-list-head">
      <strong>Open preorder products</strong>
      <span>${preorderProducts.length} open</span>
    </div>
    ${
      preorderProducts.length
        ? preorderProducts
            .map(
              (product) => `
                <article class="admin-product-row">
                  <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
                  <div>
                    <strong>${escapeHtml(product.name)}</strong>
                    <span>${product.stock <= 0 ? "Out of stock / preorder shown" : `${product.stock} stock / preorder open`}</span>
                    <small>${formatMoney(getPreorderPrice(product))}${product.originalPrice > getPreorderPrice(product) ? ` from ${formatMoney(product.originalPrice)}` : ""} / ${escapeHtml(getPreorderCountdown(product))} / ${escapeHtml(getPreorderStockLabel(product))}</small>
                  </div>
                  <div class="admin-row-actions">
                    <button class="ghost-button" type="button" data-edit-preorder="${escapeHtml(product.id)}">Control</button>
                  </div>
                </article>
              `,
            )
            .join("")
        : `<div class="empty-store">No preorder products are open.</div>`
    }
  `;
}

function loadAdminPreorderForm(productId, options = {}) {
  if (!els.adminPreorderProductSelect) return;
  const product = getProducts().find((item) => item.id === productId);
  if (!product) {
    els.adminPreorderEnabledInput.checked = false;
    els.adminPreorderOutOfStockInput.checked = false;
    els.adminPreorderPriceInput.value = "0";
    els.adminPreorderStockInput.value = "0";
    els.adminPreorderWholesaleInput.value = "";
    els.adminPreorderEndsAtInput.value = "";
    els.adminPreorderBulkBuyAtInput.value = "";
    els.adminPreorderBulkBuyRepeatTimeInput.value = "";
    setSelectedWeekdays("preorderBulkBuyRepeat", []);
    els.adminPreorderAvailableAtInput.value = "";
    return;
  }

  els.adminPreorderProductSelect.value = product.id;
  els.adminPreorderEnabledInput.checked = product.preorderEnabled;
  els.adminPreorderOutOfStockInput.checked = product.stock <= 0;
  els.adminPreorderPriceInput.value = product.preorderPrice || "";
  els.adminPreorderStockInput.value = product.preorderStock || "";
  els.adminPreorderWholesaleInput.value = formatWholesaleTiers(product.preorderWholesaleTiers);
  els.adminPreorderEndsAtInput.value = formatDateTimeLocal(product.preorderEndsAt);
  els.adminPreorderBulkBuyAtInput.value = formatDateTimeLocal(product.bulkBuyAt);
  els.adminPreorderBulkBuyRepeatTimeInput.value = product.bulkBuyRepeatTime || "";
  setSelectedWeekdays("preorderBulkBuyRepeat", product.bulkBuyRepeatDays);
  els.adminPreorderAvailableAtInput.value = formatDateTimeLocal(product.availableAt);
  if (options.renderList !== false) renderAdminPreorderControls();
}

async function saveAdminPreorderSettings({ close = false } = {}) {
  if (!requireAdmin()) return;
  const productId = els.adminPreorderProductSelect.value;
  if (!productId) return;
  const product = getProducts().find((item) => item.id === productId);
  if (!product) return;

  const enabled = close ? false : els.adminPreorderEnabledInput.checked;
  const outOfStock = close ? product.stock <= 0 : els.adminPreorderOutOfStockInput.checked;
  const preorderPrice = close ? 0 : getAdminNumber(els.adminPreorderPriceInput, 0, 0, 999999);
  const preorderStock = close ? 0 : getAdminNumber(els.adminPreorderStockInput, 0, 0, 9999);
  const preorderWholesaleTiers = close ? product.preorderWholesaleTiers || [] : parseWholesaleTiers(els.adminPreorderWholesaleInput.value, preorderPrice || product.originalPrice);
  const preorderEndsAt = close ? null : parseDateTimeLocal(els.adminPreorderEndsAtInput.value);
  const bulkBuyAt = close ? null : parseDateTimeLocal(els.adminPreorderBulkBuyAtInput.value);
  const bulkBuyRepeatDays = close ? [] : getSelectedWeekdays("preorderBulkBuyRepeat");
  const bulkBuyRepeatTime = close ? "" : normalizeTimeValue(els.adminPreorderBulkBuyRepeatTimeInput.value);
  const availableAt = close ? null : parseDateTimeLocal(els.adminPreorderAvailableAtInput.value);
  await pullCommunityState();
  const currentProduct = getProducts().find((item) => item.id === productId) || product;
  const updatedProduct = normalizeProduct({
    ...currentProduct,
    stock: outOfStock ? 0 : currentProduct.stock,
    preorderEnabled: enabled,
    preorderPrice,
    preorderStock,
    preorderWholesaleTiers,
    preorderEndsAt,
    bulkBuyAt,
    bulkBuyRepeatDays,
    bulkBuyRepeatTime,
    availableAt,
    updatedAt: Date.now(),
  });

  state.products = getProducts().map((item) => (item.id === productId ? updatedProduct : item));
  addChat("System", `Admin ${enabled ? "updated" : "closed"} preorder for ${updatedProduct.name}.`, true, {
    announcementTitle: enabled ? "Preorder updated" : "Preorder closed",
  });
  await saveCommunityState();
  render();
}

function renderAdminReceiptOptions() {
  if (!els.adminReceiptStatusTabs || !els.adminReceiptList) return;
  const statuses = [...receiptStatusOptions, { key: "all", label: "All" }];
  const activeStatus = state.adminReceiptStatusTab || "pending";
  const pageSize = 8;
  const searchTerm = state.adminReceiptSearch.trim().toLowerCase();
  const countByStatus = statuses.reduce((counts, status) => {
    counts[status.key] =
      status.key === "all" ? state.receipts.length : state.receipts.filter((receipt) => normalizeReceiptStatus(receipt.status) === status.key).length;
    return counts;
  }, {});

  els.adminReceiptStatusTabs.innerHTML = statuses
    .map(
      (status) => `
        <button class="${activeStatus === status.key ? "active" : ""}" type="button" data-admin-receipt-status="${status.key}" aria-pressed="${activeStatus === status.key}">
          ${status.label} <span>${countByStatus[status.key]}</span>
        </button>
      `,
    )
    .join("");

  if (document.activeElement !== els.adminReceiptSearchInput) {
    els.adminReceiptSearchInput.value = state.adminReceiptSearch;
  }

  const filteredReceipts = (activeStatus === "all" ? state.receipts : state.receipts.filter((receipt) => normalizeReceiptStatus(receipt.status) === activeStatus)).filter(
    (receipt) =>
      !searchTerm ||
      [receipt.id, receipt.handle, getReceiptStatusLabel(receipt.status), ...(receipt.items || []).map((item) => item.name)]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm),
  );
  const totalPages = Math.max(1, Math.ceil(filteredReceipts.length / pageSize));
  state.adminReceiptPage = Math.min(Math.max(1, state.adminReceiptPage), totalPages);
  const visibleReceipts = filteredReceipts.slice((state.adminReceiptPage - 1) * pageSize, state.adminReceiptPage * pageSize);

  els.adminReceiptList.innerHTML = visibleReceipts.length
    ? visibleReceipts
        .map((receipt) => {
          const status = normalizeReceiptStatus(receipt.status);
          const total = formatMoney(getReceiptPaidTotal(receipt) - receipt.refunded);
          return `
            <article class="admin-receipt-row ${status}">
              <div>
                <strong>${escapeHtml(receipt.id)}</strong>
                <span>${escapeHtml(receipt.handle)} / ${getReceiptUnits(receipt)} unit${getReceiptUnits(receipt) === 1 ? "" : "s"} / ${total}</span>
                <small>${getReceiptStatusLabel(status)}${receipt.paymentReceipt ? " / receipt attached" : ""}</small>
              </div>
              <div class="admin-row-actions">
                ${renderReceiptStatusButtons(receipt.id, status) || `<span>No further actions</span>`}
              </div>
            </article>
          `;
        })
        .join("")
    : `<div class="empty-store">No ${activeStatus === "all" ? "" : `${activeStatus} `}receipts.</div>`;

  els.adminReceiptPagination.innerHTML = `
    <button class="ghost-button" type="button" data-receipt-page="prev" ${state.adminReceiptPage <= 1 ? "disabled" : ""}>Prev</button>
    <span>Page ${state.adminReceiptPage} of ${totalPages} / ${filteredReceipts.length} orders</span>
    <button class="ghost-button" type="button" data-receipt-page="next" ${state.adminReceiptPage >= totalPages ? "disabled" : ""}>Next</button>
  `;
}

function renderAdminAccountList() {
  if (!els.adminAccountList) return;
  const accounts = Object.values(loadAccounts()).sort((a, b) => a.username.localeCompare(b.username));
  const actingAs = getAdminActingAs();
  const trollAccounts = new Set(getTrollControls().trollAccounts || []);
  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(accounts.length / pageSize));
  state.adminAccountPage = Math.min(Math.max(1, state.adminAccountPage), totalPages);
  const visibleAccounts = accounts.slice((state.adminAccountPage - 1) * pageSize, state.adminAccountPage * pageSize);
  els.adminAccountList.innerHTML = `
    <div class="admin-list-head">
      <strong>Available accounts</strong>
      <span>${actingAs ? `Admin as ${escapeHtml(actingAs)}` : `${accounts.length} total`}</span>
    </div>
    ${
      accounts.length
        ? visibleAccounts
            .map(
              (account) => `
                <article class="admin-account-row ${actingAs === account.username ? "active" : ""} ${trollAccounts.has(account.username) ? "troll-account" : ""}">
                  <div>
                    <strong>${escapeHtml(account.username)}</strong>
                    <span>${actingAs === account.username ? "Current admin acting identity" : "Available for admin acting mode"}${trollAccounts.has(account.username) ? " / troll account" : ""}</span>
                  </div>
                  <div class="admin-row-actions">
                    <button class="ghost-button" type="button" data-switch-identity="${escapeHtml(account.username)}">Act As</button>
                    <button class="ghost-button" type="button" data-toggle-troll-account="${escapeHtml(account.username)}" ${
                account.username === "admin" ? 'data-admin-protected="true" disabled' : ""
              }>${trollAccounts.has(account.username) ? "Remove Troll" : "Mark Troll"}</button>
                    <button class="ghost-button" type="button" data-delete-account="${escapeHtml(account.username)}">Delete</button>
                  </div>
                </article>
              `,
            )
            .join("")
        : `<div class="empty-store">No quick accounts yet.</div>`
    }
    <div class="admin-pagination">
      <button class="ghost-button" type="button" data-account-page="prev" ${state.adminAccountPage <= 1 ? "disabled" : ""}>Prev</button>
      <span>Page ${state.adminAccountPage} of ${totalPages}</span>
      <button class="ghost-button" type="button" data-account-page="next" ${state.adminAccountPage >= totalPages ? "disabled" : ""}>Next</button>
    </div>
  `;
}

function renderAdminMemberList() {
  if (!els.adminMemberList) return;
  const actingAs = getAdminActingAs();
  const mergedMembers = { ...(state.members || {}) };
  Object.keys(loadAccounts()).forEach((username) => {
    mergedMembers[username] = mergedMembers[username] || { handle: username, username, joinedAt: 0, lastSeen: 0 };
  });
  state.chat.forEach((message) => {
    const memberId = message.type === "receipt" ? message.receipt?.handle || message.author : message.adminActingAs || message.author;
    if (!memberId || memberId === "admin" || memberId === "System" || memberId === systemProfileAuthor) return;
    mergedMembers[memberId] = mergedMembers[memberId] || { handle: memberId, username: memberId, joinedAt: message.createdAt || 0, lastSeen: 0 };
  });
  const members = Object.entries(mergedMembers).sort(([a], [b]) => a.localeCompare(b));
  els.adminMemberList.innerHTML = `
    <div class="admin-list-head">
      <strong>Member moderation</strong>
      <span>${members.length} members</span>
    </div>
    ${
      members.length
        ? members
            .map(([memberId, member]) => {
              const moderation = getMemberModeration(memberId);
              const protectedMember = memberId === "admin" || memberId === getActiveMemberId();
              const label =
                moderation?.type === "blocked"
                  ? "Blocked"
                  : moderation?.type === "timeout"
                  ? `Timed out until ${new Date(moderation.record.until).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
                  : "Allowed";
              return `
                <article class="admin-account-row ${moderation ? "restricted" : ""} ${actingAs === memberId ? "active" : ""}">
                  <div>
                    <strong>${escapeHtml(member.handle || memberId)}</strong>
                    <span>${actingAs === memberId ? "Admin acting identity" : escapeHtml(label)} / last seen ${
                member.lastSeen ? new Date(member.lastSeen).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "unknown"
              }</span>
                  </div>
                  <div class="admin-row-actions">
                    <button class="ghost-button" type="button" data-switch-identity="${escapeHtml(memberId)}" ${
                memberId === "admin" ? 'data-admin-protected="true" disabled' : ""
              }>Act As</button>
                    <button class="ghost-button" type="button" data-direct-message="${escapeHtml(memberId)}" ${
                memberId === "admin" ? 'data-admin-protected="true" disabled' : ""
              }>Message</button>
                    <button class="ghost-button" type="button" data-timeout-member="${escapeHtml(memberId)}" ${
                protectedMember ? 'data-admin-protected="true" disabled' : ""
              }>Timeout</button>
                    <button class="ghost-button" type="button" data-block-member="${escapeHtml(memberId)}" ${
                protectedMember ? 'data-admin-protected="true" disabled' : ""
              }>Block</button>
                    <button class="ghost-button" type="button" data-unblock-member="${escapeHtml(memberId)}" ${
                protectedMember ? 'data-admin-protected="true" disabled' : ""
              }>Allow</button>
                  </div>
                </article>
              `;
            })
            .join("")
        : `<div class="empty-store">No members tracked yet.</div>`
    }
    ${renderReplacementSignals()}
  `;
}

function getTrollControls() {
  state.trollControls = normalizeTrollControls(state.trollControls);
  return state.trollControls;
}

function getTrollAccountOptions() {
  const controls = getTrollControls();
  const ids = new Set(controls.trollAccounts || []);
  Object.entries(state.members || {}).forEach(([memberId, member]) => {
    if (member?.automated) ids.add(memberId);
  });
  controls.rules.forEach((rule) => {
    if (rule.account) ids.add(rule.account);
  });
  ids.delete("admin");
  ids.delete("System");
  ids.delete(systemProfileAuthor);
  return [...ids].filter(Boolean).sort((a, b) => a.localeCompare(b));
}

function getSelectedTrollRule() {
  const controls = getTrollControls();
  return controls.rules.find((rule) => rule.id === controls.selectedRuleId) || null;
}

function renderAdminTrollControls() {
  if (!els.adminTrollRuleList) return;
  const controls = getTrollControls();
  const selectedRule = getSelectedTrollRule();
  const accountOptions = getTrollAccountOptions();
  const selectedAccount = selectedRule?.account || els.adminTrollAccountSelect.value || accountOptions[0] || "";
  const realStats = getRealGroupPresenceStats();
  const adjustedStats = getAdjustedGroupPresenceStats(realStats);

  els.adminTrollAutomationToggle.checked = controls.enabled;
  els.adminTrollRoundRobinToggle.checked = controls.roundRobin;
  if (document.activeElement !== els.adminTrollMaxParallelInput) els.adminTrollMaxParallelInput.value = controls.maxParallel;
  els.adminTrollAccountSelect.innerHTML = accountOptions.length
    ? accountOptions.map((account) => `<option value="${escapeHtml(account)}">${escapeHtml(account)}</option>`).join("")
    : `<option value="">Mark an account as troll first</option>`;
  els.adminTrollAccountSelect.value = accountOptions.includes(selectedAccount) ? selectedAccount : accountOptions[0] || "";
  els.adminTrollTriggerSelect.value = selectedRule?.trigger || "visit";
  els.adminTrollActionSelect.value = selectedRule?.action || "group-message";
  if (document.activeElement !== els.adminTrollReceiptUnitsInput) els.adminTrollReceiptUnitsInput.value = selectedRule?.receiptUnits || 1;
  const products = getProducts();
  const selectedProductId = selectedRule?.productId || products[0]?.id || "";
  els.adminTrollProductSelect.innerHTML = products.length
    ? products.map((product) => `<option value="${escapeHtml(product.id)}">${escapeHtml(product.name)}</option>`).join("")
    : `<option value="">No products available</option>`;
  els.adminTrollProductSelect.value = products.some((product) => product.id === selectedProductId) ? selectedProductId : products[0]?.id || "";
  if (document.activeElement !== els.adminTrollDelaySecondsInput) els.adminTrollDelaySecondsInput.value = selectedRule?.delaySeconds || 0;
  if (document.activeElement !== els.adminTrollDelayJitterInput) els.adminTrollDelayJitterInput.value = selectedRule?.delayJitterSeconds || 0;
  if (document.activeElement !== els.adminTrollMessageInput) {
    els.adminTrollMessageInput.value = selectedRule?.message || "New order posted. Thanks admin.";
  }
  if (document.activeElement !== els.adminTrollPhotoInput) els.adminTrollPhotoInput.value = "";
  if (document.activeElement !== els.adminTrollReceiptImageInput) els.adminTrollReceiptImageInput.value = "";
  els.adminTrollUploadSummary.innerHTML = renderTrollUploadSummary(selectedRule);
  els.adminDeleteTrollRuleBtn.disabled = !isAdmin() || !selectedRule;

  els.adminTrollMemberStatsToggle.checked = controls.memberStatsEnabled;
  if (document.activeElement !== els.adminTrollActiveMultiplierInput) els.adminTrollActiveMultiplierInput.value = controls.activeMultiplier;
  if (document.activeElement !== els.adminTrollTotalMultiplierInput) els.adminTrollTotalMultiplierInput.value = controls.totalMultiplier;
  if (document.activeElement !== els.adminTrollInactiveMembersInput) els.adminTrollInactiveMembersInput.value = controls.inactiveMembers;
  els.adminTrollMemberStatsPreview.innerHTML = `
    <article>
      <span>Real active</span>
      <strong>${realStats.active}</strong>
    </article>
    <article>
      <span>Shown active</span>
      <strong>${adjustedStats.active}</strong>
    </article>
    <article>
      <span>Shown total</span>
      <strong>${adjustedStats.members}</strong>
    </article>
  `;

  els.adminTrollRuleList.innerHTML = `
    <div class="admin-list-head">
      <strong>Automation rules</strong>
      <span>${controls.rules.filter((rule) => rule.enabled).length} active / ${controls.rules.length} total</span>
    </div>
    ${
      controls.rules.length
        ? controls.rules
            .map((rule) => {
              const triggerLabel = trollTriggerOptions.find((option) => option.key === rule.trigger)?.label || rule.trigger;
              const actionLabel = trollActionOptions.find((option) => option.key === rule.action)?.label || rule.action;
              const productLabel = getProducts().find((product) => product.id === rule.productId)?.name || "";
              const delayLabel = rule.delaySeconds || rule.delayJitterSeconds ? ` / ${rule.delaySeconds || 0}s delay${rule.delayJitterSeconds ? ` +${rule.delayJitterSeconds}s random` : ""}` : "";
              const assetLabel = [rule.photo ? "photo" : "", rule.receiptImage ? "receipt image" : ""].filter(Boolean).join(", ");
              return `
                <article class="admin-account-row ${controls.selectedRuleId === rule.id ? "active" : ""} ${rule.enabled ? "" : "restricted"}">
                  <div>
                    <strong>${escapeHtml(rule.account)}</strong>
                    <span>${escapeHtml(triggerLabel)} / ${escapeHtml(actionLabel)}${productLabel ? ` / ${escapeHtml(productLabel)}` : ""}${assetLabel ? ` / ${escapeHtml(assetLabel)}` : ""}${escapeHtml(delayLabel)} / ${rule.enabled ? "enabled" : "paused"}</span>
                  </div>
                  <div class="admin-row-actions">
                    <button class="ghost-button" type="button" data-edit-troll-rule="${escapeHtml(rule.id)}">Edit</button>
                    <button class="ghost-button" type="button" data-toggle-troll-rule="${escapeHtml(rule.id)}">${rule.enabled ? "Pause" : "Enable"}</button>
                    <button class="ghost-button" type="button" data-run-troll-rule="${escapeHtml(rule.id)}">Run</button>
                  </div>
                </article>
              `;
            })
            .join("")
        : `<div class="empty-store">No automation rules yet.</div>`
    }
  `;
}

function renderTrollUploadSummary(rule) {
  const renderUpload = (key, label, upload) => `
    <div class="upload-chip">
      ${
        upload?.src
          ? `<img src="${escapeHtml(upload.src)}" alt="${escapeHtml(label)} preview" />
             <span>${escapeHtml(label)} saved: ${escapeHtml(upload.name)}</span>
             <button class="ghost-button" type="button" data-clear-troll-upload="${key}">Remove</button>`
          : `<span>No ${escapeHtml(label.toLowerCase())} saved</span>`
      }
    </div>
  `;
  return `
    ${renderUpload("photo", "Photo", rule?.photo)}
    ${renderUpload("receiptImage", "Receipt", rule?.receiptImage)}
  `;
}

function renderReplacementSignals() {
  const replacements = state.moderation?.replacements || [];
  if (!replacements.length) return "";
  const folders = buildReplacementFolders(replacements);
  return `
    <div class="admin-list-head">
      <strong>Replacement account folders</strong>
      <span>${folders.length} folders / ${replacements.length} linked</span>
    </div>
    ${folders
      .map(
        (folder) => `
          <details class="replacement-folder" ${folder.index === 0 ? "open" : ""}>
            <summary>
              <div>
                <strong>${escapeHtml(folder.root)}</strong>
                <span>Original account folder / ${escapeHtml(folder.statusLabel)}</span>
              </div>
              <div class="replacement-folder-meta">
                <span>Latest: ${escapeHtml(folder.latestAccount.name)}</span>
                <span>${folder.accounts.length} accounts</span>
              </div>
            </summary>
            <div class="replacement-account-list">
              ${folder.accounts
                .map(
                  (account) => `
                    <article class="replacement-account-row ${account.blocked ? "restricted" : ""}">
                      <div>
                        <strong>${escapeHtml(account.name)}</strong>
                        <span>${escapeHtml(account.label)} / ${escapeHtml(account.createdLabel)}</span>
                      </div>
                      ${
                        account.signalCreatedAt
                          ? `<button class="ghost-button" type="button" data-delete-replacement="${escapeHtml(String(account.signalCreatedAt))}">Delete signal</button>`
                          : ""
                      }
                    </article>
                  `,
                )
                .join("")}
            </div>
          </details>
        `,
      )
      .join("")}
  `;
}

function buildReplacementFolders(replacements) {
  const entries = replacements
    .filter((entry) => entry?.previous && entry?.next)
    .map((entry) => ({
      previous: String(entry.previous),
      next: String(entry.next),
      createdAt: Number(entry.createdAt) || 0,
    }));
  const groups = new Map();

  entries.forEach((entry) => {
    const root = getReplacementRoot(entry.previous, entries);
    const group = groups.get(root) || { root, entries: [] };
    group.entries.push(entry);
    groups.set(root, group);
  });

  return [...groups.values()]
    .map((group) => {
      const accountsByName = new Map();
      accountsByName.set(group.root, {
        name: group.root,
        createdAt: 0,
        signalCreatedAt: null,
        label: "Original account",
      });

      group.entries.forEach((entry) => {
        accountsByName.set(entry.next, {
          name: entry.next,
          createdAt: entry.createdAt,
          signalCreatedAt: entry.createdAt,
          label: entry.previous === group.root ? "Replacement account" : `Replacement from ${entry.previous}`,
        });
      });

      const accounts = [...accountsByName.values()]
        .map((account) => ({
          ...account,
          blocked: Boolean(state.moderation?.blocked?.[account.name]),
          createdLabel: account.createdAt ? new Date(account.createdAt).toLocaleString() : "first tracked account",
        }))
        .sort((a, b) => b.createdAt - a.createdAt);
      const latestAccount = accounts[0] || { name: group.root };
      const blockedCount = accounts.filter((account) => account.blocked).length;
      const statusLabel = blockedCount ? `Blocked (${blockedCount})` : "Tracked";

      return {
        ...group,
        accounts,
        latestAccount,
        statusLabel,
        latestAt: latestAccount.createdAt || 0,
      };
    })
    .sort((a, b) => b.latestAt - a.latestAt)
    .map((folder, index) => ({ ...folder, index }));
}

function getReplacementRoot(accountId, entries) {
  let root = accountId;
  const seen = new Set();
  while (root && !seen.has(root)) {
    seen.add(root);
    const parent = entries.find((entry) => entry.next === root);
    if (!parent) break;
    root = parent.previous;
  }
  return root;
}

function loadOlderChatMessages() {
  const feedMessageCount = state.chat.filter((message) => !message.system || message.type === "receipt").length;
  if (visibleChatCount >= feedMessageCount) return;
  visibleChatCount = Math.min(feedMessageCount, visibleChatCount + 20);
  renderChat({ preservePosition: true });
}

function jumpToMessage(messageId) {
  const messageIndex = state.chat.findIndex((message) => message.id === messageId);
  if (messageIndex === -1) return;

  const firstVisibleIndex = Math.max(0, state.chat.length - visibleChatCount);
  if (messageIndex < firstVisibleIndex) {
    visibleChatCount = state.chat.length - messageIndex;
    renderChat({ preservePosition: true });
  }

  window.requestAnimationFrame(() => {
    const target = [...els.chatFeed.querySelectorAll("[data-message-id]")].find((entry) => entry.dataset.messageId === messageId);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.classList.add("jump-highlight");
    window.setTimeout(() => target.classList.remove("jump-highlight"), 1400);
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function reactToMessage(messageId, reactionKey) {
  if (!requireCommunityJoin()) return;
  await pullCommunityState();
  const identity = getChatIdentity();
  state.chat = state.chat.map((message) => {
    if (message.id !== messageId) return message;
    const reactions = { ...Object.fromEntries(reactionTypes.map((reaction) => [reaction.key, 0])), ...(message.reactions || {}) };
    const userReactions = { ...(message.userReactions || {}) };
    const previousReaction = userReactions[identity];

    if (previousReaction) {
      reactions[previousReaction] = Math.max(0, (reactions[previousReaction] || 0) - 1);
    }

    if (previousReaction === reactionKey) {
      delete userReactions[identity];
    } else {
      reactions[reactionKey] = (reactions[reactionKey] || 0) + 1;
      userReactions[identity] = reactionKey;
    }

    return { ...message, reactions, userReactions };
  });
  state.openActionMenuId = null;
  state.openReactionMenuId = null;
  saveUserState();
  await saveCommunityState();
  renderChat();
}

function replyToMessage(messageId) {
  if (!requireCommunityJoin()) return;
  state.replyToId = messageId;
  state.openActionMenuId = null;
  saveUserState();
  renderReplyComposer();
  els.chatInput.focus();
}

function cancelReply() {
  state.replyToId = null;
  saveUserState();
  renderReplyComposer();
}

function setWorkspaceTab(tabName) {
  if (!["store", "discounts", "orders"].includes(tabName)) tabName = "store";
  els.tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });
  els.workspaceViews.forEach((view) => {
    view.classList.toggle("active", view.dataset.view === tabName);
  });
}

function openPreorderFromStore(productId) {
  const product = getProducts().find((item) => item.id === productId);
  if (!product?.preorderEnabled) return;
  focusedBulkBuyProductId = productId;
  setWorkspaceTab("discounts");
  renderTiers();
  window.requestAnimationFrame(() => {
    const card = document.querySelector(`[data-bulk-product="${CSS.escape(productId)}"]`);
    card?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
}

function openSharedCart() {
  setWorkspaceTab("store");
  toggleCartPopup(true);
}

function setAdminTab(tabName) {
  state.adminTab = tabName;
  saveUserState();
  renderAdminTabs();
}

function toggleCartPopup(forceOpen) {
  state.cartOpen = typeof forceOpen === "boolean" ? forceOpen : !state.cartOpen;
  saveUserState();
  renderCart();
}

function toggleMessageMenu(messageId) {
  state.openActionMenuId = state.openActionMenuId === messageId ? null : messageId;
  state.openReactionMenuId = null;
  saveUserState();
  renderChat({ preserveScrollTop: true });
}

function toggleReactionPicker(messageId) {
  if (!requireCommunityJoin()) return;
  state.openActionMenuId = messageId;
  state.openReactionMenuId = state.openReactionMenuId === messageId ? null : messageId;
  saveUserState();
  renderChat({ preserveScrollTop: true });
}

function openAuth(mode = "join") {
  authMode = mode;
  const isSignin = mode === "signin";
  const isCheckout = mode === "checkout";
  els.authModeLabel.textContent = isSignin ? "Sign In" : isCheckout ? "Checkout Account" : "Join Community";
  els.authTitle.textContent = isSignin ? "Sign in to pepfactory" : isCheckout ? "Create an account before checkout" : "Create your pepfactory account";
  els.authUsernameInput.value = state.username || state.handle;
  els.authPasswordInput.autocomplete = isSignin ? "current-password" : "new-password";
  els.authPasswordInput.value = "";
  els.authError.textContent = "";
  els.authOverlay.classList.add("show");
  els.authOverlay.setAttribute("aria-hidden", "false");
  els.authUsernameInput.focus();
}

function closeAuth() {
  pendingCheckoutAfterAuth = false;
  els.authOverlay.classList.remove("show");
  els.authOverlay.setAttribute("aria-hidden", "true");
}

function signOut() {
  state.handle = `Anon-${Math.floor(1000 + Math.random() * 9000)}`;
  state.username = "";
  state.passwordHash = "";
  state.passwordSet = false;
  state.joinedCommunity = false;
  state.replyToId = null;
  state.openActionMenuId = null;
  state.openReactionMenuId = null;
  state.mentionInboxOpen = false;
  state.cart = {};
  state.cartOpen = false;
  clearPaymentReceipt();
  saveUserState();
  closeAuth();
  render();
}

async function broadcastAdminAnnouncement(event) {
  event.preventDefault();
  if (!requireAdmin()) return;

  const title = els.adminAnnouncementTitle.value.trim() || "Admin update";
  const text = els.adminAnnouncementText.value.trim();
  if (!text) return;

  await pullCommunityState();
  addChat("System", text, true, {
    announcementTitle: title,
  });
  els.adminAnnouncementTitle.value = "";
  els.adminAnnouncementText.value = "";
  await saveCommunityState();
  render();
}

async function adminPulseBuyers() {
  if (!requireAdmin()) return;
  pulseBuyers();
}

function getAdminNumber(input, fallback, min = 0, max = 999) {
  const value = Number(input.value);
  if (!Number.isFinite(value)) return fallback;
  return Math.max(min, Math.min(max, Math.round(value)));
}

function resetTrollRuleForm() {
  const controls = getTrollControls();
  controls.selectedRuleId = "";
  const firstAccount = getTrollAccountOptions()[0] || "";
  els.adminTrollAccountSelect.value = firstAccount;
  els.adminTrollTriggerSelect.value = "visit";
  els.adminTrollActionSelect.value = "group-message";
  els.adminTrollReceiptUnitsInput.value = "1";
  els.adminTrollProductSelect.value = getProducts()[0]?.id || "";
  els.adminTrollDelaySecondsInput.value = "0";
  els.adminTrollDelayJitterInput.value = "0";
  els.adminTrollMessageInput.value = "New order posted. Thanks admin.";
  els.adminTrollPhotoInput.value = "";
  els.adminTrollReceiptImageInput.value = "";
  saveUserState();
  renderAdminTrollControls();
}

function editTrollRule(ruleId) {
  if (!requireAdmin()) return;
  const controls = getTrollControls();
  if (!controls.rules.some((rule) => rule.id === ruleId)) return;
  controls.selectedRuleId = ruleId;
  saveCommunityState();
  renderAdminTrollControls();
}

async function saveTrollRule() {
  if (!requireAdmin()) return;
  const controls = getTrollControls();
  const account = String(els.adminTrollAccountSelect.value || "").trim();
  if (!account) {
    window.alert("Create or select an account before saving an automation rule.");
    return;
  }

  const existing = getSelectedTrollRule();
  const photo = await readOptionalTrollUpload(els.adminTrollPhotoInput, existing?.photo);
  const receiptImage = await readOptionalTrollUpload(els.adminTrollReceiptImageInput, existing?.receiptImage);
  const action = els.adminTrollActionSelect.value;
  if (action === "photo-message" && !photo) {
    window.alert("Upload and save a photo before using Photo in GC.");
    return;
  }
  const nextRule = normalizeTrollRule({
    ...existing,
    id: existing?.id || `troll-rule-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    account,
    trigger: els.adminTrollTriggerSelect.value,
    action,
    receiptUnits: getAdminNumber(els.adminTrollReceiptUnitsInput, 1, 1, 20),
    productId: els.adminTrollProductSelect.value,
    delaySeconds: getAdminNumber(els.adminTrollDelaySecondsInput, 0, 0, 300),
    delayJitterSeconds: getAdminNumber(els.adminTrollDelayJitterInput, 0, 0, 300),
    message: els.adminTrollMessageInput.value.trim(),
    photo,
    receiptImage,
    enabled: existing?.enabled !== false,
    createdAt: existing?.createdAt || Date.now(),
  });

  await pullCommunityState();
  state.trollControls = getTrollControls();
  restoreDeleted("trollRuleDeletedAt", nextRule.id);
  state.trollControls.rules = state.trollControls.rules.filter((rule) => rule.id !== nextRule.id);
  state.trollControls.rules.push(nextRule);
  state.trollControls.selectedRuleId = nextRule.id;
  ensureAutomationMember(nextRule.account);
  await saveCommunityState();
  render();
}

async function clearTrollUpload(kind) {
  if (!requireAdmin()) return;
  const key = kind === "receiptImage" ? "receiptImage" : "photo";
  const selectedRule = getSelectedTrollRule();
  if (!selectedRule) {
    if (key === "photo") els.adminTrollPhotoInput.value = "";
    if (key === "receiptImage") els.adminTrollReceiptImageInput.value = "";
    return;
  }

  await pullCommunityState();
  state.trollControls = getTrollControls();
  state.trollControls.rules = state.trollControls.rules.map((rule) => (rule.id === selectedRule.id ? { ...rule, [key]: null } : rule));
  state.trollControls.selectedRuleId = selectedRule.id;
  if (key === "photo") els.adminTrollPhotoInput.value = "";
  if (key === "receiptImage") els.adminTrollReceiptImageInput.value = "";
  await saveCommunityState();
  render();
}

async function readOptionalTrollUpload(input, existingUpload = null) {
  const file = input?.files?.[0];
  if (!file) return existingUpload || null;
  if (!file.type.startsWith("image/")) {
    window.alert("Troll automation uploads must be image files.");
    return existingUpload || null;
  }
  if (file.size > 5 * 1024 * 1024) {
    window.alert("Troll automation images must be 5 MB or smaller.");
    return existingUpload || null;
  }
  return {
    name: file.name,
    type: file.type,
    src: await readFileAsDataUrl(file),
    createdAt: Date.now(),
  };
}

async function deleteTrollRule() {
  if (!requireAdmin()) return;
  const rule = getSelectedTrollRule();
  if (!rule) return;
  await pullCommunityState();
  state.trollControls = getTrollControls();
  markDeleted("trollRuleDeletedAt", rule.id);
  state.trollControls.rules = state.trollControls.rules.filter((entry) => entry.id !== rule.id);
  state.trollControls.selectedRuleId = "";
  await saveCommunityState();
  render();
}

async function toggleTrollRule(ruleId) {
  if (!requireAdmin()) return;
  await pullCommunityState();
  state.trollControls = getTrollControls();
  state.trollControls.rules = state.trollControls.rules.map((rule) => (rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule));
  state.trollControls.selectedRuleId = ruleId;
  await saveCommunityState();
  render();
}

async function toggleTrollAccount(username) {
  if (!requireAdmin() || !username || username === "admin") return;
  await pullCommunityState();
  state.trollControls = getTrollControls();
  const accounts = new Set(state.trollControls.trollAccounts || []);
  if (accounts.has(username)) {
    accounts.delete(username);
  } else {
    accounts.add(username);
    ensureAutomationMember(username);
  }
  state.trollControls.trollAccounts = [...accounts].sort((a, b) => a.localeCompare(b));
  await saveCommunityState();
  render();
}

async function saveTrollStats() {
  if (!requireAdmin()) return;
  window.clearTimeout(trollStatsSaveTimer);
  const nextStats = {
    memberStatsEnabled: els.adminTrollMemberStatsToggle.checked,
    activeMultiplier: getAdminNumber(els.adminTrollActiveMultiplierInput, 1, 1, 50),
    totalMultiplier: getAdminNumber(els.adminTrollTotalMultiplierInput, 1, 1, 50),
    inactiveMembers: getAdminNumber(els.adminTrollInactiveMembersInput, 0, 0, 9999),
  };
  state.trollControls = getTrollControls();
  Object.assign(state.trollControls, nextStats);
  await saveCommunityState();
  render();
}

function scheduleTrollStatsSave() {
  if (!requireAdmin()) return;
  window.clearTimeout(trollStatsSaveTimer);
  trollStatsSaveTimer = window.setTimeout(saveTrollStats, 450);
}

function ensureAutomationMember(account) {
  if (!account || account === "admin") return;
  state.members = state.members || {};
  const existing = state.members[account] || {};
  state.members[account] = {
    handle: existing.handle || account,
    username: existing.username || account,
    joinedAt: existing.joinedAt || Date.now(),
    lastSeen: Date.now(),
    automated: true,
  };
}

function getTrollRuleProduct(rule, context = {}) {
  return getProducts().find((product) => product.id === rule.productId) || context.product || getProducts().find((item) => item.stock > 0 || item.preorderEnabled) || getProducts()[0] || null;
}

function getTrollRuleDelayMs(rule) {
  const base = clampNumber(rule.delaySeconds, 0, 300, 0);
  const jitter = clampNumber(rule.delayJitterSeconds, 0, 300, 0);
  const randomExtra = jitter ? Math.floor(Math.random() * (jitter + 1)) : 0;
  return (base + randomExtra) * 1000;
}

function getLocalDayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function runFirstMessageOfDayAutomation(context = {}) {
  if (hasAdminCredentials()) return 0;
  const memberId = getActiveMemberId();
  if (!memberId) return 0;
  state.trollControls = getTrollControls();
  const dayKey = getLocalDayKey();
  if (state.trollControls.firstMessageDayByUser[memberId] === dayKey) return 0;
  state.trollControls.firstMessageDayByUser[memberId] = dayKey;
  return runTrollAutomations("first-message-day", {
    buyer: memberId,
    handle: memberId,
    ...context,
  });
}

function formatTrollMessage(rule, context = {}) {
  const product = getTrollRuleProduct(rule, context) || {};
  const receiptId = context.receipt?.id || context.receiptId || "";
  const fallback = rule.action === "receipt" ? "Posted receipt {receipt}." : "New order posted. Thanks admin.";
  return String(rule.message || fallback)
    .replaceAll("{account}", rule.account)
    .replaceAll("{trigger}", trollTriggerOptions.find((option) => option.key === rule.trigger)?.label || rule.trigger)
    .replaceAll("{receipt}", receiptId)
    .replaceAll("{buyer}", context.buyer || context.handle || "")
    .replaceAll("{message}", context.messageText || "")
    .replaceAll("{product}", product.name || "product")
    .slice(0, 180);
}

function selectTrollRulesForTrigger(trigger) {
  const controls = getTrollControls();
  if (!controls.enabled) return [];
  const candidates = controls.rules.filter((rule) => rule.enabled && rule.trigger === trigger && rule.account);
  if (!candidates.length) return [];
  const limit = Math.min(controls.maxParallel, candidates.length);
  if (!controls.roundRobin) return candidates.slice(0, limit);

  const cursor = clampNumber(controls.cursorByTrigger[trigger], 0, Math.max(0, candidates.length - 1), 0);
  const selected = Array.from({ length: limit }, (_, index) => candidates[(cursor + index) % candidates.length]);
  controls.cursorByTrigger[trigger] = (cursor + limit) % candidates.length;
  return selected;
}

async function runTrollAutomations(trigger, context = {}) {
  const selectedRules = selectTrollRulesForTrigger(trigger);
  if (!selectedRules.length) return 0;
  selectedRules.forEach((rule) => queueTrollRuleExecution(rule, { ...context, trigger }));
  const now = Date.now();
  const selectedIds = new Set(selectedRules.map((rule) => rule.id));
  state.trollControls.rules = state.trollControls.rules.map((rule) => (selectedIds.has(rule.id) ? { ...rule, lastRunAt: now } : rule));
  return selectedRules.length;
}

async function runTrollRuleNow(ruleId) {
  if (!requireAdmin()) return;
  await pullCommunityState();
  const rule = getTrollControls().rules.find((entry) => entry.id === ruleId);
  if (!rule) return;
  if (rule.action === "photo-message" && !rule.photo) {
    window.alert("This rule needs a saved photo before it can run.");
    return;
  }
  queueTrollRuleExecution(rule, { trigger: "manual" });
  state.trollControls.rules = state.trollControls.rules.map((entry) => (entry.id === ruleId ? { ...entry, lastRunAt: Date.now() } : entry));
  await saveCommunityState();
  render();
}

function queueTrollRuleExecution(rule, context = {}) {
  const delayMs = getTrollRuleDelayMs(rule);
  if (!delayMs) {
    executeTrollRule(rule, context);
    return;
  }

  window.setTimeout(async () => {
    await pullCommunityState();
    executeTrollRule(rule, context);
    await saveCommunityState();
    render();
  }, delayMs);
}

function executeTrollRule(rule, context = {}) {
  ensureAutomationMember(rule.account);
  if (rule.action === "photo-message" && !rule.photo) return;
  if (rule.action === "private-message") {
    addDirectMessage("admin", context.buyer || getActivePrivateChatMember() || rule.account, formatTrollMessage(rule, context), {
      adminActingAs: rule.account,
    });
    return;
  }
  if (rule.action === "receipt") {
    createAutomationReceipt(rule, context);
    return;
  }
  if (rule.photo && (rule.action === "photo-message" || rule.action === "group-message")) {
    addChat("admin", formatTrollMessage(rule, context), false, {
      adminActingAs: rule.account,
      type: "media",
      media: {
        id: `troll-photo-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        url: rule.photo?.src || "",
        type: "image",
        contentType: rule.photo?.type || "image/jpeg",
        name: rule.photo?.name || "Troll automation photo",
      },
    });
    return;
  }
  addChat("admin", formatTrollMessage(rule, context), false, {
    adminActingAs: rule.account,
  });
}

function createAutomationReceipt(rule, context = {}) {
  const previousTierPrice = getTier().price;
  const product = getTrollRuleProduct(rule, context);
  if (!product) return;
  const variant = getDefaultProductVariant(product);
  const units = clampNumber(rule.receiptUnits, 1, 20, 1);
  const mode = product.stock > 0 ? "stock" : product.preorderEnabled ? "preorder" : "stock";
  const paidUnit = getProductEffectivePrice(product, units, variant, mode);
  state.buyerCount += units;
  state.transactionCount += 1;
  const receipt = {
    id: `DETI-${9919 + state.transactionCount}`,
    handle: rule.account,
    itemCount: 1,
    items: [
      {
        productId: product.id,
        variantId: variant?.id || "",
        variantLabel: variant?.label || "",
        name: getCartItemName(product, variant),
        qty: units,
        paidUnit,
        preorder: mode === "preorder",
        preorderEndsAt: product.preorderEndsAt,
        preorderStock: product.preorderStock,
        bulkBuyAt: product.bulkBuyAt,
        bulkBuyRepeatDays: product.bulkBuyRepeatDays,
        bulkBuyRepeatTime: product.bulkBuyRepeatTime,
        availableAt: product.availableAt,
      },
    ],
    units,
    refunded: 0,
    golden: false,
    status: "pending",
    paymentReceipt: rule.receiptImage,
    preorder: mode === "preorder",
    automated: true,
    createdAt: Date.now(),
  };
  state.receipts.unshift(receipt);
  state.receipts = state.receipts.slice(0, 24);
  const receiptMessage = addChat(receipt.handle, formatTrollMessage(rule, { ...context, receipt, product }), false, {
    type: "receipt",
    receipt: {
      id: receipt.id,
      handle: receipt.handle,
      total: paidUnit * units,
      units,
      itemCount: 1,
      items: receipt.items,
      status: receipt.status,
      preorder: receipt.preorder,
      paymentReceipt: rule.receiptImage,
      createdAt: receipt.createdAt,
    },
  });
  addCheckoutVerificationReply(receipt, receiptMessage.id);
  addDirectMessage(receipt.handle, "admin", `GCash receipt ${receipt.id} submitted for admin review. Status: ${getReceiptStatusLabel(receipt.status)}.`, {
    receiptId: receipt.id,
    receiptStatus: receipt.status,
  });
  addAnnouncement("Receipt broadcast", `${receipt.handle} posted receipt ${receipt.id}.`);
  recalculateRefunds(previousTierPrice);
  maybeTriggerGoldenTicket(receipt);
}

function slugifyProductId(name) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 42);
  return slug || `product-${Date.now()}`;
}

function currentProductsNextSortOrder(products = getProducts()) {
  return Math.min(999, Math.max(0, ...products.map((product) => Number(product.sortOrder) || 0)) + 1);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result)));
    reader.addEventListener("error", () => reject(new Error("Could not read file")));
    reader.readAsDataURL(file);
  });
}

function loadImageDataUrl(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => reject(new Error("Could not load image")));
    image.src = src;
  });
}

async function readProductImageAsStorableDataUrl(file) {
  const source = await readFileAsDataUrl(file);
  if (source.length <= productImageDataUrlLimit) return source;

  const image = await loadImageDataUrl(source);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return "";

  for (const maxSize of [900, 720, 560, 420]) {
    const scale = Math.min(1, maxSize / Math.max(image.naturalWidth || image.width, image.naturalHeight || image.height));
    canvas.width = Math.max(1, Math.round((image.naturalWidth || image.width) * scale));
    canvas.height = Math.max(1, Math.round((image.naturalHeight || image.height) * scale));
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    for (const quality of [0.78, 0.68, 0.58, 0.48]) {
      const compressed = canvas.toDataURL("image/jpeg", quality);
      if (compressed.length <= productImageDataUrlLimit) return compressed;
    }
  }

  return "";
}

function resetAdminProductForm() {
  els.adminProductSelect.value = "";
  els.adminProductNameInput.value = "";
  renderAdminProductOptions();
  els.adminProductCategorySelect.value = getStoreCategories(getProducts(), state.productCategories).find((category) => category !== "All") || "General";
  els.adminNewCategoryInput.value = "";
  els.adminProductTypeInput.value = "";
  els.adminProductBannerInput.value = "";
  els.adminProductSortInput.value = String(currentProductsNextSortOrder());
  els.adminProductFeaturedInput.checked = false;
  els.adminProductDescriptionInput.value = "";
  els.adminProductOriginalPriceInput.value = "0";
  els.adminProductSalePriceInput.value = "0";
  els.adminProductWholesaleInput.value = "";
  els.adminProductVariantsInput.value = "";
  els.adminProductSaleEnabledInput.checked = false;
  els.adminProductSaleEndsInput.value = "";
  els.adminProductStockInput.value = "0";
  els.adminProductOutOfStockInput.checked = false;
  els.adminProductPreorderInput.checked = false;
  els.adminProductBulkBuyAtInput.value = "";
  els.adminProductBulkBuyRepeatTimeInput.value = "";
  setSelectedWeekdays("productBulkBuyRepeat", []);
  els.adminProductAvailableAtInput.value = "";
  els.adminProductImageUrlInput.value = "";
  els.adminProductImageInput.value = "";
}

function loadAdminProductForm(productId) {
  const product = getProducts().find((item) => item.id === productId);
  if (!product) {
    resetAdminProductForm();
    return;
  }

  renderAdminProductOptions();
  els.adminProductSelect.value = product.id;
  els.adminProductNameInput.value = product.name;
  els.adminProductCategorySelect.value = product.category;
  els.adminNewCategoryInput.value = "";
  els.adminProductTypeInput.value = product.type;
  els.adminProductBannerInput.value = product.banner;
  els.adminProductSortInput.value = product.sortOrder;
  els.adminProductFeaturedInput.checked = product.featured;
  els.adminProductDescriptionInput.value = product.description;
  els.adminProductOriginalPriceInput.value = product.originalPrice;
  els.adminProductSalePriceInput.value = product.salePrice;
  els.adminProductWholesaleInput.value = formatWholesaleTiers(product.wholesaleTiers);
  els.adminProductVariantsInput.value = formatProductVariants(product.variants);
  els.adminProductSaleEnabledInput.checked = product.saleEnabled;
  els.adminProductSaleEndsInput.value = formatDateTimeLocal(product.saleEndsAt);
  els.adminProductStockInput.value = product.stock;
  els.adminProductOutOfStockInput.checked = product.stock <= 0;
  els.adminProductPreorderInput.checked = product.preorderEnabled;
  els.adminProductBulkBuyAtInput.value = formatDateTimeLocal(product.bulkBuyAt);
  els.adminProductBulkBuyRepeatTimeInput.value = product.bulkBuyRepeatTime || "";
  setSelectedWeekdays("productBulkBuyRepeat", product.bulkBuyRepeatDays);
  els.adminProductAvailableAtInput.value = formatDateTimeLocal(product.availableAt);
  els.adminProductImageUrlInput.value = product.image;
  els.adminProductImageInput.value = "";
}

async function addAdminCategory() {
  if (!requireAdmin()) return;
  const category = els.adminNewCategoryInput.value.trim();
  if (!category) return;
  state.productCategoryUpdatedAt = {
    ...normalizeDeletedAtMap(state.productCategoryUpdatedAt),
    [category]: Date.now(),
  };
  restoreDeleted("productCategoryDeletedAt", category);
  const options = [...els.adminProductCategorySelect.options].map((option) => option.value);
  if (!options.includes(category)) {
    els.adminProductCategorySelect.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`);
  }
  state.productCategories = [...new Set([...(state.productCategories || []), category])];
  els.adminProductCategorySelect.value = category;
  els.adminNewCategoryInput.value = "";
  await saveCommunityState();
  renderProducts();
}

async function removeAdminCategory(categoryName = els.adminProductCategorySelect.value) {
  if (!requireAdmin()) return;
  const category = categoryName;
  if (!category || category === "General") return;
  if (!window.confirm(`Remove category ${category}? Products in it will move to General.`)) return;

  const updatedAt = Date.now();
  markDeleted("productCategoryDeletedAt", category, updatedAt);
  state.productCategories = (state.productCategories || []).filter((entry) => entry !== category);
  state.products = getProducts().map((product) => (product.category === category ? { ...product, category: "General", updatedAt } : product));
  if (!state.productCategories.includes("General")) {
    state.productCategories = [...state.productCategories, "General"];
  }
  if (state.storeCategory === category) {
    state.storeCategory = "All";
  }
  els.adminProductCategorySelect.value = "General";
  await saveCommunityState();
  saveUserState();
  renderProducts();
  renderAdminProductOptions();
}

async function saveAdminProduct() {
  if (!requireAdmin()) return;
  const existingId = els.adminProductSelect.value;
  const name = els.adminProductNameInput.value.trim();
  if (!name) return;
  const products = getProducts();
  let productId = existingId || slugifyProductId(name);
  if (!existingId && products.some((item) => item.id === productId)) {
    productId = `${productId}-${Date.now()}`;
  }
  const existingProduct = products.find((item) => item.id === productId);

  const imageFile = els.adminProductImageInput.files?.[0];
  let image = els.adminProductImageUrlInput.value.trim();
  if (imageFile) {
    const imageDataUrl = await readProductImageAsStorableDataUrl(imageFile);
    const fallbackImage = getStorableProductImage(image, existingProduct?.image);
    if (!imageDataUrl) {
      image = fallbackImage;
      window.alert("That image is too large to store in this browser. Use a smaller image or paste a Picture URL.");
    } else if (mediaUploadDisabled) {
      image = imageDataUrl;
    } else {
      try {
        const uploaded = await requestJson("/api/media", {
          method: "POST",
          body: JSON.stringify({
            name: imageFile.name,
            type: imageFile.type,
            file: imageDataUrl,
          }),
        });
        image = uploaded.url;
      } catch (error) {
        if (error.status === 404) mediaUploadDisabled = true;
        image = imageDataUrl;
      }
    }
  }
  const bulkBuyAt = parseDateTimeLocal(els.adminProductBulkBuyAtInput.value);
  const bulkBuyRepeatDays = getSelectedWeekdays("productBulkBuyRepeat");
  const bulkBuyRepeatTime = normalizeTimeValue(els.adminProductBulkBuyRepeatTimeInput.value);
  const availableAt = parseDateTimeLocal(els.adminProductAvailableAtInput.value);
  const outOfStock = els.adminProductOutOfStockInput.checked;
  const stock = outOfStock ? 0 : getAdminNumber(els.adminProductStockInput, 0, 0, 9999);
  const originalPrice = getAdminNumber(els.adminProductOriginalPriceInput, 0, 0, 999999);

  const product = normalizeProduct({
    id: productId,
    name,
    category: els.adminProductCategorySelect.value || "General",
    type: els.adminProductTypeInput.value.trim() || "Standard",
    banner: els.adminProductBannerInput.value.trim() || "New",
    featured: els.adminProductFeaturedInput.checked,
    sortOrder: getAdminNumber(els.adminProductSortInput, existingProduct?.sortOrder || currentProductsNextSortOrder(products), 1, 999),
    description: els.adminProductDescriptionInput.value.trim() || "Product available in the group store.",
    originalPrice,
    salePrice: getAdminNumber(els.adminProductSalePriceInput, 0, 0, 999999),
    wholesaleTiers: parseWholesaleTiers(els.adminProductWholesaleInput.value, originalPrice),
    variants: parseProductVariants(els.adminProductVariantsInput.value),
    saleEnabled: els.adminProductSaleEnabledInput.checked,
    saleEndsAt: parseDateTimeLocal(els.adminProductSaleEndsInput.value),
    stock,
    preorderEnabled: els.adminProductPreorderInput.checked || outOfStock || Boolean(bulkBuyAt || bulkBuyRepeatDays.length || availableAt),
    bulkBuyAt,
    bulkBuyRepeatDays,
    bulkBuyRepeatTime,
    availableAt,
    poolTarget: existingProduct?.poolTarget,
    poolJoined: existingProduct?.poolJoined,
    image,
    updatedAt: Date.now(),
  });

  await pullCommunityState();
  product.updatedAt = Date.now();
  const currentProducts = getProducts();
  const exists = currentProducts.some((item) => item.id === product.id);
  restoreDeleted("productDeletedAt", product.id);
  state.products = exists ? currentProducts.map((item) => (item.id === product.id ? product : item)) : [...currentProducts, product];
  addChat("System", `Admin ${exists ? "updated" : "added"} product ${product.name}.`, true, {
    announcementTitle: exists ? "Product updated" : "Product added",
  });
  await saveCommunityState();
  els.adminProductSelect.value = product.id;
  render();
}

async function removeAdminProduct(productId = els.adminProductSelect.value) {
  if (!requireAdmin()) return;
  const product = getProducts().find((item) => item.id === productId);
  if (!product) return;
  if (!window.confirm(`Remove ${product.name} from the store?`)) return;

  await pullCommunityState();
  markDeleted("productDeletedAt", productId);
  state.products = getProducts().filter((item) => item.id !== productId);
  Object.keys(state.cart).forEach((cartKey) => {
    if (parseCartKey(cartKey).productId === productId) delete state.cart[cartKey];
  });
  addChat("System", `Admin removed product ${product.name}.`, true, {
    announcementTitle: "Product removed",
  });
  resetAdminProductForm();
  saveUserState();
  await saveCommunityState();
  render();
}

async function moveAdminProduct(productId, direction) {
  if (!requireAdmin()) return;
  await pullCommunityState();
  const products = getProducts().map((product, index) => ({ ...product, sortOrder: index + 1 }));
  const index = products.findIndex((product) => product.id === productId);
  const targetIndex = direction === "up" ? index - 1 : index + 1;
  if (index < 0 || targetIndex < 0 || targetIndex >= products.length) return;
  const reordered = [...products];
  [reordered[index], reordered[targetIndex]] = [reordered[targetIndex], reordered[index]];
  const updatedAt = Date.now();
  state.products = reordered.map((product, orderIndex) => ({ ...product, sortOrder: orderIndex + 1, updatedAt }));
  await saveCommunityState();
  render();
}

async function setGoldenTicketDistance() {
  if (!requireAdmin()) return;
  const distance = getAdminNumber(els.adminGoldenDistanceInput, nextDrawDistance(), 1, 50);
  await pullCommunityState();
  state.transactionCount = Math.max(0, Math.floor(state.transactionCount / 50) * 50 + (50 - distance));
  addChat("System", `Admin set the next Golden Ticket draw to ${distance} transaction${distance === 1 ? "" : "s"} away.`, true, {
    announcementTitle: "Golden Ticket configured",
  });
  await saveCommunityState();
  render();
}

async function runGoldenTicketNow() {
  if (!requireAdmin()) return;
  await pullCommunityState();
  triggerGoldenTicket(state.receipts[0]);
  state.transactionCount += 1;
  await saveCommunityState();
  render();
}

async function deleteAnnouncement(announcementId) {
  if (!requireAdmin()) return;
  await pullCommunityState();
  markDeleted("announcementDeletedAt", announcementId);
  state.announcements = state.announcements.filter((announcement) => announcement.id !== announcementId);
  await saveCommunityState();
  render();
}

async function deleteChatMessage(messageId) {
  if (!requireAdmin()) return;
  await pullCommunityState();
  const message = state.chat.find((entry) => entry.id === messageId);
  if (message?.type === "receipt") {
    state.openActionMenuId = null;
    state.openReactionMenuId = null;
    render();
    return;
  }
  markDeleted("chatDeletedAt", messageId);
  state.chat = state.chat.filter((message) => message.id !== messageId);
  state.openActionMenuId = null;
  state.openReactionMenuId = null;
  await saveCommunityState();
  render();
}

async function setReceiptStatus(receiptId, status) {
  if (!requireAdmin()) return;
  const targetId = receiptId;
  if (!targetId) return;
  const nextStatus = normalizeReceiptStatus(status);

  await pullCommunityState();
  const receipt = state.receipts.find((entry) => entry.id === targetId);
  if (!receipt) return;
  const currentStatus = normalizeReceiptStatus(receipt.status);
  if (currentStatus === nextStatus) return;
  if (!getReceiptStatusActions(currentStatus).some((action) => action.key === nextStatus)) return;
  state.receipts = state.receipts.map((entry) => (entry.id === targetId ? { ...entry, status: nextStatus } : entry));
  state.chat = state.chat.map((message) => {
    if (message.type !== "receipt" || message.receipt?.id !== targetId) return message;
    return { ...message, receipt: { ...message.receipt, status: nextStatus } };
  });
  syncDirectReceiptStatus(targetId, nextStatus);
  const statusMessage = getReceiptStatusMessage(targetId, nextStatus);
  addChat(systemProfileAuthor, `${getMentionCode(receipt.handle)} ${statusMessage}`, false, {
    replyToId: getReceiptMessageId(targetId),
  });
  addDirectMessage("admin", receipt.handle, statusMessage, {
    receiptId: targetId,
    receiptStatus: nextStatus,
  });
  addAnnouncement(`Receipt ${getReceiptStatusLabel(nextStatus)}`, statusMessage);
  await saveCommunityState();
  render();
}

async function receiveOrder(receiptId) {
  if (!requireMemberCanAct()) return;
  await pullCommunityState();
  const aliases = new Set(getCurrentMemberIds().flatMap((memberId) => getMemberAliases(memberId)));
  const receipt = state.receipts.find((entry) => entry.id === receiptId && aliases.has(entry.handle));
  if (!receipt || normalizeReceiptStatus(receipt.status) !== "delivered") return;

  state.receipts = state.receipts.map((entry) => (entry.id === receiptId ? { ...entry, status: "received" } : entry));
  state.chat = state.chat.map((message) => {
    if (message.type !== "receipt" || message.receipt?.id !== receiptId) return message;
    return { ...message, receipt: { ...message.receipt, status: "received" } };
  });
  syncDirectReceiptStatus(receiptId, "received");
  const statusMessage = getReceiptStatusMessage(receiptId, "received");
  addChat(systemProfileAuthor, `${getMentionCode(receipt.handle)} ${statusMessage}`, false, {
    replyToId: getReceiptMessageId(receiptId),
  });
  addDirectMessage(receipt.handle, "admin", statusMessage, {
    receiptId,
    receiptStatus: "received",
  });
  await saveCommunityState();
  render();
}

async function createQuickAccount() {
  if (!requireAdmin()) return;
  const username = els.adminQuickUsernameInput.value.trim().replace(/\s+/g, "-");
  const password = els.adminQuickPasswordInput.value;
  if (!username || password.length < 6) {
    window.alert("Enter a username and a password with at least 6 characters.");
    return;
  }

  const passwordHash = await hashPassword(password);
  restoreDeleted("memberDeletedAt", username);
  saveAccount(username, passwordHash);
  els.adminQuickUsernameInput.value = "";
  els.adminQuickPasswordInput.value = "";
  switchQuickIdentity(username);
}

async function setMemberModeration(memberId, mode) {
  if (!requireAdmin()) return;
  if (!memberId || memberId === "admin" || memberId === getActiveMemberId()) {
    window.alert("This account cannot be moderated from here.");
    return;
  }
  const shouldRemoveMessages =
    mode === "block" && window.confirm(`Also remove non-receipt messages sent by ${memberId}? Receipts will stay.`);
  await pullCommunityState();
  state.members = state.members || {};
  normalizeModerationRecords();
  const aliases = getMemberAccountAliases(memberId);
  if (mode === "block") {
    aliases.forEach((alias) => {
      state.moderation.blocked[alias] = { by: state.handle, createdAt: Date.now() };
      delete state.moderation.timeouts[alias];
    });
    if (shouldRemoveMessages) removeMemberNonReceiptMessages(memberId);
    addChat("System", `Admin blocked ${memberId}.`, true, { announcementTitle: "Member blocked" });
  } else if (mode === "timeout") {
    aliases.forEach((alias) => {
      state.moderation.timeouts[alias] = { by: state.handle, createdAt: Date.now(), until: Date.now() + 15 * 60 * 1000 };
    });
    addChat("System", `Admin timed out ${memberId} for 15 minutes.`, true, { announcementTitle: "Member timed out" });
  } else {
    aliases.forEach((alias) => {
      delete state.moderation.blocked[alias];
      delete state.moderation.timeouts[alias];
    });
    addChat("System", `Admin allowed ${memberId}.`, true, { announcementTitle: "Member allowed" });
  }
  await saveCommunityState();
  render();
}

async function createReplacementAccount() {
  const moderation = getCurrentMemberModeration();
  if (moderation?.type !== "blocked") return;
  const previous = getActiveMemberId();
  const next = els.blockedReplacementUsernameInput.value.trim().replace(/\s+/g, "-");
  const password = els.blockedReplacementPasswordInput.value;
  els.blockedReplacementError.textContent = "";

  if (!next || password.length < 6) {
    els.blockedReplacementError.textContent = "Enter a username and a password with at least 6 characters.";
    return;
  }
  if (next === "admin" || getAccount(next) || state.members?.[next] || (await getRemoteAccount(next))) {
    els.blockedReplacementError.textContent = "Username already exists.";
    return;
  }
  const passwordHash = await hashPassword(password);
  restoreDeleted("memberDeletedAt", next);
  saveAccount(next, passwordHash);
  await pullCommunityState();
  state.moderation = state.moderation || { blocked: {}, timeouts: {}, replacements: [] };
  state.moderation.replacements.push({ previous, next, createdAt: Date.now() });
  state.members = state.members || {};
  state.members[next] = {
    handle: next,
    username: next,
    joinedAt: Date.now(),
    lastSeen: Date.now(),
    replacementOf: previous,
  };
  state.username = next;
  state.handle = next;
  state.passwordHash = passwordHash;
  state.passwordSet = true;
  state.joinedCommunity = true;
  state.replyToId = null;
  state.openActionMenuId = null;
  state.openReactionMenuId = null;
  state.mentionInboxOpen = false;
  els.blockedReplacementUsernameInput.value = "";
  els.blockedReplacementPasswordInput.value = "";
  els.blockedReplacementError.textContent = "";
  addChat("System", `${next} was created from blocked account ${previous}.`, true, {
    announcementTitle: "Replacement account signal",
    pinned: false,
  });
  saveUserState();
  await saveCommunityState();
  render();
}

function switchQuickIdentity(username) {
  if (!requireAdmin()) return;
  const target = String(username || "").trim();
  if (!target || target === "admin" || !getKnownMemberIds().has(target)) return;
  setAdminActingAs(target, { switchToGroup: true });
}

function restoreAdminHandle() {
  if (!requireAdmin()) return;
  setAdminActingAs("");
}

function setAdminActingAs(username, options = {}) {
  if (!requireAdmin()) return;
  const target = String(username || "").trim();
  state.adminActingAs = target === "admin" ? "" : target;
  state.handle = "admin";
  state.joinedCommunity = true;
  if (options.switchToGroup) state.chatMode = "group";
  state.openActionMenuId = null;
  state.openReactionMenuId = null;
  state.mentionInboxOpen = false;
  saveUserState();
  render();
}

function setAdminGroupVisibility(mode) {
  if (!requireAdmin()) return;
  state.adminGroupVisibility = ["all", "hide-target", "only-target"].includes(mode) ? mode : "all";
  saveUserState();
  renderChat();
  renderPrivateChat();
}

async function sendDirectMessage(memberId) {
  if (!requireAdmin() || !memberId || memberId === "admin") return;
  state.adminPrivateChatMember = memberId;
  state.chatMode = "admin";
  saveUserState();
  renderChat();
  renderPrivateChat();
  els.privateChatInput?.focus();
}

async function deleteAccount(username) {
  if (!requireAdmin() || !username) return;
  if (username === "admin") {
    window.alert("The main admin account cannot be deleted.");
    return;
  }
  if (!window.confirm(`Delete account ${username}? This removes the login, member record, and moderation links.`)) return;
  const shouldRemoveMessages = window.confirm(`Also remove non-receipt messages sent by ${username}? Receipts will stay.`);

  await pullCommunityState();
  state.moderation = state.moderation || { blocked: {}, timeouts: {}, replacements: [] };
  if (shouldRemoveMessages) removeMemberNonReceiptMessages(username);
  markDeleted("memberDeletedAt", username);
  deleteLocalAccount(username);
  delete state.members[username];
  delete state.moderation.blocked[username];
  delete state.moderation.timeouts[username];
  state.moderation.replacements.forEach((entry) => {
    if (entry.previous === username || entry.next === username) markDeleted("replacementDeletedAt", getReplacementSignalId(entry));
  });
  state.moderation.replacements = state.moderation.replacements.filter((entry) => entry.previous !== username && entry.next !== username);
  state.trollControls = getTrollControls();
  state.trollControls.trollAccounts = state.trollControls.trollAccounts.filter((account) => account !== username);
  state.trollControls.rules.forEach((rule) => {
    if (rule.account === username) markDeleted("trollRuleDeletedAt", rule.id);
  });
  state.trollControls.rules = state.trollControls.rules.filter((rule) => rule.account !== username);

  if (state.handle === username || state.adminActingAs === username) {
    state.handle = "admin";
    state.adminActingAs = "";
    state.openActionMenuId = null;
    state.openReactionMenuId = null;
    state.mentionInboxOpen = false;
  }

  saveUserState();
  await saveCommunityState();
  render();
}

function removeMemberNonReceiptMessages(memberId) {
  const aliases = new Set(getMemberAliases(memberId));
  aliases.add(memberId);
  state.chat.forEach((message) => {
    if (message.type !== "receipt" && aliases.has(message.author)) markDeleted("chatDeletedAt", message.id);
  });
  state.chat = state.chat.filter((message) => message.type === "receipt" || !aliases.has(message.author));
  (state.directMessages || []).forEach((message) => {
    if (aliases.has(message.from) && !message.receiptId) markDeleted("directMessageDeletedAt", message.id);
  });
  state.directMessages = (state.directMessages || []).filter((message) => {
    const sentByMember = aliases.has(message.from);
    return !sentByMember || Boolean(message.receiptId);
  });
}

async function deleteReplacementSignal(createdAt) {
  if (!requireAdmin()) return;
  const signalTime = Number(createdAt);
  if (!Number.isFinite(signalTime)) return;

  await pullCommunityState();
  state.moderation = state.moderation || { blocked: {}, timeouts: {}, replacements: [] };
  markDeleted("replacementDeletedAt", String(signalTime));
  state.moderation.replacements = state.moderation.replacements.filter((entry) => Number(entry.createdAt) !== signalTime);
  await saveCommunityState();
  render();
}

function mentionMessageAuthor(messageId) {
  if (!requireCommunityJoin()) return;
  const message = getMessageById(messageId);
  if (!message) return;
  const code = getMentionCode(message.author);
  const current = els.chatInput.value.trim();
  els.chatInput.value = current ? `${current} ${code} ` : `${code} `;
  state.openActionMenuId = null;
  state.openReactionMenuId = null;
  saveUserState();
  renderChat({ preserveScrollTop: true });
  els.chatInput.focus();
}

function getMentionCode(handle) {
  const source = String(handle || "anon");
  let hash = 0;
  for (let index = 0; index < source.length; index += 1) {
    hash = (hash * 31 + source.charCodeAt(index)) % 46656;
  }
  return `@${hash.toString(36).toUpperCase().padStart(3, "0")}`;
}

async function addAdminBuyers() {
  if (!requireAdmin()) return;
  const amount = getAdminNumber(els.adminBuyerAmountInput, 0, 1, 999);
  if (!amount) return;

  await pullCommunityState();
  const previousTierPrice = getTier().price;
  state.buyerCount += amount;
  state.transactionCount += 1;
  addChat("System", `Admin added ${amount} buyers to the group discount.`, true, {
    announcementTitle: "Admin buyer adjustment",
  });
  recalculateRefunds(previousTierPrice);
  maybeTriggerGoldenTicket(state.receipts[0]);
  await saveCommunityState();
  render();
}

async function setAdminBuyers() {
  if (!requireAdmin()) return;
  const amount = getAdminNumber(els.adminBuyerAmountInput, state.buyerCount, 0, 999);

  await pullCommunityState();
  const previousTierPrice = getTier().price;
  state.buyerCount = amount;
  addChat("System", `Admin set the group discount to ${amount} buyers.`, true, {
    announcementTitle: "Admin buyer override",
  });
  recalculateRefunds(previousTierPrice);
  await saveCommunityState();
  render();
}

async function clearAdminChat() {
  if (!requireAdmin()) return;
  if (!window.confirm("Clear regular chat messages? Receipt cards and receipt records stay.")) return;

  await pullCommunityState();
  state.moderation = state.moderation || {};
  state.moderation.clearChatAt = Date.now();
  state.chat = state.chat.filter((message) => message.type === "receipt");
  state.announcements = [];
  state.openActionMenuId = null;
  state.openReactionMenuId = null;
  await saveCommunityState();
  render();
}

async function clearAdminReceipts() {
  if (!requireAdmin()) return;
  if (!window.confirm("Clear all anonymous receipts and receipt chat cards?")) return;
  await clearAdminOrders({ confirm: false });
}

async function clearAdminOrders(options = {}) {
  if (!requireAdmin()) return;
  if (options.confirm !== false && !window.confirm("Delete all orders, receipts, receipt cards, and receipt admin messages?")) return;

  await pullCommunityState();
  state.moderation = state.moderation || {};
  state.moderation.clearReceiptsAt = Date.now();
  state.receipts = [];
  state.chat = state.chat.filter((message) => message.type !== "receipt");
  state.directMessages = (state.directMessages || []).filter((message) => !message.receiptId);
  state.adminReceiptPage = 1;
  saveUserState();
  await saveCommunityState();
  render();
}

function render() {
  renderHero();
  renderTiers();
  renderProducts();
  renderCart();
  renderReceipts();
  renderMemberOrders();
  renderAnnouncements();
  renderChat();
  renderPrivateChat();
  renderAdminPanel();
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const addId = addButton?.dataset.add;
  const incId = event.target.closest("[data-inc]")?.dataset.inc;
  const decId = event.target.closest("[data-dec]")?.dataset.dec;
  const reactionButton = event.target.closest("[data-react]");
  const replyButton = event.target.closest("[data-reply]");
  const mentionButton = event.target.closest("[data-mention]");
  const chatModeButton = event.target.closest("[data-chat-mode]");
  const tabButton = event.target.closest("[data-tab]");
  const adminTabButton = event.target.closest("[data-admin-tab]");
  const categoryButton = event.target.closest("[data-category]");
  const adminReceiptStatusButton = event.target.closest("[data-admin-receipt-status]");
  const cartButton = event.target.closest("#cartPopupBtn");
  const preorderCartButton = event.target.closest("#preorderCartBtn");
  const loadChatButton = event.target.closest("[data-load-chat]");
  const menuButton = event.target.closest("[data-menu]");
  const replyJumpButton = event.target.closest("[data-jump-reply]");
  const reactToggleButton = event.target.closest("[data-toggle-react]");
  const clearChatMediaButton = event.target.closest("[data-clear-chat-media]");
  const clearPrivateChatMediaButton = event.target.closest("[data-clear-private-chat-media]");
  const deleteMessageButton = event.target.closest("[data-delete-message]");
  const deleteAnnouncementButton = event.target.closest("[data-delete-announcement]");
  const setReceiptStatusButton = event.target.closest("[data-set-receipt-status]");
  const clearOrdersButton = event.target.closest("[data-clear-orders]");
  const receiptPageButton = event.target.closest("[data-receipt-page]");
  const accountPageButton = event.target.closest("[data-account-page]");
  const removeCategoryButton = event.target.closest("[data-remove-category]");
  const receiveOrderButton = event.target.closest("[data-receive-order]");
  const editProductButton = event.target.closest("[data-edit-product]");
  const editPreorderButton = event.target.closest("[data-edit-preorder]");
  const openPreorderButton = event.target.closest("[data-open-preorder]");
  const toggleWholesaleButton = event.target.closest("[data-toggle-wholesale]");
  const removeProductButton = event.target.closest("[data-remove-product]");
  const moveProductButton = event.target.closest("[data-move-product]");
  const switchIdentityButton = event.target.closest("[data-switch-identity]");
  const deleteAccountButton = event.target.closest("[data-delete-account]");
  const deleteReplacementButton = event.target.closest("[data-delete-replacement]");
  const directMessageButton = event.target.closest("[data-direct-message]");
  const blockMemberButton = event.target.closest("[data-block-member]");
  const timeoutMemberButton = event.target.closest("[data-timeout-member]");
  const unblockMemberButton = event.target.closest("[data-unblock-member]");
  const editTrollRuleButton = event.target.closest("[data-edit-troll-rule]");
  const toggleTrollRuleButton = event.target.closest("[data-toggle-troll-rule]");
  const runTrollRuleButton = event.target.closest("[data-run-troll-rule]");
  const toggleTrollAccountButton = event.target.closest("[data-toggle-troll-account]");
  const clearTrollUploadButton = event.target.closest("[data-clear-troll-upload]");

  if (
    reactionButton ||
    replyButton ||
    mentionButton ||
    chatModeButton ||
    adminReceiptStatusButton ||
    loadChatButton ||
    menuButton ||
    replyJumpButton ||
    reactToggleButton ||
    clearChatMediaButton ||
    clearPrivateChatMediaButton ||
    deleteMessageButton ||
    deleteAnnouncementButton ||
    setReceiptStatusButton ||
    clearOrdersButton ||
    receiptPageButton ||
    accountPageButton ||
    removeCategoryButton ||
    receiveOrderButton ||
    editProductButton ||
    editPreorderButton ||
    openPreorderButton ||
    toggleWholesaleButton ||
    removeProductButton ||
    moveProductButton ||
    switchIdentityButton ||
    deleteAccountButton ||
    deleteReplacementButton ||
    directMessageButton ||
    blockMemberButton ||
    timeoutMemberButton ||
    unblockMemberButton ||
    editTrollRuleButton ||
    toggleTrollRuleButton ||
    runTrollRuleButton ||
    toggleTrollAccountButton ||
    clearTrollUploadButton
  ) {
    event.preventDefault();
  }

  if (toggleWholesaleButton) {
    const strip = toggleWholesaleButton.closest(".wholesale-strip");
    const list = strip?.querySelector(".wholesale-tier-list");
    if (list) {
      const shouldOpen = list.hidden;
      closeWholesaleMenus(strip);
      list.hidden = !shouldOpen;
      strip.classList.toggle("open", shouldOpen);
      toggleWholesaleButton.textContent = shouldOpen ? "Close" : "Menu";
      toggleWholesaleButton.setAttribute("aria-expanded", String(shouldOpen));
    }
    return;
  }

  if (!event.target.closest(".wholesale-strip")) {
    closeWholesaleMenus();
  }

  if (addId) {
    addToCart(addId, clampNumber(addButton.dataset.addQty, 1, 99, 1), {
      variantId: addButton.dataset.variantId || getSelectedProductVariantId(addButton),
      mode: getSelectedOrderMode(addButton),
      openSharedCart: Boolean(addButton.closest('[data-view="discounts"]')),
      keepCartClosed: Boolean(addButton.closest("#checkoutOverlay")),
    });
  }
  if (openPreorderButton) openPreorderFromStore(openPreorderButton.dataset.openPreorder);
  if (incId) updateCart(incId, 1);
  if (decId) updateCart(decId, -1);
  if (reactionButton) reactToMessage(reactionButton.dataset.react, reactionButton.dataset.reaction);
  if (replyButton) replyToMessage(replyButton.dataset.reply);
  if (mentionButton) mentionMessageAuthor(mentionButton.dataset.mention);
  if (chatModeButton) {
    state.chatMode = chatModeButton.dataset.chatMode;
    saveUserState();
    renderChat();
    renderPrivateChat();
  }
  if (tabButton) setWorkspaceTab(tabButton.dataset.tab);
  if (adminTabButton) setAdminTab(adminTabButton.dataset.adminTab);
  if (adminReceiptStatusButton) {
    state.adminReceiptStatusTab = adminReceiptStatusButton.dataset.adminReceiptStatus;
    state.adminReceiptPage = 1;
    saveUserState();
    renderAdminReceiptOptions();
  }
  if (categoryButton) {
    state.storeCategory = categoryButton.dataset.category;
    saveUserState();
    renderProducts();
  }
  if (cartButton) toggleCartPopup();
  if (preorderCartButton) openSharedCart();
  if (loadChatButton) loadOlderChatMessages();
  if (menuButton) toggleMessageMenu(menuButton.dataset.menu);
  if (reactToggleButton) toggleReactionPicker(reactToggleButton.dataset.toggleReact);
  if (clearChatMediaButton) clearChatMedia();
  if (clearPrivateChatMediaButton) clearPrivateChatMedia();
  if (deleteMessageButton) deleteChatMessage(deleteMessageButton.dataset.deleteMessage);
  if (deleteAnnouncementButton) deleteAnnouncement(deleteAnnouncementButton.dataset.deleteAnnouncement);
  if (setReceiptStatusButton) setReceiptStatus(setReceiptStatusButton.dataset.setReceiptStatus, setReceiptStatusButton.dataset.status);
  if (clearOrdersButton) clearAdminOrders();
  if (receiptPageButton) {
    state.adminReceiptPage += receiptPageButton.dataset.receiptPage === "next" ? 1 : -1;
    saveUserState();
    renderAdminReceiptOptions();
  }
  if (accountPageButton) {
    state.adminAccountPage += accountPageButton.dataset.accountPage === "next" ? 1 : -1;
    saveUserState();
    renderAdminAccountList();
  }
  if (removeCategoryButton) removeAdminCategory(removeCategoryButton.dataset.removeCategory);
  if (receiveOrderButton) receiveOrder(receiveOrderButton.dataset.receiveOrder);
  if (editProductButton) {
    state.adminTab = "store";
    saveUserState();
    renderAdminTabs();
    loadAdminProductForm(editProductButton.dataset.editProduct);
  }
  if (editPreorderButton) {
    state.adminTab = "preorder";
    saveUserState();
    renderAdminTabs();
    loadAdminPreorderForm(editPreorderButton.dataset.editPreorder);
  }
  if (removeProductButton) removeAdminProduct(removeProductButton.dataset.removeProduct);
  if (moveProductButton) moveAdminProduct(moveProductButton.dataset.moveProduct, moveProductButton.dataset.direction);
  if (switchIdentityButton) switchQuickIdentity(switchIdentityButton.dataset.switchIdentity);
  if (deleteAccountButton) deleteAccount(deleteAccountButton.dataset.deleteAccount);
  if (deleteReplacementButton) deleteReplacementSignal(deleteReplacementButton.dataset.deleteReplacement);
  if (directMessageButton) sendDirectMessage(directMessageButton.dataset.directMessage);
  if (blockMemberButton) setMemberModeration(blockMemberButton.dataset.blockMember, "block");
  if (timeoutMemberButton) setMemberModeration(timeoutMemberButton.dataset.timeoutMember, "timeout");
  if (unblockMemberButton) setMemberModeration(unblockMemberButton.dataset.unblockMember, "allow");
  if (editTrollRuleButton) editTrollRule(editTrollRuleButton.dataset.editTrollRule);
  if (toggleTrollRuleButton) toggleTrollRule(toggleTrollRuleButton.dataset.toggleTrollRule);
  if (runTrollRuleButton) runTrollRuleNow(runTrollRuleButton.dataset.runTrollRule);
  if (toggleTrollAccountButton) toggleTrollAccount(toggleTrollAccountButton.dataset.toggleTrollAccount);
  if (clearTrollUploadButton) clearTrollUpload(clearTrollUploadButton.dataset.clearTrollUpload);
  if (replyJumpButton) jumpToMessage(replyJumpButton.dataset.jumpReply);
});

document.addEventListener("change", (event) => {
  const sizeSelect = event.target.closest("[data-size-select]");
  if (sizeSelect) updateVariantCardPricing(sizeSelect);
});

els.checkoutBtn.addEventListener("click", openCheckoutModal);
els.checkoutSubmitBtn?.addEventListener("click", checkout);
els.checkoutCloseBtn?.addEventListener("click", closeCheckoutModal);
els.checkoutContinueBtn?.addEventListener("click", closeCheckoutModal);
els.checkoutOverlay?.addEventListener("click", (event) => {
  if (event.target === els.checkoutOverlay) closeCheckoutModal();
});
els.clearCartBtn.addEventListener("click", clearCart);
els.paymentReceiptInput.addEventListener("change", handlePaymentReceiptUpload);
els.removePaymentReceiptBtn.addEventListener("click", clearPaymentReceipt);
els.chatMediaBtn.addEventListener("click", () => {
  if (!requireCommunityJoin()) return;
  els.chatMediaInput.click();
});
els.chatMediaInput.addEventListener("change", handleChatMediaUpload);
els.privateChatMediaBtn?.addEventListener("click", () => {
  if (!isAdmin() && !requireMemberCanAct()) return;
  els.privateChatMediaInput.click();
});
els.privateChatMediaInput?.addEventListener("change", handlePrivateChatMediaUpload);
els.signinBtn.addEventListener("click", () => openAuth("signin"));
els.joinCommunityBtn.addEventListener("click", () => openAuth("join"));
els.signoutBtn.addEventListener("click", signOut);
els.adminBroadcastForm.addEventListener("submit", broadcastAdminAnnouncement);
els.adminPulseBtn.addEventListener("click", adminPulseBuyers);
els.adminAddBuyersBtn.addEventListener("click", addAdminBuyers);
els.adminSetBuyersBtn.addEventListener("click", setAdminBuyers);
els.adminBuyerControlsToggle.addEventListener("change", async (event) => {
  if (!requireAdmin()) return;
  state.buyerControlsEnabled = event.target.checked;
  await saveCommunityState();
  render();
});
els.adminProductSelect.addEventListener("change", (event) => loadAdminProductForm(event.target.value));
els.adminProductOutOfStockInput.addEventListener("change", (event) => {
  if (!event.target.checked) return;
  els.adminProductStockInput.value = "0";
  els.adminProductPreorderInput.checked = true;
});
els.adminProductStockInput.addEventListener("input", (event) => {
  els.adminProductOutOfStockInput.checked = Number(event.target.value) <= 0;
});
els.adminPreorderProductSelect.addEventListener("change", (event) => loadAdminPreorderForm(event.target.value));
els.adminPreorderOutOfStockInput.addEventListener("change", (event) => {
  if (event.target.checked) els.adminPreorderEnabledInput.checked = true;
});
els.adminSavePreorderBtn.addEventListener("click", () => saveAdminPreorderSettings());
els.adminClosePreorderBtn.addEventListener("click", () => saveAdminPreorderSettings({ close: true }));
els.adminAddCategoryBtn.addEventListener("click", addAdminCategory);
els.adminRemoveCategoryBtn.addEventListener("click", removeAdminCategory);
els.adminNewProductBtn.addEventListener("click", resetAdminProductForm);
els.adminSaveProductBtn.addEventListener("click", saveAdminProduct);
els.adminRemoveProductBtn.addEventListener("click", removeAdminProduct);
els.adminSetGoldenBtn.addEventListener("click", setGoldenTicketDistance);
els.adminRunGoldenBtn.addEventListener("click", runGoldenTicketNow);
els.adminGoldenTicketToggle.addEventListener("change", async (event) => {
  if (!requireAdmin()) return;
  state.goldenTicketEnabled = event.target.checked;
  await saveCommunityState();
  render();
});
els.adminTrollAutomationToggle.addEventListener("change", async (event) => {
  if (!requireAdmin()) return;
  state.trollControls = getTrollControls();
  state.trollControls.enabled = event.target.checked;
  await saveCommunityState();
  render();
});
els.adminTrollRoundRobinToggle.addEventListener("change", async (event) => {
  if (!requireAdmin()) return;
  state.trollControls = getTrollControls();
  state.trollControls.roundRobin = event.target.checked;
  await saveCommunityState();
  renderAdminTrollControls();
});
els.adminTrollMaxParallelInput.addEventListener("change", async () => {
  if (!requireAdmin()) return;
  state.trollControls = getTrollControls();
  state.trollControls.maxParallel = getAdminNumber(els.adminTrollMaxParallelInput, 1, 1, 20);
  await saveCommunityState();
  renderAdminTrollControls();
});
els.adminNewTrollRuleBtn.addEventListener("click", resetTrollRuleForm);
els.adminSaveTrollRuleBtn.addEventListener("click", saveTrollRule);
els.adminDeleteTrollRuleBtn.addEventListener("click", deleteTrollRule);
els.adminSaveTrollStatsBtn.addEventListener("click", saveTrollStats);
els.adminTrollMemberStatsToggle.addEventListener("change", async (event) => {
  if (!requireAdmin()) return;
  window.clearTimeout(trollStatsSaveTimer);
  state.trollControls = getTrollControls();
  state.trollControls.memberStatsEnabled = event.target.checked;
  await saveCommunityState();
  render();
});
[els.adminTrollActiveMultiplierInput, els.adminTrollTotalMultiplierInput, els.adminTrollInactiveMembersInput].forEach((input) => {
  input.addEventListener("input", scheduleTrollStatsSave);
  input.addEventListener("change", scheduleTrollStatsSave);
});
els.adminCreateQuickAccountBtn.addEventListener("click", createQuickAccount);
els.adminRestoreAdminHandleBtn.addEventListener("click", restoreAdminHandle);
els.adminClearChatBtn.addEventListener("click", clearAdminChat);
els.adminClearReceiptsBtn.addEventListener("click", clearAdminReceipts);
els.authCloseBtn.addEventListener("click", closeAuth);
els.blockedReplacementBtn.addEventListener("click", createReplacementAccount);
els.mentionInboxBtn.addEventListener("click", () => {
  state.mentionInboxOpen = !state.mentionInboxOpen;
  if (state.mentionInboxOpen) markMentionsRead();
  saveUserState();
  renderMentionInbox();
});
els.chatSearchInput.addEventListener("input", (event) => {
  chatSearchQuery = event.target.value;
  state.openActionMenuId = null;
  state.openReactionMenuId = null;
  saveUserState();
  renderChat();
});
els.adminChatFilterSelect?.addEventListener("change", (event) => {
  state.adminChatFilter = event.target.value;
  visibleChatCount = 20;
  state.openActionMenuId = null;
  state.openReactionMenuId = null;
  saveUserState();
  renderChat();
});
els.adminReceiptSearchInput.addEventListener("input", (event) => {
  state.adminReceiptSearch = event.target.value;
  state.adminReceiptPage = 1;
  saveUserState();
  renderAdminReceiptOptions();
});
els.privateMemberSearchInput.addEventListener("input", (event) => {
  state.adminPrivateChatSearch = event.target.value;
  saveUserState();
  renderPrivateChat();
});
els.adminGroupSendAsSearchInput?.addEventListener("input", (event) => {
  state.adminGroupSendAsSearch = event.target.value;
  saveUserState();
  renderAdminSenderControls();
});
els.adminPrivateSendAsSearchInput?.addEventListener("input", (event) => {
  state.adminPrivateSendAsSearch = event.target.value;
  saveUserState();
  renderAdminSenderControls();
});
[els.adminGroupSendAsSearchInput, els.adminPrivateSendAsSearchInput].filter(Boolean).forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") event.preventDefault();
  });
});
els.privateMemberSelect.addEventListener("change", (event) => {
  state.adminPrivateChatMember = event.target.value;
  saveUserState();
  renderPrivateChat();
});
els.privateSendModeSelect.addEventListener("change", (event) => {
  state.adminPrivateSendMode = event.target.value;
  saveUserState();
  renderPrivateChat();
});
els.adminGroupSendAsSelect?.addEventListener("change", (event) => {
  setAdminActingAs(event.target.value);
});
els.adminPrivateSendAsSelect?.addEventListener("change", (event) => {
  setAdminActingAs(event.target.value);
});
els.adminGroupVisibilitySelect?.addEventListener("change", (event) => {
  setAdminGroupVisibility(event.target.value);
});
els.adminPrivateVisibilitySelect?.addEventListener("change", (event) => {
  setAdminGroupVisibility(event.target.value);
});
els.storeSearch.addEventListener("input", (event) => {
  state.storeSearch = event.target.value;
  saveUserState();
  renderProducts();
});

els.authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!els.authForm.reportValidity()) return;

  const nextUsername = els.authUsernameInput.value.trim().replace(/\s+/g, "-");
  const passwordHash = await hashPassword(els.authPasswordInput.value);

  if (authMode === "signin") {
    const account = getAccount(nextUsername) || (await getRemoteAccount(nextUsername));
    const legacyAccountMatches = nextUsername === state.username && passwordHash === state.passwordHash;
    if ((!account || account.passwordHash !== passwordHash) && !legacyAccountMatches) {
      els.authError.textContent = "Username or password does not match.";
      return;
    }
    state.username = nextUsername;
    state.handle = nextUsername;
    state.passwordHash = account?.passwordHash || passwordHash;
    state.passwordSet = true;
    if (!account) saveAccount(nextUsername, passwordHash);
  } else {
    const existingAccount = getAccount(nextUsername) || (await getRemoteAccount(nextUsername));
    if (existingAccount && existingAccount.passwordHash !== passwordHash) {
      els.authError.textContent = "Username already exists. Sign in instead.";
      return;
    }
    state.username = nextUsername || state.username || state.handle;
    state.handle = state.username;
    state.passwordHash = passwordHash;
    state.passwordSet = true;
    saveAccount(state.username, passwordHash);
  }

  state.joinedCommunity = true;
  await pullCommunityState();
  addChat("System", `${getChatIdentity()} joined with a private DETI session.`, true, {
    announcementTitle: "Community member joined",
  });
  if (authMode !== "signin") {
    await runTrollAutomations("account-created", { buyer: getChatIdentity(), handle: getChatIdentity() });
  }
  saveUserState();
  await saveCommunityState();
  const shouldOpenCheckout = pendingCheckoutAfterAuth && getCartUnits() > 0;
  pendingCheckoutAfterAuth = false;
  closeAuth();
  render();
  if (shouldOpenCheckout) openCheckoutModal();
});

els.chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!requireMemberCanAct()) return;
  const message = els.chatInput.value.trim();
  if (!message && !pendingChatMedia) return;

  const originalSendText = els.sendButton.textContent;
  els.sendButton.disabled = true;
  els.sendButton.textContent = pendingChatMedia ? "Uploading" : "Send";

  try {
    const uploadedMedia = await uploadChatMedia();
    await pullCommunityState();
    if (!requireMemberCanAct()) return;
    const chatAuthor = getGroupChatAuthorOptions();
    const chatMessage = addChat(chatAuthor.author, message, false, {
      adminActingAs: chatAuthor.adminActingAs,
      audience: getAdminGroupAudience(),
      replyToId: state.replyToId,
      type: uploadedMedia ? "media" : "text",
      media: uploadedMedia
        ? {
            ...uploadedMedia,
            contentType: pendingChatMedia.type,
          }
        : null,
    });
    await runFirstMessageOfDayAutomation({ messageText: message, message: chatMessage });
    state.replyToId = null;
    els.chatInput.value = "";
    clearChatMedia();
    saveUserState();
    await saveCommunityState();
    render();
  } catch (error) {
    window.alert(error.message || "Media upload failed.");
  } finally {
    els.sendButton.textContent = originalSendText;
    els.sendButton.disabled = false;
    renderCommunityState();
  }
});

els.privateChatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = els.privateChatInput.value.trim();
  if (!text && !pendingPrivateChatMedia) return;

  const admin = isAdmin();
  if (!admin && !requireMemberCanAct()) return;
  const memberId = getActivePrivateChatMember();
  const sendMode = admin ? state.adminPrivateSendMode : "direct";
  if (sendMode !== "group" && !memberId) return;

  const privateSendButton = els.privateChatForm.querySelector(".send-button");
  const originalSendText = privateSendButton.textContent;
  privateSendButton.disabled = true;
  privateSendButton.textContent = pendingPrivateChatMedia ? "Uploading" : "Send";

  try {
    const uploadedMedia = await uploadPrivateChatMedia();
    const directMedia = uploadedMedia
      ? {
          ...uploadedMedia,
          contentType: pendingPrivateChatMedia.type,
        }
      : null;

    await pullCommunityState();
    if (!admin && !requireMemberCanAct()) return;
    if (admin && sendMode === "group") {
      const chatAuthor = getGroupChatAuthorOptions();
      addChat(chatAuthor.author, text, false, {
        adminActingAs: chatAuthor.adminActingAs,
        audience: getAdminGroupAudience(memberId),
        type: directMedia ? "media" : "text",
        media: directMedia,
      });
    } else if (admin && sendMode === "note") {
      addDirectMessage("admin", memberId, text, { visibility: "admin-note", media: directMedia });
    } else {
      addDirectMessage(admin ? "admin" : getActiveMemberId(), admin ? memberId : "admin", text, {
        adminActingAs: admin ? getAdminActingAs() : "",
        media: directMedia,
      });
      if (!admin) await runFirstMessageOfDayAutomation({ messageText: text });
    }
    els.privateChatInput.value = "";
    clearPrivateChatMedia();
    saveUserState();
    await saveCommunityState();
    render();
  } catch (error) {
    window.alert(error.message || "Photo upload failed.");
  } finally {
    privateSendButton.textContent = originalSendText;
    privateSendButton.disabled = false;
    renderCommunityState();
  }
});

els.cancelReplyBtn.addEventListener("click", cancelReply);
els.chatFeed.addEventListener("scroll", () => {
  if (els.chatFeed.scrollTop <= 16) {
    loadOlderChatMessages();
  }
});

window.addEventListener("storage", (event) => {
  if (event.key !== communityStateKey || !event.newValue) return;
  applyCommunityState(readSavedState(communityStateKey));
  render();
});

window.addEventListener("resize", () => {
  syncChatComposerClearance();
});

if (!localStorage.getItem(userStateKey)) {
  saveUserState();
}

if (!localStorage.getItem(communityStateKey) && (state.joinedCommunity || hasAdminCredentials())) {
  localStorage.setItem(communityStateKey, JSON.stringify(sanitizeCommunityStateForStorage(pickStateKeys(state, communityStateKeys))));
}

ensureDefaultAdminAccount();

if (state.username && state.passwordHash && !getAccount(state.username)) {
  saveAccount(state.username, state.passwordHash);
}

async function startApp() {
  await pullCommunityState();
  const visitAutomationCount = await runTrollAutomations("visit", { buyer: getChatIdentity() });
  if (state.joinedCommunity) {
    await saveCommunityState();
  } else if (visitAutomationCount) {
    await saveCommunityState();
  }
  render();
  window.setInterval(pruneExpiredChat, 1000);
  window.setInterval(pullCommunityState, 1500);
  window.setInterval(() => {
    renderTiers();
    renderProducts();
    renderCart();
  }, 30000);
  window.setInterval(() => {
    if (!state.joinedCommunity) return;
    saveCommunityState();
    renderCommunityState();
  }, 30000);
}

startApp();
