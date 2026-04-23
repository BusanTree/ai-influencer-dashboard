const avatarPositions = ["0% 0%", "50% 0%", "100% 0%", "0% 100%", "50% 100%", "100% 100%"];
const mediaPositions = [
  "0% 0%",
  "33.333% 0%",
  "66.666% 0%",
  "100% 0%",
  "0% 50%",
  "33.333% 50%",
  "66.666% 50%",
  "100% 50%",
  "0% 100%",
  "33.333% 100%",
  "66.666% 100%",
  "100% 100%"
];

const statusLabels = {
  active: "활성",
  review: "검토",
  paused: "보류",
  scheduled: "예약"
};

const viewMeta = {
  dashboard: {
    kicker: "Dashboard",
    title: "전체 현황",
    subtitle: "AI 인플루언서 운영 흐름, 미디어, 일정을 한 화면에서 확인합니다."
  },
  influencers: {
    kicker: "Influencers",
    title: "인플루언서",
    subtitle: "캐릭터별 콘셉트, 운영 상태, 다음 작업을 정리합니다."
  },
  media: {
    kicker: "Media Library",
    title: "미디어 보관함",
    subtitle: "이미지와 영상을 인플루언서별로 모아 보고 바로 추가합니다."
  },
  schedule: {
    kicker: "Campaign Schedule",
    title: "캠페인 일정",
    subtitle: "이번 주 콘텐츠 발행과 승인 대기 작업을 일정표로 확인합니다."
  }
};

const sampleInfluencers = [
  {
    id: "mira",
    name: "미라",
    handle: "@mira.daily",
    platform: "Instagram",
    status: "active",
    niche: "라이프스타일 / 뷰티",
    tone: "차분하고 믿음직한 톤. 제품 사용 장면을 구체적으로 설명합니다.",
    nextAction: "봄 캠페인 릴스 2개 검토 후 금요일 오전 예약 업로드",
    audience: "24.8만",
    schedule: 5,
    avatarIndex: 0
  },
  {
    id: "noah",
    name: "노아",
    handle: "@noah.fitlab",
    platform: "TikTok",
    status: "review",
    niche: "피트니스 / 루틴",
    tone: "짧고 자신감 있는 문장. 운동 루틴과 체크리스트 중심.",
    nextAction: "15초 전환 영상 썸네일 교체 필요",
    audience: "18.2만",
    schedule: 3,
    avatarIndex: 1
  },
  {
    id: "sera",
    name: "세라",
    handle: "@sera.table",
    platform: "YouTube Shorts",
    status: "active",
    niche: "푸드 / 홈카페",
    tone: "따뜻하고 섬세한 표현. 레시피 순서를 쉽게 안내합니다.",
    nextAction: "브랜드 협찬 이미지 4장 업로드 후 제목 정리",
    audience: "31.1만",
    schedule: 4,
    avatarIndex: 2
  },
  {
    id: "jun",
    name: "준",
    handle: "@jun.street",
    platform: "Instagram",
    status: "paused",
    niche: "패션 / 스트리트",
    tone: "간결하고 감각적인 톤. 스타일 포인트를 먼저 보여줍니다.",
    nextAction: "다음 컬렉션 콘셉트 확정 전까지 보류",
    audience: "11.7만",
    schedule: 1,
    avatarIndex: 3
  },
  {
    id: "arin",
    name: "아린",
    handle: "@arin.travel",
    platform: "X",
    status: "active",
    niche: "여행 / 도시 기록",
    tone: "관찰하는 듯한 문장. 장소의 색과 소리를 짧게 묘사합니다.",
    nextAction: "도쿄 야간 산책 영상 1차 컷 확인",
    audience: "9.4만",
    schedule: 2,
    avatarIndex: 4
  }
];

const sampleMedia = [
  { id: "sample-1", influencerId: "mira", type: "image", title: "스킨케어 컷", campaign: "봄 캠페인", spriteIndex: 0, source: "sample" },
  { id: "sample-2", influencerId: "mira", type: "video", title: "릴스 포스터", campaign: "제품 리뷰", spriteIndex: 1, source: "sample" },
  { id: "sample-3", influencerId: "mira", type: "image", title: "브랜드 무드", campaign: "콘셉트", spriteIndex: 2, source: "sample" },
  { id: "sample-4", influencerId: "mira", type: "video", title: "언박싱 컷", campaign: "숏폼", spriteIndex: 3, source: "sample" },
  { id: "sample-5", influencerId: "mira", type: "image", title: "데일리 룩", campaign: "피드", spriteIndex: 6, source: "sample" },
  { id: "sample-6", influencerId: "mira", type: "video", title: "전환 영상", campaign: "릴스", spriteIndex: 7, source: "sample" },
  { id: "sample-7", influencerId: "noah", type: "video", title: "루틴 숏폼", campaign: "핏랩", spriteIndex: 4, source: "sample" },
  { id: "sample-8", influencerId: "noah", type: "image", title: "운동 전후", campaign: "웰니스", spriteIndex: 5, source: "sample" },
  { id: "sample-9", influencerId: "noah", type: "video", title: "챌린지 컷", campaign: "틱톡", spriteIndex: 11, source: "sample" },
  { id: "sample-10", influencerId: "sera", type: "image", title: "홈카페 메인", campaign: "브런치", spriteIndex: 8, source: "sample" },
  { id: "sample-11", influencerId: "sera", type: "video", title: "레시피 영상", campaign: "쇼츠", spriteIndex: 9, source: "sample" },
  { id: "sample-12", influencerId: "sera", type: "image", title: "테이블 세팅", campaign: "피드", spriteIndex: 10, source: "sample" },
  { id: "sample-13", influencerId: "jun", type: "image", title: "거리 화보", campaign: "룩북", spriteIndex: 2, source: "sample" },
  { id: "sample-14", influencerId: "jun", type: "video", title: "착장 전환", campaign: "릴스", spriteIndex: 3, source: "sample" },
  { id: "sample-15", influencerId: "arin", type: "video", title: "도시 산책", campaign: "트래블", spriteIndex: 10, source: "sample" },
  { id: "sample-16", influencerId: "arin", type: "image", title: "카페 기록", campaign: "피드", spriteIndex: 0, source: "sample" }
];

const campaignPlan = [
  { day: "월", date: "24", time: "10:00", influencerId: "mira", title: "스킨케어 루틴", status: "scheduled", channel: "Instagram" },
  { day: "화", date: "25", time: "14:00", influencerId: "noah", title: "핏랩 챌린지", status: "review", channel: "TikTok" },
  { day: "수", date: "26", time: "11:00", influencerId: "sera", title: "홈카페 레시피", status: "scheduled", channel: "Shorts" },
  { day: "목", date: "27", time: "16:00", influencerId: "jun", title: "스트리트 룩북", status: "paused", channel: "Instagram" },
  { day: "금", date: "28", time: "20:00", influencerId: "arin", title: "도시 산책 브이로그", status: "scheduled", channel: "X" },
  { day: "토", date: "29", time: "13:00", influencerId: "mira", title: "언박싱 숏폼", status: "review", channel: "TikTok" }
];

const els = {};
const objectUrls = new Map();
let mediaDb;
let toastTimer;

const state = {
  influencers: [],
  uploadedMedia: [],
  selectedId: "",
  view: "dashboard",
  filter: "all",
  mediaFilter: "all",
  search: ""
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  bindElements();
  initTheme();
  state.influencers = loadInfluencers();
  state.selectedId = localStorage.getItem("selectedInfluencerId") || state.influencers[0]?.id || "";
  state.view = localStorage.getItem("personaDeskView") || "dashboard";
  mediaDb = await openMediaDb();
  state.uploadedMedia = await getUploadedMedia();
  bindEvents();
  render();
}

function bindElements() {
  [
    "searchInput",
    "addInfluencerBtn",
    "themeToggleBtn",
    "viewKicker",
    "viewTitle",
    "viewSubtitle",
    "viewRoot",
    "mediaInput",
    "profileForm",
    "profileDialog",
    "closeProfileDialogBtn",
    "deleteInfluencerBtn",
    "mediaDialog",
    "dialogMedia",
    "dialogMeta",
    "closeDialogBtn",
    "toast",
    "metricActive",
    "metricMedia",
    "metricReview",
    "metricSchedule"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelectorAll(".side-action").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "new-influencer") addInfluencer();
      if (action === "upload-media") {
        switchView("media");
        setTimeout(() => els.mediaInput.click(), 0);
      }
      if (action === "schedule") switchView("schedule");
    });
  });

  els.themeToggleBtn.addEventListener("click", toggleTheme);
  els.addInfluencerBtn.addEventListener("click", addInfluencer);

  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderCurrentView();
  });

  els.mediaInput.addEventListener("change", (event) => handleFiles([...event.target.files]));

  els.closeProfileDialogBtn.addEventListener("click", () => els.profileDialog.close());
  els.profileDialog.addEventListener("click", (event) => {
    if (event.target === els.profileDialog) els.profileDialog.close();
  });
  els.deleteInfluencerBtn.addEventListener("click", deleteSelectedInfluencer);
  els.profileForm.addEventListener("submit", saveProfile);

  els.closeDialogBtn.addEventListener("click", () => els.mediaDialog.close());
  els.mediaDialog.addEventListener("click", (event) => {
    if (event.target === els.mediaDialog) els.mediaDialog.close();
  });

  els.viewRoot.addEventListener("click", handleViewClick);
  els.viewRoot.addEventListener("change", handleViewChange);
  els.viewRoot.addEventListener("dragenter", handleDragOver);
  els.viewRoot.addEventListener("dragover", handleDragOver);
  els.viewRoot.addEventListener("dragleave", handleDragLeave);
  els.viewRoot.addEventListener("drop", handleDrop);
}

function switchView(view) {
  state.view = view;
  localStorage.setItem("personaDeskView", view);
  render();
}

function render() {
  if (!state.influencers.some((item) => item.id === state.selectedId)) {
    state.selectedId = state.influencers[0]?.id || "";
  }

  renderChrome();
  renderMetrics();
  renderCurrentView();
  saveInfluencers();
}

function renderChrome() {
  const meta = viewMeta[state.view] || viewMeta.dashboard;
  els.viewKicker.textContent = meta.kicker;
  els.viewTitle.textContent = meta.title;
  els.viewSubtitle.textContent = meta.subtitle;

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
}

function renderMetrics() {
  const allMedia = getAllMedia();
  els.metricActive.textContent = state.influencers.filter((item) => item.status === "active").length;
  els.metricMedia.textContent = allMedia.length;
  els.metricReview.textContent = state.influencers.filter((item) => item.status === "review").length;
  els.metricSchedule.textContent = campaignPlan.length;
}

function renderCurrentView() {
  if (state.view === "influencers") renderInfluencersView();
  else if (state.view === "media") renderMediaLibraryView();
  else if (state.view === "schedule") renderScheduleView();
  else renderDashboardView();
}

function renderDashboardView() {
  const selected = getSelectedInfluencer();
  els.viewRoot.innerHTML = `
    <div class="overview-layout">
      <section class="panel roster-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Roster</p>
            <h3>오늘 관리할 인플루언서</h3>
          </div>
          ${renderStatusFilters()}
        </div>
        <div class="influencer-grid compact-grid">
          ${renderInfluencerCards(getFilteredInfluencers())}
        </div>
      </section>

      <section class="panel workspace-panel">
        ${renderProfileHero(selected)}
        ${renderMediaToolbar()}
        <div class="media-grid">
          ${renderMediaCards(getMediaForSelected())}
        </div>
        ${renderUploadZone()}
        ${renderDashboardLower()}
      </section>
    </div>
  `;
}

function renderInfluencersView() {
  const selected = getSelectedInfluencer();
  els.viewRoot.innerHTML = `
    <div class="directory-layout">
      <section class="panel directory-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Directory</p>
            <h3>인플루언서 전체 목록</h3>
          </div>
          ${renderStatusFilters()}
        </div>
        <div class="influencer-table">
          ${getFilteredInfluencers().map(renderInfluencerRow).join("") || renderEmpty("조건에 맞는 인플루언서가 없습니다.")}
        </div>
      </section>
      <aside class="panel insight-panel">
        ${renderProfileSummary(selected)}
      </aside>
    </div>
  `;
}

function renderMediaLibraryView() {
  const media = getFilteredMedia();
  const selected = getSelectedInfluencer();
  els.viewRoot.innerHTML = `
    <section class="panel library-panel">
      <div class="panel-heading library-heading">
        <div>
          <p class="eyebrow">Assets</p>
          <h3>전체 미디어 보관함</h3>
        </div>
        <div class="toolbar-actions">
          ${renderMediaFilterButtons()}
        </div>
      </div>
      ${renderLibraryPeoplePicker()}
      ${renderUploadZone(`현재 저장 대상: ${selected ? selected.name : "인플루언서 없음"}`)}
      <div class="media-grid all-media-grid">
        ${media.map(renderMediaCard).join("") || renderEmpty("조건에 맞는 미디어가 없습니다.")}
      </div>
    </section>
  `;
}

function renderScheduleView() {
  const campaigns = getFilteredCampaigns();
  els.viewRoot.innerHTML = `
    <div class="schedule-layout">
      <section class="panel calendar-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Week Plan</p>
            <h3>이번 주 캠페인 일정</h3>
          </div>
          <div class="toolbar-actions">
            <button class="ghost-btn active" type="button">주간</button>
            <button class="ghost-btn" type="button">월간</button>
          </div>
        </div>
        <div class="calendar-board">
          ${renderScheduleColumns(campaigns)}
        </div>
      </section>
      <aside class="panel campaign-panel">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Approvals</p>
            <h3>승인 대기 작업</h3>
          </div>
        </div>
        <div class="campaign-list">
          ${campaigns.map(renderCampaignItem).join("") || renderEmpty("조건에 맞는 일정이 없습니다.")}
        </div>
      </aside>
    </div>
  `;
}

function renderStatusFilters() {
  return `
    <div class="segmented" role="group" aria-label="상태 필터">
      <button class="filter-btn ${state.filter === "all" ? "active" : ""}" type="button" data-filter="all">전체</button>
      <button class="filter-btn ${state.filter === "active" ? "active" : ""}" type="button" data-filter="active">활성</button>
      <button class="filter-btn ${state.filter === "review" ? "active" : ""}" type="button" data-filter="review">검토</button>
      <button class="filter-btn ${state.filter === "paused" ? "active" : ""}" type="button" data-filter="paused">보류</button>
    </div>
  `;
}

function renderMediaToolbar() {
  return `
    <div class="media-toolbar">
      <div>
        <p class="eyebrow">Media Library</p>
        <h3>선택한 인플루언서 미디어</h3>
      </div>
      <div class="toolbar-actions">
        ${renderMediaFilterButtons()}
      </div>
    </div>
  `;
}

function renderMediaFilterButtons() {
  return `
    <button class="ghost-btn ${state.mediaFilter === "all" ? "active" : ""}" type="button" data-media-filter="all">전체</button>
    <button class="ghost-btn ${state.mediaFilter === "image" ? "active" : ""}" type="button" data-media-filter="image">이미지</button>
    <button class="ghost-btn ${state.mediaFilter === "video" ? "active" : ""}" type="button" data-media-filter="video">영상</button>
  `;
}

function renderLibraryPeoplePicker() {
  const people = state.influencers.map((influencer) => {
    const mediaCount = getMediaForInfluencer(influencer.id).length;
    return `
      <button class="target-person ${influencer.id === state.selectedId ? "active" : ""}" type="button" data-select-influencer="${influencer.id}">
        <span class="avatar tiny" style="--avatar-pos: ${avatarPositions[influencer.avatarIndex % avatarPositions.length]}"></span>
        <span>
          <strong>${escapeHtml(influencer.name)}</strong>
          <small>${mediaCount}개</small>
        </span>
      </button>
    `;
  }).join("");

  return `
    <div class="target-strip" aria-label="미디어 저장 대상 선택">
      <div>
        <p class="eyebrow">Upload Target</p>
        <strong>파일을 저장할 인플루언서 선택</strong>
      </div>
      <div class="target-list">
        ${people}
      </div>
    </div>
  `;
}

function renderInfluencerCards(items) {
  return items.map((influencer) => {
    const mediaCount = getMediaForInfluencer(influencer.id).length;
    return `
      <button class="influencer-card ${influencer.id === state.selectedId ? "active" : ""}" type="button" data-select-influencer="${influencer.id}">
        <span class="avatar" style="--avatar-pos: ${avatarPositions[influencer.avatarIndex % avatarPositions.length]}"></span>
        <span class="card-main">
          <span class="card-title-row">
            <strong>${escapeHtml(influencer.name)}</strong>
            <span class="status-chip ${influencer.status}">${statusLabels[influencer.status]}</span>
          </span>
          <span class="card-meta-row">
            <span>${escapeHtml(influencer.handle)}</span>
            <span>${escapeHtml(influencer.platform)}</span>
            <span>미디어 ${mediaCount}</span>
          </span>
        </span>
      </button>
    `;
  }).join("") || renderEmpty("조건에 맞는 인플루언서가 없습니다.");
}

function renderInfluencerRow(influencer) {
  const mediaCount = getMediaForInfluencer(influencer.id).length;
  return `
    <button class="influencer-row ${influencer.id === state.selectedId ? "active" : ""}" type="button" data-select-influencer="${influencer.id}">
      <span class="avatar small" style="--avatar-pos: ${avatarPositions[influencer.avatarIndex % avatarPositions.length]}"></span>
      <span>
        <strong>${escapeHtml(influencer.name)}</strong>
        <small>${escapeHtml(influencer.handle)}</small>
      </span>
      <span>${escapeHtml(influencer.niche)}</span>
      <span>${escapeHtml(influencer.audience)}</span>
      <span>미디어 ${mediaCount}</span>
      <span class="status-chip ${influencer.status}">${statusLabels[influencer.status]}</span>
    </button>
  `;
}

function renderProfileHero(selected) {
  if (!selected) return renderEmpty("인플루언서를 먼저 추가하세요.");
  const media = getMediaForInfluencer(selected.id);
  return `
    <div class="profile-hero">
      <span class="avatar-large" style="--avatar-pos: ${avatarPositions[selected.avatarIndex % avatarPositions.length]}"></span>
      <div class="profile-copy">
        <div class="card-title-row">
          <h3>${escapeHtml(selected.name)}</h3>
          <div class="hero-actions">
            <span class="status-chip ${selected.status}">${statusLabels[selected.status]}</span>
            <button class="ghost-btn" type="button" data-edit-profile>프로필 편집</button>
          </div>
        </div>
        <p>${escapeHtml(selected.niche)} · ${escapeHtml(selected.handle)} · ${escapeHtml(selected.platform)}</p>
        <div class="profile-stats">
          <span class="profile-stat"><strong>${escapeHtml(selected.audience)}</strong><small>예상 팔로워</small></span>
          <span class="profile-stat"><strong>${media.filter((item) => item.type === "image").length}</strong><small>이미지</small></span>
          <span class="profile-stat"><strong>${media.filter((item) => item.type === "video").length}</strong><small>영상</small></span>
          <span class="profile-stat"><strong>${selected.schedule}</strong><small>일정</small></span>
        </div>
      </div>
    </div>
  `;
}

function renderProfileSummary(selected) {
  if (!selected) return renderEmpty("선택된 인플루언서가 없습니다.");
  return `
    ${renderProfileHero(selected)}
    <div class="summary-body">
      <div class="summary-section">
        <p class="eyebrow">Tone</p>
        <p>${escapeHtml(selected.tone)}</p>
      </div>
      <div class="summary-section">
        <p class="eyebrow">Next Action</p>
        <p>${escapeHtml(selected.nextAction)}</p>
      </div>
      <button class="primary-btn full" type="button" data-edit-profile>상세 정보 편집</button>
    </div>
  `;
}

function renderMediaCards(media) {
  return media.map(renderMediaCard).join("") || renderEmpty("등록된 미디어가 없습니다. 이미지나 영상을 추가하세요.");
}

function renderMediaCard(item) {
  const owner = state.influencers.find((influencer) => influencer.id === item.influencerId);
  const deleteButton = item.source === "uploaded"
    ? `<button class="icon-btn danger delete-media" type="button" data-delete-media="${item.id}" title="미디어 삭제" aria-label="미디어 삭제">
        <svg viewBox="0 0 24 24"><path d="M8 4h8l1 2h4v2H3V6h4Zm-2 6h12l-1 11H7Z"/></svg>
      </button>`
    : "";

  return `
    <article class="media-card">
      <button class="media-button" type="button" data-open-media="${item.id}">
        ${renderMediaThumb(item)}
        <span class="media-card-footer">
          <span class="media-title">
            <strong>${escapeHtml(item.title)}</strong>
            <small>${escapeHtml(owner ? owner.name : "공통")} · ${escapeHtml(item.campaign || item.name || "콘텐츠")}</small>
          </span>
          <span class="type-chip ${item.type === "video" ? "video" : ""}">${item.type === "video" ? "영상" : "이미지"}</span>
        </span>
      </button>
      ${deleteButton}
    </article>
  `;
}

function renderMediaThumb(item) {
  if (item.source === "sample") {
    return `<span class="media-thumb sprite" style="--media-pos: ${mediaPositions[item.spriteIndex % mediaPositions.length]}"></span>`;
  }

  const url = getObjectUrl(item);
  if (item.type === "video") {
    return `<span class="media-thumb"><video src="${url}" muted playsinline preload="metadata"></video></span>`;
  }
  return `<span class="media-thumb"><img src="${url}" alt="${escapeHtml(item.title)}" /></span>`;
}

function renderUploadZone(note = "선택한 인플루언서에 저장됩니다.") {
  return `
    <button class="drop-zone" type="button" data-upload-zone>
      <span class="drop-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M11 16V7.8L8.1 10.7 6.7 9.3 12 4l5.3 5.3-1.4 1.4L13 7.8V16Zm-6 4v-5h2v3h10v-3h2v5Z"/></svg>
      </span>
      <span>
        <strong>이미지나 영상을 추가</strong>
        <small>${escapeHtml(note)}</small>
      </span>
    </button>
  `;
}

function renderDashboardLower() {
  return `
    <div class="content-strip">
      <div>
        <div class="strip-heading">
          <div>
            <p class="eyebrow">Upcoming Content</p>
            <h3>다가오는 콘텐츠</h3>
          </div>
          <button class="ghost-btn" type="button" data-jump-view="schedule">일정 보기</button>
        </div>
        <div class="calendar-strip">
          ${campaignPlan.slice(0, 5).map(renderMiniDay).join("")}
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-heading">
          <p class="eyebrow">Activity</p>
          <strong>최근 흐름</strong>
        </div>
        <div class="activity-list">
          ${renderActivityItems()}
        </div>
      </div>
    </div>
  `;
}

function renderMiniDay(item) {
  const influencer = state.influencers.find((entry) => entry.id === item.influencerId) || state.influencers[0];
  return `
    <div class="calendar-day">
      <strong>${item.date}</strong>
      <span>${item.day}</span>
      <div class="calendar-thumb" style="--avatar-pos: ${avatarPositions[(influencer.avatarIndex || 0) % avatarPositions.length]}"></div>
      <small class="${item.status}">${escapeHtml(item.title)}</small>
    </div>
  `;
}

function renderActivityItems() {
  const selected = getSelectedInfluencer();
  if (!selected) return "";
  const media = getMediaForInfluencer(selected.id);
  const latestUpload = state.uploadedMedia
    .filter((item) => item.influencerId === selected.id)
    .sort((a, b) => b.createdAt - a.createdAt)[0];

  const rows = [
    selected.nextAction,
    `현재 ${media.length}개의 이미지와 영상을 보관 중입니다.`,
    latestUpload ? `${latestUpload.name} 파일을 최근 추가했습니다.` : "새 파일을 추가하면 이곳에 바로 기록됩니다."
  ];

  return rows.map((row) => `
    <div class="activity-item">
      <span class="activity-dot"></span>
      <span>${escapeHtml(row)}</span>
    </div>
  `).join("");
}

function renderScheduleColumns(campaigns = campaignPlan) {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  return days.map((day) => {
    const items = campaigns.filter((item) => item.day === day);
    return `
      <div class="schedule-column">
        <div class="schedule-head">
          <strong>${day}</strong>
          <span>${items[0]?.date || "-"}</span>
        </div>
        <div class="schedule-stack">
          ${items.map(renderScheduleCard).join("") || `<div class="quiet-slot">일정 없음</div>`}
        </div>
      </div>
    `;
  }).join("");
}

function renderScheduleCard(item) {
  const influencer = state.influencers.find((entry) => entry.id === item.influencerId);
  return `
    <button class="schedule-card ${item.status}" type="button" data-select-influencer="${item.influencerId}">
      <span>${escapeHtml(item.time)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <small>${escapeHtml(influencer ? influencer.name : "공통")} · ${escapeHtml(item.channel)}</small>
    </button>
  `;
}

function renderCampaignItem(item) {
  const influencer = state.influencers.find((entry) => entry.id === item.influencerId);
  return `
    <button class="campaign-item" type="button" data-select-influencer="${item.influencerId}">
      <span class="avatar mini" style="--avatar-pos: ${avatarPositions[(influencer?.avatarIndex || 0) % avatarPositions.length]}"></span>
      <span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(influencer ? influencer.name : "공통")} · ${escapeHtml(item.time)} · ${statusLabels[item.status] || "예정"}</small>
      </span>
    </button>
  `;
}

function handleViewClick(event) {
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    renderCurrentView();
    return;
  }

  const mediaFilterButton = event.target.closest("[data-media-filter]");
  if (mediaFilterButton) {
    state.mediaFilter = mediaFilterButton.dataset.mediaFilter;
    renderCurrentView();
    return;
  }

  const selectButton = event.target.closest("[data-select-influencer]");
  if (selectButton) {
    state.selectedId = selectButton.dataset.selectInfluencer;
    localStorage.setItem("selectedInfluencerId", state.selectedId);
    render();
    return;
  }

  if (event.target.closest("[data-edit-profile]")) {
    renderProfileForm();
    els.profileDialog.showModal();
    return;
  }

  const openMediaButton = event.target.closest("[data-open-media]");
  if (openMediaButton) {
    openMedia(openMediaButton.dataset.openMedia);
    return;
  }

  const deleteMediaButton = event.target.closest("[data-delete-media]");
  if (deleteMediaButton) {
    event.stopPropagation();
    deleteUploadedMedia(deleteMediaButton.dataset.deleteMedia);
    return;
  }

  if (event.target.closest("[data-upload-zone]")) {
    els.mediaInput.click();
    return;
  }

  const jumpButton = event.target.closest("[data-jump-view]");
  if (jumpButton) {
    switchView(jumpButton.dataset.jumpView);
  }
}

function handleViewChange() {}

function handleDragOver(event) {
  const zone = event.target.closest("[data-upload-zone]");
  if (!zone) return;
  event.preventDefault();
  zone.classList.add("dragover");
}

function handleDragLeave(event) {
  const zone = event.target.closest("[data-upload-zone]");
  if (!zone) return;
  zone.classList.remove("dragover");
}

function handleDrop(event) {
  const zone = event.target.closest("[data-upload-zone]");
  if (!zone) return;
  event.preventDefault();
  zone.classList.remove("dragover");
  handleFiles([...event.dataTransfer.files]);
}

function getFilteredInfluencers() {
  return state.influencers.filter((influencer) => {
    const matchesFilter = state.filter === "all" || influencer.status === state.filter;
    const haystack = `${influencer.name} ${influencer.handle} ${influencer.platform} ${influencer.niche}`.toLowerCase();
    return matchesFilter && haystack.includes(state.search);
  });
}

function getFilteredMedia() {
  return getAllMedia().filter((item) => {
    const owner = state.influencers.find((influencer) => influencer.id === item.influencerId);
    const matchesType = state.mediaFilter === "all" || item.type === state.mediaFilter;
    const haystack = `${item.title} ${item.campaign || ""} ${item.name || ""} ${owner?.name || ""}`.toLowerCase();
    return matchesType && haystack.includes(state.search);
  });
}

function getFilteredCampaigns() {
  if (!state.search) return campaignPlan;
  return campaignPlan.filter((item) => {
    const owner = state.influencers.find((influencer) => influencer.id === item.influencerId);
    const haystack = `${item.title} ${item.channel} ${item.day} ${item.time} ${owner?.name || ""} ${owner?.handle || ""}`.toLowerCase();
    return haystack.includes(state.search);
  });
}

function getMediaForSelected() {
  let media = getMediaForInfluencer(state.selectedId);
  if (state.mediaFilter !== "all") {
    media = media.filter((item) => item.type === state.mediaFilter);
  }
  return media;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("personaDeskTheme", theme);
  const isDark = theme === "dark";
  els.themeToggleBtn.setAttribute("aria-label", isDark ? "라이트 모드로 전환" : "다크 모드로 전환");
  els.themeToggleBtn.setAttribute("aria-pressed", String(isDark));
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

function initTheme() {
  const saved = localStorage.getItem("personaDeskTheme");
  const preferred = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(saved || preferred);
}

function loadInfluencers() {
  const saved = localStorage.getItem("aiInfluencerProfiles");
  if (!saved) return sampleInfluencers;
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : sampleInfluencers;
  } catch {
    return sampleInfluencers;
  }
}

function saveInfluencers() {
  localStorage.setItem("aiInfluencerProfiles", JSON.stringify(state.influencers));
}

function renderProfileForm() {
  const selected = getSelectedInfluencer();
  els.profileForm.hidden = !selected;
  els.deleteInfluencerBtn.disabled = state.influencers.length <= 1;
  if (!selected) return;

  const fields = els.profileForm.elements;
  fields.name.value = selected.name;
  fields.handle.value = selected.handle;
  fields.platform.value = selected.platform;
  fields.status.value = selected.status;
  fields.niche.value = selected.niche;
  fields.tone.value = selected.tone;
  fields.nextAction.value = selected.nextAction;
}

function saveProfile(event) {
  event.preventDefault();
  const selected = getSelectedInfluencer();
  if (!selected) return;

  const data = new FormData(els.profileForm);
  Object.assign(selected, {
    name: data.get("name").trim(),
    handle: data.get("handle").trim(),
    platform: data.get("platform"),
    status: data.get("status"),
    niche: data.get("niche").trim(),
    tone: data.get("tone").trim(),
    nextAction: data.get("nextAction").trim()
  });

  saveInfluencers();
  render();
  if (els.profileDialog.open) els.profileDialog.close();
  showToast("변경 내용을 저장했습니다.");
}

function addInfluencer() {
  const nextNumber = state.influencers.length + 1;
  const newInfluencer = {
    id: `custom-${Date.now()}`,
    name: `새 인플루언서 ${nextNumber}`,
    handle: `@new.creator${nextNumber}`,
    platform: "Instagram",
    status: "review",
    niche: "콘셉트를 입력하세요",
    tone: "브랜드에 맞는 말투를 입력하세요.",
    nextAction: "첫 이미지나 영상을 추가하고 캠페인 방향을 정하세요.",
    audience: "0",
    schedule: 0,
    avatarIndex: state.influencers.length % avatarPositions.length
  };

  state.influencers.unshift(newInfluencer);
  state.selectedId = newInfluencer.id;
  switchView("influencers");
  showToast("새 인플루언서를 추가했습니다.");
}

async function deleteSelectedInfluencer() {
  const selected = getSelectedInfluencer();
  if (!selected || state.influencers.length <= 1) return;
  const ok = window.confirm(`${selected.name} 프로필을 삭제할까요? 이 프로필에 올린 파일도 함께 정리됩니다.`);
  if (!ok) return;

  const uploads = state.uploadedMedia.filter((item) => item.influencerId === selected.id);
  await Promise.all(uploads.map((item) => removeMediaRecord(item.id)));
  state.uploadedMedia = state.uploadedMedia.filter((item) => item.influencerId !== selected.id);
  state.influencers = state.influencers.filter((item) => item.id !== selected.id);
  state.selectedId = state.influencers[0]?.id || "";
  if (els.profileDialog.open) els.profileDialog.close();
  render();
  showToast("프로필을 삭제했습니다.");
}

async function handleFiles(files) {
  const selected = getSelectedInfluencer();
  if (!selected || !files.length) return;

  const validFiles = files.filter((file) => file.type.startsWith("image/") || file.type.startsWith("video/"));
  if (!validFiles.length) {
    showToast("이미지 또는 영상 파일만 추가할 수 있습니다.");
    return;
  }

  const records = await Promise.all(validFiles.map(async (file) => {
    const record = {
      id: `media-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      influencerId: selected.id,
      type: file.type.startsWith("video/") ? "video" : "image",
      title: file.name.replace(/\.[^/.]+$/, ""),
      name: file.name,
      mimeType: file.type,
      size: file.size,
      createdAt: Date.now(),
      source: "uploaded",
      blob: file
    };
    await saveMediaRecord(record);
    return record;
  }));

  state.uploadedMedia = [...records, ...state.uploadedMedia];
  els.mediaInput.value = "";
  render();
  showToast(`${records.length}개 파일을 추가했습니다.`);
}

function getSelectedInfluencer() {
  return state.influencers.find((item) => item.id === state.selectedId);
}

function getAllMedia() {
  return [...state.uploadedMedia, ...sampleMedia];
}

function getMediaForInfluencer(influencerId) {
  return getAllMedia().filter((item) => item.influencerId === influencerId);
}

function getObjectUrl(item) {
  if (objectUrls.has(item.id)) return objectUrls.get(item.id);
  const url = URL.createObjectURL(item.blob);
  objectUrls.set(item.id, url);
  return url;
}

function openMedia(id) {
  const media = getAllMedia().find((item) => item.id === id);
  if (!media) return;

  if (media.source === "sample") {
    els.dialogMedia.innerHTML = `<div class="media-thumb sprite" style="--media-pos: ${mediaPositions[media.spriteIndex % mediaPositions.length]}"></div>`;
  } else if (media.type === "video") {
    els.dialogMedia.innerHTML = `<video src="${getObjectUrl(media)}" controls autoplay></video>`;
  } else {
    els.dialogMedia.innerHTML = `<img src="${getObjectUrl(media)}" alt="${escapeHtml(media.title)}" />`;
  }

  els.dialogMeta.innerHTML = `
    <div>
      <strong>${escapeHtml(media.title)}</strong>
      <p class="eyebrow">${media.type === "video" ? "영상" : "이미지"} · ${escapeHtml(media.campaign || media.name || "미디어")}</p>
    </div>
    ${media.source === "uploaded" ? `<button class="ghost-btn" type="button" id="dialogDeleteBtn">삭제</button>` : ""}
  `;

  const deleteBtn = document.getElementById("dialogDeleteBtn");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      els.mediaDialog.close();
      deleteUploadedMedia(media.id);
    });
  }

  els.mediaDialog.showModal();
}

async function deleteUploadedMedia(id) {
  await removeMediaRecord(id);
  if (objectUrls.has(id)) {
    URL.revokeObjectURL(objectUrls.get(id));
    objectUrls.delete(id);
  }
  state.uploadedMedia = state.uploadedMedia.filter((item) => item.id !== id);
  render();
  showToast("미디어를 삭제했습니다.");
}

function openMediaDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("personaDeskMedia", 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("media", { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function saveMediaRecord(record) {
  return new Promise((resolve, reject) => {
    const transaction = mediaDb.transaction("media", "readwrite");
    transaction.objectStore("media").put(record);
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
  });
}

function removeMediaRecord(id) {
  return new Promise((resolve, reject) => {
    const transaction = mediaDb.transaction("media", "readwrite");
    transaction.objectStore("media").delete(id);
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
  });
}

function getUploadedMedia() {
  return new Promise((resolve, reject) => {
    const transaction = mediaDb.transaction("media", "readonly");
    const request = transaction.objectStore("media").getAll();
    request.onsuccess = () => {
      const records = request.result.map((item) => ({ ...item, source: "uploaded" }));
      resolve(records.sort((a, b) => b.createdAt - a.createdAt));
    };
    request.onerror = () => reject(request.error);
  });
}

function renderEmpty(message) {
  return `<div class="empty-state">${escapeHtml(message)}</div>`;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2400);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
