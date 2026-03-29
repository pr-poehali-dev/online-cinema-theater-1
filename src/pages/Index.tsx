import { useState } from "react";
import Icon from "@/components/ui/icon";
import HlsPlayer from "@/components/HlsPlayer";

const episodes1 = [
  { num: 1, title: "Новые герои", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239052?from=video&linked=1&t=4s" },
  { num: 2, title: "Плохая примета", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239053?from=video&linked=1" },
  { num: 3, title: "Лунная гонка", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239054?from=video&linked=1" },
  { num: 4, title: "Идеальный друг", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239055?from=video&linked=1&t=5s" },
  { num: 5, title: "Флаг для Генерала", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239056?from=video&linked=1&t=26s" },
  { num: 6, title: "Таинственная коробка", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239057?from=video&linked=1&t=15s" },
  { num: 7, title: "Сладкая миссия", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239058?from=video&linked=1&t=1m43s" },
  { num: 8, title: "Супергерой", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239059?from=video&linked=1" },
  { num: 9, title: "Метод Флая", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239060?from=video&linked=1" },
  { num: 10, title: "За фантазию", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239063?from=video&linked=1" },
  { num: 11, title: "Любимая игрушка", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239065?from=video&linked=1" },
  { num: 12, title: "Эмблема команды", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239070?from=video&linked=1" },
  { num: 13, title: "Премия Пинки", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239068?from=video&linked=1" },
  { num: 14, title: "Секрет Де-Кроля", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239071?from=video&linked=1" },
  { num: 15, title: "Одиссея Бублика", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239072?from=video&linked=1" },
  { num: 16, title: "Возвращение Пинки", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239073?from=video&linked=1" },
  { num: 17, title: "Одиночество Бублика", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239074?from=video&linked=1&t=2m21s" },
  { num: 18, title: "Страшный праздник", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239080?from=video&linked=1" },
  { num: 19, title: "Хвост О-Раша", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239075?from=video&linked=1" },
  { num: 20, title: "История Ко-Ко", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239076?from=video&linked=1&t=32s" },
  { num: 21, title: "Конкурс точилок", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239077?from=video&linked=1" },
  { num: 22, title: "Другая Глория", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239079?from=video&linked=1" },
  { num: 23, title: "Мелкотрон Крузо", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239082?from=video&linked=1" },
  { num: 24, title: "История Бублика", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239083?from=video&linked=1&t=3m10s" },
  { num: 25, title: "Жаркий четверг", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239085?from=video&linked=1" },
  { num: 26, title: "Блогер", url: "https://m.vkvideo.ru/playlist/-234589463_5/video-234589463_456239087?from=video&linked=1" },
];

const cartoons = [
  {
    id: "geroychiki",
    title: "Геройчики",
    age: "0+",
    seasons: 2,
    episodes: 26,
    years: "2022–2023",
    description: "Мальчик Рома очень любит играть, поэтому в его комнате полным-полно разных игрушек. Кого здесь только нет: и загадочный пушистый инопланетянин Бублик, и отважный петух-тянучка Ко-Ко, и благородная ящерица-самурай О-Раш, и милая куколка Пинки, и воинственный плюшевый заяц Генерал Де-Кроль со своими роботами, и, конечно, отважные супергерои Флай и Глория.",
    color: "#f59e0b",
    emoji: "🦸",
    seasons_data: [
      { season: 1, episodes: episodes1 },
    ],
  },
  {
    id: "um-i-khrum",
    title: "Ум и Хрум",
    age: "0+",
    seasons: 1,
    episodes: 0,
    years: "Скоро",
    description: "Описание скоро появится.",
    color: "#6366f1",
    emoji: "🐾",
    seasons_data: [],
  },
];

const tvChannels = [
  { name: "Первый канал", emoji: "1️⃣", color: "#dc2626", hlsUrl: "http://rt-vlg-nn-htlive.cdn.ngenix.net/hls/CH_R03_OTT_VLG_NN_1TV/variant.m3u8?version=2" },
  { name: "Россия 1", emoji: "📺", color: "#c2410c", hlsUrl: "https://vgtrkregion-reg.cdnvideo.ru/vgtrk/0/russia1-hd/index.m3u8" },
  { name: "НТВ", emoji: "🎬", color: "#16a34a", hlsUrl: "https://zabava-htlive.cdn.ngenix.net/hls/CH_NTV/variant.m3u8" },
  { name: "Россия 24", emoji: "📡", color: "#2563eb", hlsUrl: "https://vgtrkregion-reg.cdnvideo.ru/vgtrk/abakan/russia24-sd/index.m3u8" },
  { name: "Пятый канал", emoji: "5️⃣", color: "#7c3aed", hlsUrl: "https://zabava-htlive.cdn.ngenix.net/hls/CH_5TV/variant.m3u8" },
  { name: "РЕН ТВ", emoji: "🔥", color: "#ea580c", hlsUrl: "https://zabava-htlive.cdn.ngenix.net/hls/CH_RENTV/variant.m3u8" },
  { name: "СТС", emoji: "⭐", color: "#0891b2", hlsUrl: "https://zabava-htlive.cdn.ngenix.net/hls/CH_STS/variant.m3u8" },
  { name: "ТНТ", emoji: "🎭", color: "#d97706", hlsUrl: "https://streaming.televizor-24-tochka.ru/live/38.m3u8" },
  { name: "Матч ТВ", emoji: "⚽", color: "#15803d", hlsUrl: "" },
  { name: "Культура", emoji: "🎨", color: "#9333ea", hlsUrl: "https://vgtrkregion-reg.cdnvideo.ru/vgtrk/0/kultura-hd/index.m3u8" },
  { name: "ОТР", emoji: "🏛️", color: "#0f766e", hlsUrl: "" },
  { name: "ТВК", emoji: "📻", color: "#b45309", hlsUrl: "" },
];

function getVkEmbedUrl(url: string): string {
  const match = url.match(/video(-?\d+_\d+)/);
  if (match) {
    const parts = match[1].split("_");
    return `https://vkvideo.ru/video_ext.php?oid=${parts[0]}&id=${parts[1]}&hd=2&autoplay=1`;
  }
  return url;
}

type Section = "home" | "cartoons" | "tv" | "favorites" | "new";
type Cartoon = typeof cartoons[0];
type Episode = typeof episodes1[0];

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCartoon, setSelectedCartoon] = useState<Cartoon | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState<typeof tvChannels[0] | null>(null);

  const allSearchItems = [
    ...cartoons.map(c => ({ type: "cartoon" as const, label: c.title, data: c })),
    ...tvChannels.map(c => ({ type: "channel" as const, label: c.name, data: c })),
    ...episodes1.map(e => ({ type: "episode" as const, label: e.title, data: e })),
  ];

  const searchResults = searchQuery.trim().length > 1
    ? allSearchItems.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const isFav = (id: string) => favorites.includes(id);
  const toggleFav = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const openCartoon = (cartoon: Cartoon) => {
    setSelectedCartoon(cartoon);
    setSelectedEpisode(null);
    setSelectedSeason(1);
    setActiveSection("cartoons");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: "home", label: "Главная", icon: "House" },
    { id: "cartoons", label: "Мультсериалы", icon: "Tv2" },
    { id: "tv", label: "ТВ-каналы", icon: "Radio" },
    { id: "favorites", label: "Избранное", icon: "Heart" },
    { id: "new", label: "Новинки", icon: "Sparkles" },
  ];

  const favCartoons = cartoons.filter(c => isFav(c.id));

  const currentSeasonEpisodes = selectedCartoon?.seasons_data.find(s => s.season === selectedSeason)?.episodes ?? [];

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-golos">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0b0f1a]/95 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          <button
            onClick={() => { setActiveSection("home"); setSelectedCartoon(null); setSelectedEpisode(null); }}
            className="flex items-center gap-2 mr-4 flex-shrink-0"
          >
            <span className="text-2xl">🚀</span>
            <span className="font-oswald font-bold text-xl tracking-wide text-white">
              ПОЕ<span className="text-[#f59e0b]">ХАЛИ</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1 flex-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setSelectedCartoon(null); setSelectedEpisode(null); }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-[#f59e0b]/15 text-[#f59e0b]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="relative ml-auto">
            <div className="flex items-center bg-white/8 border border-white/10 rounded-xl px-3 py-2 gap-2 w-52 focus-within:border-[#f59e0b]/50 transition-all">
              <Icon name="Search" size={15} className="text-white/40 flex-shrink-0" />
              <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm text-white placeholder-white/30 outline-none w-full"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-white/40 hover:text-white">
                  <Icon name="X" size={14} />
                </button>
              )}
            </div>
            {searchResults.length > 0 && (
              <div className="absolute top-full mt-2 left-0 w-72 bg-[#141927] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                {searchResults.slice(0, 8).map((item, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSearchQuery("");
                      if (item.type === "cartoon") openCartoon(item.data as Cartoon);
                      else if (item.type === "channel") { setActiveSection("tv"); setSelectedCartoon(null); }
                      else if (item.type === "episode") {
                        setSelectedCartoon(cartoons[0]);
                        setSelectedEpisode(item.data as Episode);
                        setSelectedSeason(1);
                        setActiveSection("cartoons");
                      }
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 text-left transition-colors"
                  >
                    <span className="text-xs px-1.5 py-0.5 rounded bg-white/10 text-white/50 font-medium uppercase tracking-wider flex-shrink-0">
                      {item.type === "cartoon" ? "сериал" : item.type === "channel" ? "канал" : "серия"}
                    </span>
                    <span className="text-sm text-white/80 truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="md:hidden ml-2 text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141927] border-t border-white/5 px-4 py-3 flex flex-col gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setSelectedCartoon(null); setSelectedEpisode(null); setMobileMenuOpen(false); }}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-[#f59e0b]/15 text-[#f59e0b]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* PLAYER VIEW */}
        {selectedCartoon && selectedEpisode && (
          <div className="animate-fade-in">
            <button
              onClick={() => setSelectedEpisode(null)}
              className="flex items-center gap-2 text-white/50 hover:text-[#f59e0b] mb-5 text-sm transition-colors"
            >
              <Icon name="ArrowLeft" size={16} />
              Назад к сериям
            </button>
            <div className="bg-[#141927] rounded-2xl overflow-hidden border border-white/5 mb-6">
              <div className="aspect-video w-full">
                <iframe
                  src={getVkEmbedUrl(selectedEpisode.url)}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[#f59e0b] font-oswald font-bold text-lg">{selectedCartoon.title}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-white/50 text-sm">Серия {selectedEpisode.num}</span>
                </div>
                <h2 className="text-xl font-bold text-white">{selectedEpisode.title}</h2>
              </div>
            </div>

            <h3 className="text-white/50 text-xs font-semibold mb-3 uppercase tracking-widest">Другие серии</h3>
            <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              {currentSeasonEpisodes.map(ep => (
                <button
                  key={ep.num}
                  onClick={() => setSelectedEpisode(ep)}
                  className={`flex-shrink-0 w-40 rounded-xl p-3 text-left transition-all border ${
                    ep.num === selectedEpisode.num
                      ? "bg-[#f59e0b]/15 border-[#f59e0b]/40"
                      : "bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/10"
                  }`}
                >
                  <div className="text-xs text-white/40 mb-1">Серия {ep.num}</div>
                  <div className="text-sm font-medium text-white leading-snug line-clamp-2">{ep.title}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CARTOON DETAIL */}
        {selectedCartoon && !selectedEpisode && (
          <div className="animate-fade-in">
            <button
              onClick={() => { setSelectedCartoon(null); setActiveSection("cartoons"); }}
              className="flex items-center gap-2 text-white/50 hover:text-[#f59e0b] mb-6 text-sm transition-colors"
            >
              <Icon name="ArrowLeft" size={16} />
              Все мультсериалы
            </button>

            <div className="bg-gradient-to-br from-[#1a1f30] to-[#0f1420] rounded-2xl p-6 md:p-8 mb-8 border border-white/5 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{ background: `radial-gradient(circle at 80% 50%, ${selectedCartoon.color} 0%, transparent 60%)` }}
              />
              <div className="relative flex flex-col md:flex-row gap-6 items-start">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0"
                  style={{ background: `${selectedCartoon.color}22`, border: `1px solid ${selectedCartoon.color}33` }}
                >
                  {selectedCartoon.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h1 className="font-oswald font-bold text-3xl text-white">{selectedCartoon.title}</h1>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/20">
                      {selectedCartoon.age}
                    </span>
                    <button
                      onClick={() => toggleFav(selectedCartoon.id)}
                      className={`p-2 rounded-full border transition-all ${isFav(selectedCartoon.id) ? "bg-red-500/20 border-red-500/30 text-red-400" : "bg-white/5 border-white/10 text-white/30 hover:text-white"}`}
                    >
                      <Icon name="Heart" size={16} />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-4">
                    <span className="flex items-center gap-1"><Icon name="Layers" size={14} />{selectedCartoon.seasons} сезона</span>
                    <span className="flex items-center gap-1"><Icon name="Film" size={14} />{selectedCartoon.episodes} серий</span>
                    <span className="flex items-center gap-1"><Icon name="Calendar" size={14} />{selectedCartoon.years}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed max-w-2xl">{selectedCartoon.description}</p>
                </div>
              </div>
            </div>

            {selectedCartoon.seasons_data.length > 0 && (
              <>
                <div className="flex gap-2 mb-6">
                  {selectedCartoon.seasons_data.map(s => (
                    <button
                      key={s.season}
                      onClick={() => setSelectedSeason(s.season)}
                      className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all border ${
                        selectedSeason === s.season
                          ? "bg-[#f59e0b] text-black border-[#f59e0b]"
                          : "bg-white/5 text-white/60 border-white/10 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      Сезон {s.season}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {currentSeasonEpisodes.map(ep => (
                    <button
                      key={ep.num}
                      onClick={() => setSelectedEpisode(ep)}
                      className="group bg-[#141927] hover:bg-[#1e2438] rounded-xl p-4 text-left transition-all border border-white/5 hover:border-[#f59e0b]/30 hover:shadow-lg"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] font-oswald font-bold text-sm mb-3 group-hover:bg-[#f59e0b]/20 transition-colors">
                        {ep.num}
                      </div>
                      <div className="text-xs text-white/40 mb-1">Серия {ep.num}</div>
                      <div className="text-sm font-medium text-white/90 leading-snug line-clamp-2 group-hover:text-white">
                        {ep.title}
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs text-[#f59e0b]/60 group-hover:text-[#f59e0b] transition-colors">
                        <Icon name="Play" size={12} />
                        <span>Смотреть</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {selectedCartoon.seasons_data.length === 0 && (
              <div className="text-center py-16 text-white/30">
                <div className="text-5xl mb-4">🎬</div>
                <p className="text-lg">Серии скоро появятся</p>
              </div>
            )}
          </div>
        )}

        {/* HOME */}
        {!selectedCartoon && activeSection === "home" && (
          <div className="animate-fade-in">
            <div className="relative mb-12 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1f30] via-[#141927] to-[#0b0f1a] border border-white/5 p-8 md:p-12">
              <div className="absolute inset-0 opacity-20"
                style={{ background: "radial-gradient(ellipse at 70% 50%, #f59e0b 0%, transparent 55%)" }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full px-4 py-1.5 text-[#f59e0b] text-sm font-medium mb-5">
                  <span>🚀</span> Онлайн кинотеатр
                </div>
                <h1 className="font-oswald font-black text-4xl md:text-6xl text-white mb-4 leading-tight">
                  СМОТРИ<br />
                  <span className="text-[#f59e0b]">ЛЮБИМОЕ</span> КИНО
                </h1>
                <p className="text-white/50 text-lg max-w-md mb-7">
                  Мультсериалы и ТВ-каналы в одном месте — бесплатно и без регистрации
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveSection("cartoons")}
                    className="flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-black font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
                  >
                    <Icon name="Play" size={18} />
                    Мультсериалы
                  </button>
                  <button
                    onClick={() => setActiveSection("tv")}
                    className="flex items-center gap-2 bg-white/8 hover:bg-white/12 text-white font-semibold px-6 py-3 rounded-xl border border-white/10 transition-all"
                  >
                    <Icon name="Tv" size={18} />
                    ТВ-каналы
                  </button>
                </div>
              </div>
            </div>

            <section className="mb-10">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-oswald font-bold text-2xl text-white">Мультсериалы</h2>
                <button onClick={() => setActiveSection("cartoons")} className="text-[#f59e0b] text-sm hover:underline flex items-center gap-1">
                  Все <Icon name="ChevronRight" size={14} />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cartoons.map(c => (
                  <CartoonCard key={c.id} cartoon={c} isFav={isFav(c.id)} onToggleFav={toggleFav} onOpen={openCartoon} />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-oswald font-bold text-2xl text-white">ТВ-каналы</h2>
                <button onClick={() => setActiveSection("tv")} className="text-[#f59e0b] text-sm hover:underline flex items-center gap-1">
                  Все <Icon name="ChevronRight" size={14} />
                </button>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
                {tvChannels.map(ch => (
                  <button
                    key={ch.name}
                    onClick={() => ch.hlsUrl ? setActiveChannel(ch) : setActiveSection("tv")}
                    className="flex-shrink-0 flex flex-col items-center justify-center gap-2 w-20 h-20 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all relative"
                  >
                    {ch.hlsUrl && (
                      <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    )}
                    <span className="text-2xl">{ch.emoji}</span>
                    <span className="text-xs text-white/60 text-center leading-tight px-1">{ch.name}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* CARTOONS LIST */}
        {!selectedCartoon && activeSection === "cartoons" && (
          <div className="animate-fade-in">
            <h1 className="font-oswald font-bold text-3xl text-white mb-7">Мультсериалы</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cartoons.map(c => (
                <CartoonCard key={c.id} cartoon={c} isFav={isFav(c.id)} onToggleFav={toggleFav} onOpen={openCartoon} />
              ))}
            </div>
          </div>
        )}

        {/* TV CHANNELS */}
        {!selectedCartoon && activeSection === "tv" && (
          <div className="animate-fade-in">
            <h1 className="font-oswald font-bold text-3xl text-white mb-2">ТВ-каналы</h1>
            <p className="text-white/40 text-sm mb-7">Нажмите на канал, чтобы смотреть прямой эфир</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tvChannels.map(ch => (
                <button
                  key={ch.name}
                  onClick={() => ch.hlsUrl ? setActiveChannel(ch) : null}
                  className={`bg-[#141927] rounded-2xl p-5 border transition-all text-left group ${
                    ch.hlsUrl
                      ? "hover:bg-[#1a2035] hover:shadow-lg cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  style={{ borderColor: `${ch.color}20` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: `${ch.color}15` }}
                  >
                    {ch.emoji}
                  </div>
                  <div className="font-semibold text-white text-base mb-1">{ch.name}</div>
                  {ch.hlsUrl ? (
                    <div className="flex items-center gap-1.5 text-xs transition-colors group-hover:text-[#f59e0b]" style={{ color: `${ch.color}99` }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span>Прямой эфир</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-white/25">
                      <Icon name="Clock" size={12} />
                      <span>Скоро</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FAVORITES */}
        {!selectedCartoon && activeSection === "favorites" && (
          <div className="animate-fade-in">
            <h1 className="font-oswald font-bold text-3xl text-white mb-7">Избранное</h1>
            {favCartoons.length === 0 ? (
              <div className="text-center py-20 text-white/25">
                <div className="text-6xl mb-4">💛</div>
                <p className="text-lg font-medium">Здесь пока пусто</p>
                <p className="text-sm mt-2">Нажми ❤ на сериале, чтобы добавить в избранное</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {favCartoons.map(c => (
                  <CartoonCard key={c.id} cartoon={c} isFav={isFav(c.id)} onToggleFav={toggleFav} onOpen={openCartoon} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* NEW */}
        {!selectedCartoon && activeSection === "new" && (
          <div className="animate-fade-in">
            <h1 className="font-oswald font-bold text-3xl text-white mb-2">Новинки</h1>
            <p className="text-white/40 text-sm mb-7">Последние добавленные серии</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {episodes1.slice(-8).reverse().map(ep => (
                <button
                  key={ep.num}
                  onClick={() => {
                    setSelectedCartoon(cartoons[0]);
                    setSelectedEpisode(ep);
                    setSelectedSeason(1);
                    setActiveSection("cartoons");
                  }}
                  className="group bg-[#141927] hover:bg-[#1e2438] rounded-xl p-4 text-left transition-all border border-white/5 hover:border-[#f59e0b]/30"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] font-oswald font-bold text-xs">
                      {ep.num}
                    </div>
                    <span className="text-xs text-[#f59e0b]/60 font-semibold tracking-wide">NEW</span>
                  </div>
                  <div className="text-xs text-white/40 mb-1">Геройчики</div>
                  <div className="text-sm font-medium text-white/90 leading-snug line-clamp-2 group-hover:text-white">
                    {ep.title}
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs text-[#f59e0b]/60 group-hover:text-[#f59e0b] transition-colors">
                    <Icon name="Play" size={12} />
                    <span>Смотреть</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* HLS PLAYER OVERLAY */}
      {activeChannel && (
        <HlsPlayer
          url={activeChannel.hlsUrl}
          channelName={activeChannel.name}
          onClose={() => setActiveChannel(null)}
        />
      )}

      <footer className="border-t border-white/5 mt-16 py-8 text-center text-white/25 text-sm">
        <span className="font-oswald font-bold text-white/40">ПОЕХАЛИ</span>
        <span className="mx-2">·</span>
        Онлайн кинотеатр © 2024
      </footer>
    </div>
  );
}

function CartoonCard({
  cartoon,
  isFav,
  onToggleFav,
  onOpen,
}: {
  cartoon: Cartoon;
  isFav: boolean;
  onToggleFav: (id: string) => void;
  onOpen: (c: Cartoon) => void;
}) {
  return (
    <div
      className="group bg-[#141927] rounded-2xl border overflow-hidden hover:border-white/10 transition-all hover:shadow-xl cursor-pointer"
      style={{ borderColor: `${cartoon.color}15` }}
      onClick={() => onOpen(cartoon)}
    >
      <div
        className="h-32 flex items-center justify-center text-7xl relative"
        style={{ background: `linear-gradient(135deg, ${cartoon.color}18 0%, ${cartoon.color}06 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 50%, ${cartoon.color}20 0%, transparent 70%)` }}
        />
        <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
          {cartoon.emoji}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-oswald font-bold text-lg text-white group-hover:text-[#f59e0b] transition-colors">
              {cartoon.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-1.5">
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/15 font-semibold">
                {cartoon.age}
              </span>
              <span className="text-xs text-white/35">{cartoon.seasons} сез. · {cartoon.episodes} серий</span>
              <span className="text-xs text-white/35">{cartoon.years}</span>
            </div>
          </div>
          <button
            onClick={e => { e.stopPropagation(); onToggleFav(cartoon.id); }}
            className={`p-1.5 rounded-full transition-all flex-shrink-0 ${isFav ? "text-red-400" : "text-white/20 hover:text-white/60"}`}
          >
            <Icon name="Heart" size={16} />
          </button>
        </div>
        <p className="text-xs text-white/40 leading-relaxed mt-2.5 line-clamp-2">{cartoon.description}</p>
        <div className="mt-4 flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 bg-[#f59e0b] hover:bg-[#fbbf24] text-black font-bold text-xs px-4 py-2 rounded-lg transition-all"
            onClick={e => { e.stopPropagation(); onOpen(cartoon); }}
          >
            <Icon name="Play" size={13} />
            Смотреть
          </button>
          <span className="text-xs text-white/25">{cartoon.episodes > 0 ? `${cartoon.episodes} серий` : "Скоро"}</span>
        </div>
      </div>
    </div>
  );
}