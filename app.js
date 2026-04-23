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
  paused: "보류"
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

const els = {};
const objectUrls = new Map();
let mediaDb;
let toastTimer;

const state = {
  influencers: [],
  uploadedMedia: [],
  selectedId: "",
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
    "influencerList",
    "profileHero",
    "mediaGrid",
    "mediaInput",
    "dropZone",
    "profileForm",
    "profileDialog",
    "closeProfileDialogBtn",
    "deleteInfluencerBtn",
    "activityList",
    "calendarStrip",
    "showAllMediaBtn",
    "showImageMediaBtn",
    "showVideoMediaBtn",
    "mediaDialog",
    "dialogMedia",
    "dialogMeta",
    "closeDialogBtn",
    "toast",
    "metricActive",
    "metricMedia",
    "metricReview",
    "metricSchedule",
    "sidebarFocus"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  els.themeToggleBtn.addEventListener("click", toggleTheme);

  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderInfluencerList();
  });

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      document.querySelectorAll(".filter-btn").forEach((item) => item.classList.toggle("active", item === button));
      renderInfluencerList();
    });
  });

  [
    [els.showAllMediaBtn, "all"],
    [els.showImageMediaBtn, "image"],
    [els.showVideoMediaBtn, "video"]
  ].forEach(([button, filter]) => {
    button.addEventListener("click", () => {
      state.mediaFilter = filter;
      [els.showAllMediaBtn, els.showImageMediaBtn, els.showVideoMediaBtn].forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderMediaGrid();
    });
  });

  els.addInfluencerBtn.addEventListener("click", addInfluencer);
  els.profileHero.addEventListener("click", (event) => {
    if (event.target.closest(".edit-profile-btn")) {
      els.profileDialog.showModal();
    }
  });
  els.closeProfileDialogBtn.addEventListener("click", () => els.profileDialog.close());
  els.profileDialog.addEventListener("click", (event) => {
    if (event.target === els.profileDialog) els.profileDialog.close();
  });
  els.deleteInfluencerBtn.addEventListener("click", deleteSelectedInfluencer);
  els.profileForm.addEventListener("submit", saveProfile);
  els.mediaInput.addEventListener("change", (event) => handleFiles([...event.target.files]));
  els.closeDialogBtn.addEventListener("click", () => els.mediaDialog.close());
  els.mediaDialog.addEventListener("click", (event) => {
    if (event.target === els.mediaDialog) els.mediaDialog.close();
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    els.dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.dropZone.classList.add("dragover");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    els.dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.dropZone.classList.remove("dragover");
    });
  });

  els.dropZone.addEventListener("drop", (event) => {
    handleFiles([...event.dataTransfer.files]);
  });
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
  localStorage.setItem("selectedInfluencerId", state.selectedId);
}

function render() {
  if (!state.influencers.some((item) => item.id === state.selectedId)) {
    state.selectedId = state.influencers[0]?.id || "";
  }

  renderMetrics();
  renderInfluencerList();
  renderProfileHero();
  renderProfileForm();
  renderMediaGrid();
  renderActivity();
  renderCalendarStrip();
  saveInfluencers();
}

function renderMetrics() {
  const allMedia = getAllMedia();
  const reviewCount = state.influencers.filter((item) => item.status === "review").length;
  const scheduleCount = state.influencers.reduce((sum, item) => sum + Number(item.schedule || 0), 0);

  els.metricActive.textContent = state.influencers.filter((item) => item.status === "active").length;
  els.metricMedia.textContent = allMedia.length;
  els.metricReview.textContent = reviewCount;
  els.metricSchedule.textContent = scheduleCount;
  els.sidebarFocus.textContent = reviewCount ? `검토 필요 ${reviewCount}건` : "오늘 승인 완료";
}

function renderInfluencerList() {
  const items = state.influencers.filter((influencer) => {
    const matchesFilter = state.filter === "all" || influencer.status === state.filter;
    const haystack = `${influencer.name} ${influencer.handle} ${influencer.platform} ${influencer.niche}`.toLowerCase();
    return matchesFilter && haystack.includes(state.search);
  });

  if (!items.length) {
    els.influencerList.innerHTML = `<div class="empty-state">조건에 맞는 인플루언서가 없습니다.</div>`;
    return;
  }

  els.influencerList.innerHTML = items
    .map((influencer) => {
      const mediaCount = getMediaForInfluencer(influencer.id).length;
      return `
        <button class="influencer-card ${influencer.id === state.selectedId ? "active" : ""}" type="button" data-id="${influencer.id}">
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
    })
    .join("");

  els.influencerList.querySelectorAll(".influencer-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.id;
      render();
    });
  });
}

function renderProfileHero() {
  const selected = getSelectedInfluencer();
  if (!selected) {
    els.profileHero.innerHTML = `<div class="empty-state">인플루언서를 먼저 추가하세요.</div>`;
    return;
  }

  const media = getMediaForInfluencer(selected.id);
  const imageCount = media.filter((item) => item.type === "image").length;
  const videoCount = media.filter((item) => item.type === "video").length;

  els.profileHero.innerHTML = `
    <span class="avatar-large" style="--avatar-pos: ${avatarPositions[selected.avatarIndex % avatarPositions.length]}"></span>
    <div class="profile-copy">
      <div class="card-title-row">
        <h3>${escapeHtml(selected.name)}</h3>
        <div class="hero-actions">
          <span class="status-chip ${selected.status}">${statusLabels[selected.status]}</span>
          <button class="ghost-btn edit-profile-btn" type="button">프로필 편집</button>
        </div>
      </div>
      <p>${escapeHtml(selected.niche)} · ${escapeHtml(selected.handle)} · ${escapeHtml(selected.platform)}</p>
      <div class="profile-stats">
        <span class="profile-stat"><strong>${escapeHtml(selected.audience)}</strong><small>예상 팔로워</small></span>
        <span class="profile-stat"><strong>${imageCount}</strong><small>이미지</small></span>
        <span class="profile-stat"><strong>${videoCount}</strong><small>영상</small></span>
        <span class="profile-stat"><strong>${selected.schedule}</strong><small>일정</small></span>
      </div>
    </div>
  `;
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

function renderMediaGrid() {
  const selected = getSelectedInfluencer();
  if (!selected) {
    els.mediaGrid.innerHTML = `<div class="empty-state">미디어를 저장할 인플루언서가 없습니다.</div>`;
    return;
  }

  let media = getMediaForInfluencer(selected.id);
  if (state.mediaFilter !== "all") {
    media = media.filter((item) => item.type === state.mediaFilter);
  }

  if (!media.length) {
    els.mediaGrid.innerHTML = `<div class="empty-state">아직 등록된 미디어가 없습니다. 위 영역에 이미지나 영상을 추가하세요.</div>`;
    return;
  }

  els.mediaGrid.innerHTML = media
    .map((item) => {
      const deleteButton =
        item.source === "uploaded"
          ? `<button class="icon-btn danger delete-media" type="button" data-id="${item.id}" title="미디어 삭제" aria-label="미디어 삭제">
              <svg viewBox="0 0 24 24"><path d="M8 4h8l1 2h4v2H3V6h4Zm-2 6h12l-1 11H7Z"/></svg>
            </button>`
          : "";
      return `
        <article class="media-card">
          <button class="media-button" type="button" data-id="${item.id}" data-source="${item.source}">
            ${renderMediaThumb(item)}
            <span class="media-card-footer">
              <span class="media-title">
                <strong>${escapeHtml(item.title)}</strong>
                <small>${escapeHtml(item.campaign || item.name || "콘텐츠")}</small>
              </span>
              <span class="type-chip ${item.type === "video" ? "video" : ""}">${item.type === "video" ? "영상" : "이미지"}</span>
            </span>
          </button>
          ${deleteButton}
        </article>
      `;
    })
    .join("");

  els.mediaGrid.querySelectorAll(".media-button").forEach((button) => {
    button.addEventListener("click", () => openMedia(button.dataset.id));
  });

  els.mediaGrid.querySelectorAll(".delete-media").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteUploadedMedia(button.dataset.id);
    });
  });
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

function renderActivity() {
  const selected = getSelectedInfluencer();
  if (!selected) {
    els.activityList.innerHTML = "";
    return;
  }

  const media = getMediaForInfluencer(selected.id);
  const latestUpload = state.uploadedMedia
    .filter((item) => item.influencerId === selected.id)
    .sort((a, b) => b.createdAt - a.createdAt)[0];

  const rows = [
    `${selected.nextAction}`,
    `현재 ${media.length}개의 이미지와 영상을 보관 중입니다.`,
    latestUpload ? `${latestUpload.name} 파일을 최근 추가했습니다.` : "새 파일을 추가하면 이곳에 바로 기록됩니다."
  ];

  els.activityList.innerHTML = rows
    .map(
      (row) => `
      <div class="activity-item">
        <span class="activity-dot"></span>
        <span>${escapeHtml(row)}</span>
      </div>
    `
    )
    .join("");
}

function renderCalendarStrip() {
  const selected = getSelectedInfluencer();
  if (!selected) {
    els.calendarStrip.innerHTML = "";
    return;
  }

  const days = [
    ["24", "금", "이미지 검토", "review"],
    ["25", "토", "릴스 예약", "active"],
    ["26", "일", "휴식", "paused"],
    ["27", "월", "캠페인 업로드", "active"],
    ["28", "화", "성과 확인", "review"]
  ];

  els.calendarStrip.innerHTML = days
    .map(
      ([date, day, label, status], index) => `
        <div class="calendar-day">
          <strong>${date}</strong>
          <span>${day}</span>
          <div class="calendar-thumb" style="--avatar-pos: ${avatarPositions[(selected.avatarIndex + index) % avatarPositions.length]}"></div>
          <small class="${status}">${label}</small>
        </div>
      `
    )
    .join("");
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
  render();
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

  const records = await Promise.all(
    validFiles.map(async (file) => {
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
    })
  );

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
