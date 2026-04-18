import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, GraduationCap, Globe, Users, CheckCircle2, 
  Award, Clock, ShieldCheck, Briefcase, Zap, MapPin,
  Star, Search, Phone, Mail, ChevronRight, Shield, Copy,
  Languages, BarChart3, Monitor, Brain, Lightbulb,
  ChevronLeft, Menu, X, ExternalLink, Trophy, FileText, Home
} from 'lucide-react';

const UNIVERSITY_DATA = [
  {
    name: "都柏林大学学院(新加坡校区)",
    englishName: "University College Dublin (Singapore Campus)",
    description: "爱尔兰都柏林大学（UCD）是享誉世界的顶尖学府，2025年QS世界排名第126位。其新加坡校区通过与Kaplan合作，提供全球顶尖的商科教育。UCD商学院拥有AACSB、AMBA和EQUIS“三皇冠”权威认证，全球仅有不到1%的商学院获此殊荣，其学位含金量极高，深受国际名企认可。",
    majors: [
      { cn: "商业分析", en: "Bachelor of Business Studies (Honours) (Business Analytics)", duration: "18 months", intake: "April & October", fee: "S$42,837 (payable in 2 instalments)" },
      { cn: "数字商业", en: "Bachelor of Business Studies (Honours) (Digital Business)", duration: "18 months", intake: "April & October", fee: "S$42,837 (payable in 2 instalments)" },
      { cn: "金融科技", en: "Bachelor of Business Studies (Honours) (FinTech)", duration: "18 months", intake: "April & October", fee: "S$42,837 (payable in 2 instalments)" },
      { cn: "金融", en: "Bachelor of Business Studies (Honours) (Finance)", duration: "18 months", intake: "April & October", fee: "S$42,837 (payable in 2 instalments)" },
      { cn: "人力资源管理", en: "Bachelor of Business Studies (Honours) (Human Resource Management)", duration: "18 months", intake: "April & October", fee: "S$42,837 (payable in 2 instalments)" },
      { cn: "物流与供应链管理", en: "Bachelor of Business Studies (Honours) (Logistics and Supply Chain Management)", duration: "18 months", intake: "April & October", fee: "S$42,837 (payable in 2 instalments)" },
      { cn: "管理", en: "Bachelor of Business Studies (Honours) (Management)", duration: "18 months", intake: "April & October", fee: "S$42,837 (payable in 2 instalments)" },
      { cn: "市场营销", en: "Bachelor of Business Studies (Honours) (Marketing)", duration: "18 months", intake: "April & October", fee: "S$42,837 (payable in 2 instalments)" },
      { cn: "项目管理", en: "Bachelor of Business Studies (Honours) (Project Management)", duration: "18 months", intake: "April & October", fee: "S$42,837 (payable in 2 instalments)" },
    ]
  },
  {
    name: "科廷大学(新加坡分校)",
    englishName: "Curtin University Singapore",
    description: "科廷大学是全球顶尖的1%名校，2025年QS世界排名第174位。新加坡分校作为其直属校区，提供与澳洲主校区完全一致的教学大纲和学位证书。学校以商科、传媒及IT专业见长，教学高度契合行业需求，为学生提供国际化的学习环境及卓越的职业发展前景。",
    majors: [
      { cn: "传播学学士", en: "Bachelor of Communications", duration: "20 months", intake: "February, July, November", fee: "S$46,325 (payable in 2 instalments)" },
      { cn: "信息技术学士", en: "Bachelor of Information Technology", duration: "20 months", intake: "February, July, November", fee: "S$46,325 (payable in 2 instalments)" },
      { cn: "商学学士", en: "Bachelor of Commerce", duration: "20 months", intake: "February, July, November", fee: "S$46,325 (payable in 2 instalments)" },
      { cn: "计算机科学学士 (网络安全方向)", en: "Bachelor of Computing (Cyber Security)", duration: "20 months", intake: "February, July, November", fee: "S$46,325 (payable in 2 instalments)" },
      { cn: "会计", en: "Bachelor of Commerce (Accounting)", duration: "20 months", intake: "February, July, November", fee: "S$54,500 (payable in 2 instalments)" },
      { cn: "国际商务", en: "Bachelor of Commerce (International Business)", duration: "20 months", intake: "February, July, November", fee: "S$54,500 (payable in 2 instalments)" },
      { cn: "管理", en: "Bachelor of Commerce (Management)", duration: "20 months", intake: "February, July, November", fee: "S$54,500 (payable in 2 instalments)" },
      { cn: "金融", en: "Bachelor of Commerce (Finance)", duration: "20 months", intake: "February, July, November", fee: "S$54,500 (payable in 2 instalments)" },
      { cn: "市场营销", en: "Bachelor of Commerce (Marketing)", duration: "20 months", intake: "February, July, November", fee: "S$54,500 (payable in 2 instalments)" },
    ]
  },
  {
    name: "考文垂大学(新加坡校区)",
    englishName: "Coventry University Singapore",
    description: "考文垂大学是一所极具前瞻性的现代化大学，2025年QS世界排名第531位。其新加坡校区专注于提升学生的就业竞争力，与行业紧密挂钩。课程设计紧跟全球市场脉搏，特别是在工程、计算机及商科领域，通过实践导向的教学模式，助力学生在国际职场中脱颖而出。",
    majors: [
      { cn: "商业与市场营销", en: "Bachelor of Arts with Honours in Business and Marketing", duration: "12-24 months", intake: "March, July, November", fee: "S$28,500" },
      { cn: "会计与金融", en: "Bachelor of Arts with Honours in Accounting and Finance", duration: "12-24 months", intake: "March, July, November", fee: "S$28,500" },
      { cn: "计算机科学", en: "Bachelor of Science with Honours in Computer Science", duration: "12-24 months", intake: "March, July, November", fee: "S$30,200" },
      { cn: "网络安全", en: "Bachelor of Science with Honours in Cyber Security", duration: "12-24 months", intake: "March, July, November", fee: "S$30,200" },
      { cn: "电气与电子工程", en: "Bachelor of Engineering with Honours in Electrical and Electronic Engineering", duration: "12-24 months", intake: "March, July, November", fee: "S$32,400" },
      { cn: "机械工程", en: "Bachelor of Engineering with Honours in Mechanical Engineering", duration: "12-24 months", intake: "March, July, November", fee: "S$32,400" },
      { cn: "媒体与传播", en: "Bachelor of Arts with Honours in Media and Communications", duration: "12-24 months", intake: "March, July, November", fee: "S$28,500" },
      { cn: "酒店与旅游管理", en: "Bachelor of Arts with Honours in Hospitality and Tourism Management", duration: "12-24 months", intake: "March, July, November", fee: "S$28,500" },
    ]
  },
  {
    name: "詹姆斯库克大学(新加坡校区)",
    englishName: "James Cook University Singapore",
    description: "詹姆斯库克大学（JCU）是澳洲顶尖公立大学，2025年QS世界排名第445位。新加坡校区是其首个海外直属分校，也是新加坡第一所获得EduTrust Star最高星级认证的院校。学校在心理学、商科、IT及环境科学领域表现卓越，学位受中外教育部双重认可，学术地位稳固。",
    majors: [
      { cn: "心理学学士", en: "Bachelor of Psychological Science", duration: "24 months", intake: "March, July, November", fee: "S$62,400" },
      { cn: "商业管理学士", en: "Bachelor of Business", duration: "24 months", intake: "March, July, November", fee: "S$60,000" },
      { cn: "信息技术学士", en: "Bachelor of Information Technology", duration: "24 months", intake: "March, July, November", fee: "S$60,000" },
      { cn: "网络安全学士", en: "Bachelor of Cybersecurity", duration: "24 months", intake: "March, July, November", fee: "S$60,000" },
      { cn: "环境科学学士", en: "Bachelor of Environmental Science", duration: "24 months", intake: "March, July, November", fee: "S$60,000" },
    ]
  },
  {
    name: "东伦敦大学(新加坡校区)",
    englishName: "University of East London Singapore",
    description: "东伦敦大学（UEL）是一所充满活力的现代化大学，2025年QS世界排名第851-900位。其新加坡校区致力于培养数字经济时代的专业人才，特别是在计算机科学与网络安全领域。学校强调实践学习与行业连接，为学生提供前沿的技能培训，助力其在快速发展的科技领域开启职业生涯。",
    majors: [
      { cn: "计算机科学", en: "Bachelor of Science (Honours) in Computer Science", duration: "12-24 months", intake: "Jan, May, Sep", fee: "S$22,000" },
      { cn: "网络安全与网络", en: "Bachelor of Science (Honours) in Cyber Security and Networks", duration: "12-24 months", intake: "Jan, May, Sep", fee: "S$22,000" },
      { cn: "云计算", en: "Bachelor of Science (Honours) in Cloud Computing", duration: "12-24 months", intake: "Jan, May, Sep", fee: "S$22,000" },
    ]
  },
  {
    name: "格林威治大学(新加坡校区)",
    englishName: "University of Greenwich Singapore",
    description: "格林威治大学拥有悠久的办学历史，2025年QS世界排名第691-700位。其新加坡校区提供优质的商科及酒店管理课程。学校以卓越的教学质量和强有力的行业联系著称，致力于为学生创造支持性的学习环境，通过丰富的实践机会提升学生的专业素养和全球视野。",
    majors: [
      { cn: "商业管理", en: "Bachelor of Arts (Honours) in Business Management", duration: "12-24 months", intake: "Jan, May, Sep", fee: "S$18,500" },
      { cn: "会计与金融", en: "Bachelor of Arts (Honours) in Accounting and Finance", duration: "12-24 months", intake: "Jan, May, Sep", fee: "S$18,500" },
      { cn: "物流与供应链管理", en: "Bachelor of Arts (Honours) in Logistics and Supply Chain Management", duration: "12-24 months", intake: "Jan, May, Sep", fee: "S$18,500" },
      { cn: "酒店管理", en: "Bachelor of Arts (Honours) in Hospitality Management", duration: "12-24 months", intake: "Jan, May, Sep", fee: "S$18,500" },
    ]
  },
  {
    name: "纽卡斯尔大学(新加坡校区)",
    englishName: "The University of Newcastle, Australia",
    description: "澳洲纽卡斯尔大学是世界一流的研究型大学，2025年QS世界排名第179位。其新加坡校区让学生在亚洲即可获得高质量的澳洲教育。学校在工程、商科及IT领域享有盛誉，教学注重创新与实践，毕业生深受全球雇主青睐，是追求高性价比名校教育的理想选择。",
    majors: [
      { cn: "商学学士 (会计/金融)", en: "Bachelor of Commerce", duration: "12-28 months", intake: "Jan, May, Aug", fee: "S$25,506 - S$51,012" },
      { cn: "商业学士", en: "Bachelor of Business", duration: "12-28 months", intake: "Jan, May, Aug", fee: "S$25,506 - S$51,012" },
      { cn: "传播学学士", en: "Bachelor of Communication", duration: "12-28 months", intake: "Jan, May, Aug", fee: "S$25,506 - S$51,012" },
      { cn: "信息技术学士", en: "Bachelor of Information Technology", duration: "12-28 months", intake: "Jan, May, Aug", fee: "S$25,506 - S$51,012" },
      { cn: "电气与电子工程 (荣誉)", en: "Bachelor of Engineering (Honours) (Electrical and Electronic)", duration: "24-48 months", intake: "Jan, May, Aug", fee: "S$40,000+" },
      { cn: "机械工程 (荣誉)", en: "Bachelor of Engineering (Honours) (Mechanical)", duration: "24-48 months", intake: "Jan, May, Aug", fee: "S$40,000+" },
    ]
  },
  {
    name: "伯明翰大学(新加坡校区)",
    englishName: "University of Birmingham Singapore",
    description: "伯明翰大学（University of Birmingham）是英国老牌名校，“红砖大学”之一，位列2025年QS世界大学排名第80位。新加坡校区通过与SIM全球教育合作，提供原汁原味的英国名校教育。其商学院获得AACSB、AMBA及EQUIS三重认证，学术地位举世公认。新加坡校区的毕业生由英国校区直接授予学位，在新加坡即可享受世界级名校的优质教育资源，是中国教育部留服中心认证的高含金量名校。",
    majors: [
      { cn: "会计与金融", en: "BSc (Hons) Accounting and Finance", duration: "24 months", intake: "July & October", fee: "S$41,200" },
      { cn: "商业管理", en: "BSc (Hons) Business Management", duration: "24 months", intake: "July & October", fee: "S$41,200" },
      { cn: "商业管理与传播", en: "BSc (Hons) Business Management with Communications", duration: "24 months", intake: "July & October", fee: "S$41,200" },
      { cn: "国际商务", en: "BSc (Hons) International Business", duration: "24 months", intake: "July & October", fee: "S$44,145" },
    ]
  }
];

interface PricingCardProps {
  tier: string;
  title: string;
  price: string;
  tag?: string;
  items: string[];
  priceSub?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const PricingCard = ({ tier, title, price, tag, items, priceSub, isExpanded, onToggle }: PricingCardProps) => {
  const renderPrice = (p: string) => {
    if (p.includes('起')) {
      return (
        <>
          {p.replace('起', '')}<span className="text-[0.5em] font-black">起</span>
        </>
      );
    }
    return p;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`p-5 md:p-6 glass-card rounded-[2rem] border transition-all duration-300 flex flex-col relative group overflow-hidden ${
        isExpanded ? 'border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-white/5' : 'border-white/10 hover:border-white/20'
      } md:cursor-default md:border-white/10 md:hover:border-gold/30 md:bg-white/5 md:shadow-none cursor-pointer`}
      onClick={() => {
        if (window.innerWidth < 768 && onToggle) {
          onToggle();
        }
      }}
    >
      {tag && (
        <div className="absolute top-4 right-4 px-2.5 py-0.5 bg-gold text-blue-950 text-[9px] font-black rounded-full tracking-widest z-10">
          {tag}
        </div>
      )}
      
      <div className={`${isExpanded ? 'mb-5 md:mb-6' : 'mb-0 md:mb-6'}`}>
        <div className="text-gold font-bold text-[14px] tracking-[0.2em] uppercase mb-1">{tier}</div>
        <h4 className={`text-white font-black transition-all ${isExpanded ? 'text-[22px] md:text-[28px] mb-3 md:mb-5' : 'text-[20px] md:text-[24px] mb-0 md:mb-5'}`}>
          {title}
        </h4>
        
        {/* Mobile Accordion */}
        <div className="md:hidden">
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/10 transition-colors mb-4">
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white">
                    {renderPrice(price)}
                  </div>
                  <div className="text-[9px] text-white/40 uppercase tracking-widest mt-0.5 font-bold">APPLICATION PRICE</div>
                  {priceSub && <div className="text-gold/60 text-[9px] mt-0.5 font-bold">{priceSub}</div>}
                </div>

                <div className="space-y-2 flex-1 text-left">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-white/70 text-[14px] font-medium group-hover:text-white transition-colors leading-tight">
                      <div className="w-4 h-4 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                        <div className="w-1 h-1 rounded-full bg-gold"></div>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Static Display */}
        <div className="hidden md:block">
          <div className="p-4 bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/10 transition-colors mb-6">
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white">
              {renderPrice(price)}
            </div>
            <div className="text-[11px] text-white/40 uppercase tracking-widest mt-0.5 font-bold">APPLICATION PRICE</div>
            {priceSub && <div className="text-gold/60 text-[9px] mt-0.5 font-bold">{priceSub}</div>}
          </div>

          <div className="space-y-3 flex-1 text-left">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-white/70 text-[14px] font-medium group-hover:text-white transition-colors leading-tight">
                <div className="w-4 h-4 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                  <div className="w-1 h-1 rounded-full bg-gold"></div>
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {!isExpanded && (
        <div className="mt-2 flex md:hidden items-center justify-between text-gold/40 text-[10px] font-bold uppercase tracking-widest group-hover:text-gold transition-colors">
          <span>点击查看详情</span>
          <ChevronRight size={14} />
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.div>
  );
};

const UniversityModule = () => {
  const [activeUni, setActiveUni] = React.useState(0);
  const [expandedMajor, setExpandedMajor] = React.useState<number | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Slide id="sg-universities" accentColor="#10b981" padding="px-4 pt-8 pb-4 md:px-8 md:pt-12 md:pb-6" minHeight="min-h-0">
      <SectionTitle 
        title="新加坡推荐院校" 
        subtitle="名校直通 / Recommended Universities" 
      />
      
      <div className="flex flex-nowrap md:flex-wrap gap-2.5 mb-8 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        {UNIVERSITY_DATA.map((uni, idx) => (
          <button
            key={idx}
            onClick={() => { setActiveUni(idx); setExpandedMajor(null); }}
            className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full font-bold transition-all text-[14px] whitespace-nowrap shrink-0 border shadow-sm ${
              activeUni === idx 
                ? "bg-gradient-to-b from-[#ffffff] via-[#d4af37] to-[#8b6508] text-blue-900 border-white/40 shadow-[0_8px_20px_rgba(212,175,55,0.3)] scale-105" 
                : "bg-gradient-to-b from-[#475569] via-[#1e293b] to-[#0f172a] text-white/60 border-white/5 hover:border-white/20"
            }`}
          >
            {uni.name}
          </button>
        ))}
      </div>

      <motion.div 
        key={activeUni}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 p-6 md:p-8 glass-card rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-gold/5 to-transparent"
      >
        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/20 text-gold rounded-xl md:rounded-2xl flex items-center justify-center border border-gold/30 shadow-lg">
            <Award className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div>
            <h4 className="text-[18px] md:text-[36px] font-bold text-white leading-tight">{UNIVERSITY_DATA[activeUni].name}</h4>
            <p className="text-gold/60 text-[11px] md:text-[13px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium">{UNIVERSITY_DATA[activeUni].englishName}</p>
          </div>
        </div>
        <p className="text-[14px] text-white/80 leading-relaxed font-light">
          {UNIVERSITY_DATA[activeUni].description}
        </p>
      </motion.div>

      <div className="origin-top">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 items-start">
          {UNIVERSITY_DATA[activeUni].majors.map((major, idx) => (
            <div key={idx} className="glass-card rounded-xl overflow-hidden border border-white/5 group">
              <button
                onClick={() => setExpandedMajor(expandedMajor === idx ? null : idx)}
                className="w-full px-5 py-4 flex justify-between items-center hover:bg-white/5 transition-colors text-left"
              >
                <span className="text-[16px] md:text-[22px] font-bold text-white/90 group-hover:text-gold transition-colors">{major.cn}</span>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${expandedMajor === idx ? "bg-gold text-blue-900" : "bg-white/10 text-gold"}`}>
                  <ChevronRight 
                    className={`transition-transform duration-300 ${expandedMajor === idx ? "rotate-90" : ""}`} 
                    size={12} 
                  />
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: expandedMajor === idx ? "auto" : 0, opacity: expandedMajor === idx ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 pt-1 space-y-3 border-t border-white/5 bg-white/5">
                  <div className="flex justify-between items-start gap-2 p-2.5 bg-white/5 rounded-lg border border-white/5">
                    <div className="flex-1">
                      <div className="text-[10px] md:text-[12px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold">English Name</div>
                      <div className="text-[12px] md:text-[14px] text-white/80 font-display font-medium leading-tight">{major.en}</div>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(major.en)}
                      className="p-1.5 bg-white/10 hover:bg-gold hover:text-blue-900 rounded-md transition-all text-gold shrink-0 shadow-sm"
                      title="Copy English Name"
                    >
                      <Copy size={10} />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-10 gap-2">
                    <div className="col-span-3 p-2 bg-white/5 rounded-lg border border-white/5">
                      <div className="text-[10px] md:text-[12px] text-white/40 uppercase tracking-[0.1em] mb-0.5 font-bold">Duration</div>
                      <div className="text-[12px] md:text-[14px] text-gold font-black">{major.duration}</div>
                    </div>
                    <div className="col-span-3 p-2 bg-white/5 rounded-lg border border-white/5">
                      <div className="text-[10px] md:text-[12px] text-white/40 uppercase tracking-[0.1em] mb-0.5 font-bold">Intake</div>
                      <div className="text-[12px] md:text-[14px] text-white/80 font-bold">{major.intake}</div>
                    </div>
                    <div className="col-span-4 p-2 bg-white/5 rounded-lg border border-white/5">
                      <div className="text-[10px] md:text-[12px] text-white/40 uppercase tracking-[0.1em] mb-0.5 font-bold">Tuition Fee</div>
                      <div className="text-[12px] md:text-[14px] text-white/80 font-bold leading-tight">{major.fee}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

const PricingSection = ({ 
  id, 
  country, 
  title, 
  subtitle, 
  tiers 
}: { 
  id: string; 
  country: string; 
  title: string; 
  subtitle: string; 
  tiers: any[] 
}) => {
  const [activeTier, setActiveTier] = React.useState<number | null>(null);

  return (
    <Slide id={id} accentColor="#0ea5e9">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold/60 text-sm font-mono tracking-[0.3em] uppercase mb-4 block">{country}</span>
          <SectionTitle title={title} subtitle={subtitle} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tierData, i) => (
            <PricingCard 
              key={i} 
              {...tierData}
              isExpanded={activeTier === i}
              onToggle={() => setActiveTier(activeTier === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
};
const Slide = ({ children, accentColor = "#c5a059", className = "", id, padding = "px-4 py-12 md:px-8 md:py-12", minHeight = "min-h-screen" }: { children: React.ReactNode, accentColor?: string, className?: string, id?: string, padding?: string, minHeight?: string }) => (
  <section id={id} className={`presentation-section text-white bg-[#003366] ${className} relative overflow-hidden flex flex-col justify-center ${minHeight} ${padding} scroll-mt-[72px] md:scroll-mt-[84px]`}>
    {/* High-end Background Layers */}
    <div className="absolute inset-0 mesh-gradient"></div>
    <div className="absolute inset-0 noise-bg"></div>
    <div className="absolute inset-0 bg-grid-white opacity-10"></div>
    
    {/* Dynamic Shapes */}
    <div className="bg-shape w-[600px] h-[600px] -top-40 -left-40 opacity-20"></div>
    <div className="bg-shape w-[500px] h-[500px] -bottom-20 -right-20 opacity-10" style={{ animationDelay: '-5s' }}></div>
    
    {/* Dynamic Glow Orbs */}
    <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-20 blur-[120px] animate-pulse-slow" style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}></div>
    <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-10 blur-[100px] animate-pulse-slow" style={{ background: `radial-gradient(circle, #ffffff 0%, transparent 70%)` }}></div>
    
    {/* Floating Decorative Elements */}
    <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full animate-slow-spin"></div>
    <div className="absolute bottom-40 left-20 w-16 h-16 border border-white/5 rotate-45 animate-float"></div>
    
    <div className="max-w-[1400px] mx-auto w-full relative z-10">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-10 md:mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 0.6, y: 0 }}
      className="font-display text-gold italic text-[12px] md:text-[13px] mb-3 tracking-[0.3em] uppercase font-bold"
    >
      {subtitle}
    </motion.h2>
    <motion.h3 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="font-display text-[28px] md:text-[42px] font-black leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-gold to-gold/70 drop-shadow-2xl filter contrast-125 tracking-tight"
      style={{ WebkitTextStroke: '0.5px rgba(255,215,0,0.05)' }}
    >
      {title}
    </motion.h3>
    <div className="w-24 h-1.5 bg-gold/40 mt-6 rounded-full mx-auto shadow-sm"></div>
  </div>
);

const TopHeader = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'intro', name: '总介', icon: <Home size={18} /> },
    { id: 'undergrad', name: '本科项目' },
    { id: 'masters', name: '硕士项目' },
    { id: 'academic', name: '学术加持' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[110] bg-[#003366]/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-display text-[24px] font-black text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold tracking-tight leading-tight drop-shadow-sm">
            TopUni Global Academy
          </h1>
        </div>
        
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-4 md:px-8 py-1.5 md:py-2 rounded-lg text-[14px] font-bold transition-all duration-300 flex items-center justify-center ${
                activeTab === tab.id 
                  ? 'bg-gold text-blue-900 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.id === 'intro' ? tab.icon : tab.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const FloatingNav = ({ activeTab }: { activeTab: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (activeTab === 'masters') return null;

  const getNavItems = (): { name: React.ReactNode; id: string; isExternal?: boolean }[] => {
    switch (activeTab) {
      case 'intro':
        return [
          { name: <Home size={22} />, id: "top" },
          { name: "核心竞争优势", id: "undergrad-advantages" },
          { name: "合作院校", id: "global-partners" },
          { name: "名师简介", id: "faculty" },
          { name: "认证课程", id: "academic-qualification" },
          { name: "科研训练", id: "research-training" },
          { name: "学生案例", id: "student-cases" },
        ];
      case 'undergrad':
        return [
          { name: <Home size={22} />, id: "undergrad-path" },
          { name: "精英规划PPAC", id: "premium-planning" },
          { name: "高中升大二(新加坡)", id: "core-value" },
          { name: "初中升本科(新加坡)", id: "junior-undergrad-path" },
          { name: "新加坡推荐院校", id: "sg-universities" },
          { name: "服务流程", id: "service-flow" },
          { name: "申请要求", id: "admission-reqs" },
        ];
      case 'academic':
        return [
          { name: <Home size={22} />, id: "exams-certs" },
          { name: "语言与竞赛", id: "exams-certs" },
          { name: "英国", id: "pricing-uk" },
          { name: "澳洲", id: "pricing-au" },
          { name: "马来西亚", id: "pricing-my" },
          { name: "新加坡 and 香港", id: "pricing-hk-sg" },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  const scrollTo = (id: string, isExternal?: boolean) => {
    if (isExternal) {
      window.open(id, '_blank');
      setIsOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-0 bottom-[20%] z-[100] w-12 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-l-2xl flex items-center justify-center text-gold shadow-2xl group"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ChevronLeft size={28} className="drop-shadow-glow" />
        </motion.div>
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay for clicking outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[85] bg-black/20 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-[calc(72px+5vh)] md:top-[calc(84px+5vh)] w-[80%] md:w-[55%] h-fit max-h-[calc(100vh-72px-10vh)] md:max-h-[calc(100vh-84px-10vh)] z-[90] bg-gradient-to-br from-[#2c3e50] via-[#bdc3c7] to-[#2c3e50] backdrop-blur-3xl border-l border-white/40 shadow-[-30px_0_60px_rgba(0,0,0,0.4)] flex flex-col p-8 md:p-16 overflow-y-auto no-scrollbar rounded-l-[3rem]"
            >
            <div className="mb-2 border-b border-blue-950/20 pb-2 pt-2 md:pt-4">
              <h3 className="font-display text-[22px] md:text-[26px] font-black text-[#1a2a3a] tracking-tighter flex flex-col leading-none">
                导航
                <span className="text-[12px] md:text-[13px] text-[#1a2a3a]/50 uppercase tracking-[0.3em] font-bold mt-1">Navigation</span>
              </h3>
            </div>
            <div className="flex flex-col gap-0.5 md:gap-1">
              {navItems.map((item, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => scrollTo(item.id, item.isExternal)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-left group flex items-center gap-4 py-1"
                >
                  <div className="w-2 h-2 rounded-full bg-[#1a2a3a]/20 group-hover:bg-[#1a2a3a] transition-all group-hover:scale-125 shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"></div>
                  <span className="text-[14px] font-display font-bold text-[#1a2a3a]/80 group-hover:text-[#1a2a3a] group-hover:translate-x-2 transition-all tracking-tight flex items-center gap-2">
                    {item.name}
                    {item.isExternal && <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = React.useState('intro');

  return (
    <div className="no-scrollbar font-sans overflow-x-hidden bg-[#003366] pt-[72px] md:pt-[84px]">
      <TopHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <FloatingNav activeTab={activeTab} />
      
      {activeTab === 'intro' && (
        <>
          {/* Slide 0: Introduction */}
          <Slide id="top" accentColor="#0ea5e9">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="精英留学规划" subtitle="Elite Education Planning" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[14px] text-white/90 leading-relaxed mb-12 font-light"
          >
            覆盖全球近百所知名高校，打破传统留学申请服务，结合当下经济大环境与就业趋势为学子量身打造高性价比的精英留学规划路径，为诸多“疑难杂症”提供合理有效的解决方法。
          </motion.p>
          
          <div className="mt-12">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-display text-[26px] md:text-[36px] font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gold to-gold/80 drop-shadow-2xl filter contrast-125 tracking-tight leading-tight"
              style={{ WebkitTextStroke: '0.5px rgba(255,215,0,0.05)' }}
            >
              世界名校本、硕、博留学
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[14px] text-white/80 mb-8 leading-relaxed"
            >
              我们致力于通过 <span className="text-gold font-bold">TopUni Academic Framework</span>，为每一位有潜力进入世界一流学府的学生提供量身定制的精英升学规划。整个服务体系以您为核心，围绕五大支柱系统展开：
            </motion.p>
            
            <div className="grid grid-cols-1 gap-4 mb-10">
              {[
                { t: "顶层设计与精准定位", d: "基于您的学术兴趣、个性与家庭愿景，我们共同锚定美国、英国、新加坡、香港等顶尖目的地，并精确筛选匹配的院校清单，制定清晰的申请策略。" },
                { t: "个性化能力蓝图构建", d: "这不仅是选专业，更是探索未来。我们将专业选择与长远的职业生涯规划深度结合，系统规划包括背景提升、夏校与科研、领导力项目在内的独特个人档案，打造不可复制的申请竞争力。" },
                { t: "学术与标化考试管理", d: "我们提供科学的国际课程、标化考试全程规划与督导，并与顶尖语言培训机构合作，确保您在申请季前达成优异的语言成绩目标。" },
                { t: "全周期财务与时间规划", d: "我们将协助家庭进行透明的留学预算规划，并制定从启动到入学的详细时间表，确保每一步都高效、经济、从容不迫。" },
                { t: "申请与生涯启航", d: "在申请季，我们的专家团队将亲自指导文书、面试等关键环节。在您获得录取后，我们还将提供职业启航辅导，助力您顺利过渡，赢在大学生涯的起点。" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 md:gap-6 p-5 md:p-6 glass-card rounded-2xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30 shrink-0 text-gold font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h5 className="font-display text-[18px] md:text-[22px] font-bold text-white mb-2">{item.t}</h5>
                    <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed font-light">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[14px] text-white/80 leading-relaxed font-light italic border-l-4 border-gold/50 pl-6 py-2"
            >
              TopUni Academic Framework 不仅是一套升学方案，更是一套培养未来<span className="text-gold font-bold bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold/80 to-gold/60 drop-shadow-sm">精英</span>的成长系统。我们与您和您的家庭结成紧密伙伴，共同致力于实现进入世界顶尖学府的梦想，并为长远成功奠定坚实基础。
            </motion.p>
          </div>
        </div>
          </Slide>

          <Slide id="undergrad-advantages" accentColor="#60a5fa">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="col-span-1 md:col-span-4">
            <SectionTitle title="核心竞争优势" subtitle="项目优势 / Key Advantages" />
            <div className="space-y-4 md:space-y-8">
              {[
                { t: "高水平国际化师资", d: "由全球QS综合排名前50的院校教学专家领衔设计并全程参与指导。", i: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
                { t: "专业机构与院校认证", d: "接受新加坡、澳大利亚、英国、中国香港等多国院校广泛认证。", i: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" /> },
                { t: "全流程入学后服务", d: "指派班主任全程跟进，提供签证、学分认证、入学注册等一站式保障。", i: <Briefcase className="w-5 h-5 md:w-6 md:h-6" /> }
              ].map((a, i) => (
                <div key={i} className="flex gap-4 md:gap-6 p-4 md:p-8 glass-card rounded-xl md:rounded-2xl">
                  <div className="text-gold shrink-0">{a.i}</div>
                  <div>
                    <h4 className="font-display text-[20px] md:text-[24px] font-bold mb-2 md:mb-4 text-white leading-tight">{a.t}</h4>
                    <p className="text-[14px] md:text-[15px] text-white/50 leading-relaxed font-light">{a.d}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <motion.a
              href="https://p.topuni.com.cn/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 md:mt-12 w-full py-4 md:py-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-gold via-gold/80 to-gold font-display text-[18px] md:text-[20px] font-black text-blue-900 text-center shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex items-center justify-center gap-3 group border border-white/20"
            >
              <span>院校信息查询</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
          <div id="global-partners" className="col-span-1 md:col-span-8 scroll-mt-[72px] md:scroll-mt-[84px]">
            <div className="glass-card rounded-xl md:rounded-[3rem] p-4 md:p-10 h-full">
              <div className="flex justify-between items-center mb-8 md:mb-12">
                <h4 className="font-display text-[24px] md:text-[32px] font-bold text-impact tracking-tight">全球主要合作院校分布</h4>
                <Globe className="text-gold animate-slow-spin w-7 h-7 md:w-12 md:h-12 drop-shadow-glow" />
              </div>
              <div className="columns-1 md:columns-2 gap-8 space-y-8">
                {[
                  { r: "🇸🇬 新加坡", s: ["新加坡国立大学 (QS 8)", "南洋理工大学 (QS 26)", "新加坡管理大学 (QS 560)", "新加坡理工大学 (QS 559)", "都柏林大学学院 (QS 171)", "科廷大学 (QS 183)", "考文垂大学 (QS 580)", "纽卡斯尔大学 (QS 173)", "詹姆斯库克大学 (QS 415)", "伦敦城市大学 (QS 328)", "伯明翰大学 (QS 84)", "皇家墨尔本理工大学 (QS 140)", "东伦敦大学 (QS 1000)", "格林威治大学 (QS 690)"] },
                  { r: "🇭🇰 中国香港", s: ["香港大学 (QS 17)", "香港中文大学 (QS 36)", "香港科技大学 (QS 47)", "香港城市大学 (QS 62)", "香港理工大学 (QS 57)", "香港浸会大学 (QS 252)", "香港教育大学 (QS 1000+)", "岭南大学 (QS 1000+)", "香港都会大学 (QS 1000+)", "香港树仁大学 (QS 1000+)", "香港恒生大学 (QS 1000+)", "香港珠海学院 (QS 1000+)", "东华学院 (QS 1000+)", "香港高等教育科技学院 (QS 1000+)"] },
                  { r: "🇦🇺 澳大利亚", s: ["墨尔本大学 (QS 14)", "悉尼大学 (QS 19)", "新南威尔士大学 (QS 19)", "澳国立大学 (QS 34)", "莫纳什大学 (QS 42)", "昆士兰大学 (QS 43)", "阿德莱德大学 (QS 89)", "西澳大学 (QS 72)", "悉尼科技大学 (QS 90)", "科廷大学 (QS 183)", "纽卡斯尔大学 (QS 173)", "皇家墨尔本理工大学 (QS 140)"] },
                  { r: "🇬🇧 英国", s: ["伦敦大学学院 (QS 9)", "爱丁堡大学 (QS 22)", "曼彻斯特大学 (QS 32)", "伦敦国王学院 (QS 40)", "布里斯托大学 (QS 55)", "华威大学 (QS 67)", "格拉斯哥大学 (QS 76)", "南安普顿大学 (QS 81)", "伯明翰大学 (QS 84)", "杜伦大学 (QS 78)", "利兹大学 (QS 75)", "诺丁汉大学 (QS 100)"] },
                  { r: "🇲🇾 马来西亚", s: ["马来亚大学 (QS 60)", "马来西亚理科大学 (QS 137)", "马来西亚国立大学 (QS 159)", "马来西亚博特拉大学 (QS 158)", "思特雅大学 (QS 260)", "马来西亚城市大学 (QS 680)", "泰莱大学 (QS 284)", "双威大学 (QS 1000)", "世纪大学 (QS 1000)"] },
                  { r: "🇲🇴 澳门", s: ["澳门大学 (QS 285)", "澳门科技大学 (QS 440)", "澳门理工大学 (QS 900)", "澳门城市大学 (QS 1000+)", "澳门旅游大学 (QS 1000+)"] },
                  { r: "🇳🇿 新西兰", s: ["奥克兰大学 (QS 65)", "奥塔哥大学 (QS 214)", "怀卡托大学 (QS 235)", "梅西大学 (QS 239)", "惠灵顿维多利亚大学 (QS 244)", "坎特伯雷大学 (QS 256)", "林肯大学 (QS 371)", "奥克兰理工大学 (QS 412)"] },
                  { r: "🇨🇦 加拿大", s: ["多伦多大学 (QS 25)", "不列颠哥伦比亚大学 (QS 38)"] },
                  { r: "🇺🇸 美国", s: ["麻省理工学院 (QS 1)", "哈佛大学 (QS 4)", "斯坦福大学 (QS 5)", "加州理工学院 (QS 10)", "宾夕法尼亚大学 (QS 11)", "加州大学伯克利分校 (QS 12)", "康奈尔大学 (QS 16)", "芝加哥大学 (QS 21)", "普林斯顿大学 (QS 22)", "耶鲁大学 (QS 23)", "约翰霍普金斯大学 (QS 32)", "哥伦比亚大学 (QS 34)", "加州大学洛杉矶分校 (QS 42)", "纽约大学 (QS 43)", "密歇根大学安娜堡分校 (QS 44)", "西北大学 (QS 50)", "卡内基梅隆大学 (QS 58)", "杜克大学 (QS 61)", "德克萨斯大学奥斯汀分校 (QS 66)", "伊利诺伊大学香槟分校 (QS 69)", "加州大学圣地亚哥分校 (QS 72)", "华盛顿大学 (QS 76)", "布朗大学 (QS 79)", "宾夕法尼亚州立大学 (QS 89)", "普渡大学 (QS 99)", "波士顿大学 (QS 108)", "佐治亚理工学院 (QS 114)", "威斯康星大学麦迪逊分校 (QS 116)", "南加州大学 (QS 125)", "加州大学戴维斯分校 (QS 132)", "莱斯大学 (QS 141)", "密歇根州立大学 (QS 197)", "德州农工大学 (QS 154)", "北卡罗来纳大学教堂山分校 (QS 155)", "圣路易斯华盛顿大学 (QS 176)", "加州大学圣塔芭芭拉分校 (QS 178)", "埃默里大学 (QS 196)", "亚利桑那州立大学 (QS 200)", "明尼苏达大学双城分校 (QS 203)", "俄亥俄州立大学 (QS 208)", "佛罗里达大学 (QS 215)", "马里兰大学学院公园分校 (QS 223)", "罗切斯特大学 (QS 236)", "达特茅斯学院 (QS 243)", "范德堡大学 (QS 261)", "凯斯西储大学 (QS 275)", "马萨诸塞大学阿默斯特分校 (QS 275)", "匹兹堡大学 (QS 291)", "乔治城大学 (QS 301)", "亚利桑那大学 (QS 308)", "加州大学欧文分校 (QS 312)", "圣母大学 (QS 318)", "弗吉尼亚大学 (QS 322)", "科罗拉多大学博尔德分校 (QS 332)", "Summer School 美国线上/线下先修学分课程"] },
                  { r: "🇨🇳 中国内地", s: ["上海交通大学 3+1", "上海对外经贸 + RMIT 3+1", "上海对外经贸 + 英国中央兰开夏大学", "西交利物浦大学 - 蒙纳士 2+2 (定向班)", "西交利物浦大学 - 利物浦 2+2 (交换生)", "华东师范大学 3+1", "华东师范大学 2+2 伯明翰", "华东师范大学 2+2 麦考瑞", "上海财经大学 3+1", "上海财经大学 2+2", "武汉理工大学 3+1 (艺术)", "上海交通大学 - 诺丁汉 2+2", "四川大学 3+1", "中央财经大学 3+1", "首都师范大学 3+1", "对外经贸大学 3+1", "上海立信金融 3+1", "上外贤达 3+1", "上海立信金融 2+1", "上外贤达 2+1", "上大温哥华电影学院 2+2", "南京传媒学院 2+2", "华东政法大学 2+2", "上海大学 4+0", "上海理工大学中英 4+0", "北京理工大学 3+0", "沈阳师范大学 4+0", "北京理工大学 4+0"] }
                ].map((item, idx) => (
                  <div key={idx} className="break-inside-avoid space-y-2 mb-8">
                    <h5 className="font-display text-gold text-[24px] font-bold border-b border-white/10 pb-1 md:pb-2 tracking-wider">{item.r}</h5>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-0.5">
                      {item.s.map((school, sIdx) => {
                        const match = school.match(/(.*)\s\((QS\s.*)\)/);
                        if (match) {
                          const [, name, rank] = match;
                          return (
                            <div key={sIdx} className="text-[14px] md:text-[14px] text-white/70 flex items-center gap-1.5 md:gap-2 font-light leading-tight">
                              <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-gold rounded-full shrink-0"></div> 
                              <span>{name}</span>
                              <span className="text-gold/60 font-mono text-[11px] md:text-[10px] ml-1">({rank})</span>
                            </div>
                          );
                        }
                        return (
                          <div key={sIdx} className="text-[14px] md:text-[14px] text-white/70 flex items-center gap-1.5 md:gap-2 font-light leading-tight">
                            <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-gold rounded-full shrink-0"></div> {school}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide id="faculty" accentColor="#1e40af" padding="px-[5%] py-12 md:px-[10%] md:py-12">
        <SectionTitle title="顶尖名校教授领衔指导" subtitle="师资力量 / World-Class Faculty" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-6">
          {[
            { n: "Helen Haste", s: "哈佛大学", t: "荣誉终身教授" },
            { n: "Samuel Kunes", s: "哈佛大学", t: "分子与细胞生物学教授" },
            { n: "John Emerson", s: "耶鲁大学", t: "统计和数据科学教授" },
            { n: "Manolis Kellis", s: "麻省理工学院", t: "计算机体系终身教授" },
            { n: "Pradeep Ravikumar", s: "卡内基萌隆大学", t: "计算机科学教授" },
            { n: "Ronaldo Borja", s: "斯坦福大学", t: "土木工程终身教授" },
            { n: "Nemit Shroff", s: "麻省理工学院", t: "终身教授" },
            { n: "Alexander Ploss", s: "普林斯顿大学", t: "分子生物学教授" },
            { n: "Joshua Winn", s: "普林斯顿大学", t: "天体物理终身教授" },
            { n: "Cheryl Phillips", s: "斯坦福大学", t: "传播学系教授" }
          ].map((p, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="p-3 md:p-8 glass-card rounded-xl md:rounded-3xl text-center group"
            >
              <div className="w-8 h-8 md:w-20 md:h-20 bg-white/10 rounded-full mx-auto mb-2 md:mb-6 overflow-hidden border border-white/20 shadow-xl">
                <img src={`https://picsum.photos/seed/faculty${i}/200/200`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="font-display text-[18px] md:text-[22px] font-bold text-white mb-1 md:mb-2">{p.n}</div>
              <div className="text-[14px] text-gold font-bold mb-0.5 md:mb-2 tracking-widest uppercase">{p.s}</div>
              <div className="text-[14px] text-white/40 font-light">{p.t}</div>
            </motion.div>
          ))}
        </div>
      </Slide>

      <Slide id="curriculum" accentColor="#f59e0b">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div id="academic-qualification" className="col-span-1 md:col-span-5 scroll-mt-[72px] md:scroll-mt-[84px]">
            <SectionTitle title="学术资格认证课程" subtitle="课程模块 01 / Academic Qualification" />
            <div className="glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 overflow-x-auto">
              <table className="w-full text-left text-[14px] md:text-[16px] min-w-[300px]">
                <thead>
                  <tr className="border-b border-white/10 text-white/40">
                    <th className="py-4 font-medium uppercase tracking-widest text-[10px] md:text-[12px]">Unit Title</th>
                    <th className="py-4 font-medium uppercase tracking-widest text-[10px] md:text-[12px]">Credit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Communications in Organisations", "20"],
                    ["Leadership and the Organisation", "20"],
                    ["Financial Awareness", "20"],
                    ["Managing Change", "20"],
                    ["Business Operations", "20"],
                    ["Developing Teams", "20"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 font-light text-white/90">{row[0]}</td>
                      <td className="py-4 text-gold font-bold">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div id="research-training" className="col-span-1 md:col-span-7 scroll-mt-[72px] md:scroll-mt-[84px]">
            <SectionTitle title="科研训练提升课程" subtitle="课程模块 02 / Research Training" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: "商业与市场营销", d: "基于多模态社交媒体数据的新兴消费趋势预测与商业价值挖掘", p: "Manuel Gonzalez Canche (宾大)" },
                { t: "计量经济学", d: "如何做出合理因果推断？线性回归的假设与现实", p: "Donald Robertson (剑桥)" },
                { t: "投资学", d: "超越“买入并持有”——基于定价模型的衍生品基础定价与应用探索", p: "Johannes Ruf (LSE)" },
                { t: "行为经济学", d: "非理性消费行为及心理变化对社会结构的影响", p: "Andrea Bernini (牛津)" },
                { t: "数据科学", d: "机器学习在金融风险评估中的应用与局限性分析", p: "John Emerson (耶鲁)" },
                { t: "计算机视觉", d: "深度学习在医学影像识别中的前沿进展", p: "Manolis Kellis (MIT)" },
                { t: "社会学研究", d: "数字化转型对城市社区互动模式的影响研究", p: "Helen Haste (哈佛)" },
                { t: "环境工程", d: "可持续城市水资源管理系统的优化设计", p: "Ronaldo Borja (斯坦福)" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="p-5 glass-card rounded-2xl"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-display text-gold text-[16px] md:text-[20px] font-bold tracking-wide">{item.t}</h4>
                    <span className="text-[10px] text-white/40 italic font-light">{item.p}</span>
                  </div>
                  <p className="text-[14px] text-white/70 leading-tight font-light">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Slide>
        </>
      )}

      {activeTab === 'undergrad' && (
        <>
          <Slide id="undergrad-path" accentColor="#0ea5e9">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="" subtitle="本科升学规划 / Undergraduate Degree Planning" />
          
          <div className="mb-12">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-display text-[28px] font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gold to-gold/80 drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] filter contrast-125 tracking-tight"
              style={{ WebkitTextStroke: '1px rgba(255,215,0,0.1)' }}
            >
              TopUni 本科升学路径
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[14px] text-white/90 leading-relaxed font-light mb-8"
            >
              TopUni 为广大学子提供全维度、多元化的本科升学路径解决方案，覆盖不同学业基础、升学需求与家庭预算的学生群体，助力学子精准锁定适配赛道，圆梦理想本科院校。
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[14px] text-white/70 leading-relaxed font-light mb-6"
            >
              我们搭建双轨并行的升学体系：一方面深耕体制内高考升学赛道，以高考成绩为核心，提供志愿填报精准规划、海内外院校高考直申全流程服务，对标国内优质本科与全球知名院校；另一方面打造国际标化考试升学体系，围绕雅思、托福、A-Level、AP 等主流标化考试，提供定制化备考与申请规划，无缝衔接世界顶尖大学本科项目。
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[14px] text-white/70 leading-relaxed font-light"
            >
              同时我们布局教育部备案的正规国内联合办学项目，涵盖 4+0、2+2、3+1 等多元培养模式，满足学生差异化就读需求。我们始终坚持 “规划先行” 的升学理念，以筛选高性价比、高适配度的本科升学方案为核心宗旨，为学生的本科升学之路全程保驾护航。
            </motion.p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 mb-8">
            {[
              { t: "打破信息差", d: "深度解析全球名校录取规则，消除升学盲区。", i: <Search className="w-4 h-4 md:w-6 md:h-6" /> },
              { t: "最优性价比", d: "量身定制高适配方案，实现教育投资价值最大化。", i: <Zap className="w-4 h-4 md:w-6 md:h-6" /> },
              { t: "陪跑到目的地", d: "全流程管家式服务，从规划到录取全程护航。", i: <Users className="w-4 h-4 md:w-6 md:h-6" /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-3 md:p-8 glass-card rounded-xl md:rounded-3xl border-t-2 border-gold/30 bg-gradient-to-br from-gold/5 to-transparent text-center"
              >
                <div className="w-8 h-8 md:w-16 md:h-16 bg-gold/20 rounded-lg md:rounded-2xl flex items-center justify-center text-gold mx-auto mb-3 md:mb-6 border border-gold/30">
                  {item.i}
                </div>
                <h5 className="text-white font-bold text-[20px] mb-1 md:mb-4">{item.t}</h5>
                <p className="text-white/60 text-[14px] leading-tight md:leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      <Slide id="premium-planning" className="relative" accentColor="#0ea5e9" padding="px-4 py-3 md:px-8 md:py-5">
        <div className="absolute inset-0 opacity-5 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <h1 className="font-display text-[32px] md:text-[72px] font-black leading-[1.1] md:leading-[1] mb-2 text-impact tracking-tighter shadow-sm">
            精英卓越规划<br/>
            <span className="text-[32px] md:text-[72px] font-bold opacity-90 block mt-1">国际本科升学课程</span>
          </h1>
          <div className="font-display italic text-transparent bg-clip-text bg-gradient-to-b from-[#b8860b] via-[#d4af37] to-[#8b6508] text-[24px] md:text-[64px] mb-8 md:mb-12 tracking-[0.1em] md:tracking-[0.2em] font-bold drop-shadow-xl leading-[1.1] md:leading-tight">Premium Planning Academic Curriculum</div>
          <p className="text-[15px] md:text-[18px] text-white/80 max-w-4xl mx-auto mb-10 md:mb-16 leading-relaxed font-light tracking-wide">
            基于全球认证资历框架一站式国际升学课程<br/>
            <span className="font-medium text-white shadow-sm">注重培养综合学术能力与思维素养，助力直升世界名校本科</span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-white/10 pt-12">
            {[["3-9个月", "快速完成课程"], ["免语言", "无需另考IELTS"], ["120学分", "国际广泛认可"], ["100%", "名校升学衔接"]].map(([v, t], i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-[32px] md:text-[56px] font-bold text-impact mb-2">{v}</div>
                <div className="text-[14px] text-white/50 uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold">{t}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Slide>

      <Slide id="ppac-intro" accentColor="#38bdf8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="col-span-1 md:col-span-5">
            <div className="mb-10">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.8, x: 0 }}
                className="font-display text-gold italic text-[14px] mb-2 tracking-[0.2em] uppercase font-bold"
              >
                项目介绍 / Project Introduction
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-[28px] font-black leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-gold to-gold/80 drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] filter contrast-125 tracking-tight"
                style={{ WebkitTextStroke: '1px rgba(255,215,0,0.1)' }}
              >
                什么是 PPAC 国际升学课程？
              </motion.h3>
              <div className="w-20 h-1 bg-gold/50 mt-4 rounded-full"></div>
            </div>
            <p className="text-white/80 text-[14px] leading-relaxed mb-6 md:mb-10 font-light">
              PPAC 是一项基于全球认证资历框架的一站式国际升学课程。通过“认证课程+学术技能+实践训练”的三维框架，致力于帮助学生在获得权威文凭的同时，全面发展在英语学术环境中所必需的核心竞争力。
            </p>
            <div className="space-y-3 md:space-y-6">
              {[
                "系统性学习商业管理核心知识 (Global Qualification)",
                "完成可获得国际广泛认可的 120 学分文凭",
                "为学生升学提供有力的学术资质支持"
              ].map((t, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 md:gap-4 text-[14px] font-medium text-white/90"
                >
                  <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <CheckCircle2 size={12} className="text-gold md:w-[18px] md:h-[18px]" />
                  </div>
                  <span>{t}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {[
              { t: "学术写作", d: "训练英文学术规范，提升文献综述与论文撰写能力。", i: <BookOpen className="w-4 h-4 md:w-6 md:h-6" /> },
              { t: "学术英语", d: "强化英语学术表达，适应全英文高等教育教学环境。", i: <Languages className="w-4 h-4 md:w-6 md:h-6" /> },
              { t: "分析与洞察", d: "掌握商业数据分析方法，培养敏锐的市场洞察力。", i: <BarChart3 className="w-4 h-4 md:w-6 md:h-6" /> },
              { t: "协作与洞察", d: "强化团队协作能力，通过案例研讨洞察商业本质。", i: <Users className="w-4 h-4 md:w-6 md:h-6" /> },
              { t: "实用计算机技能", d: "掌握高效办公与科研工具，提升数字化时代竞争力。", i: <Monitor className="w-4 h-4 md:w-6 md:h-6" /> },
              { t: "批判性思维", d: "建立严谨逻辑体系，培养独立思考与问题解决能力。", i: <Brain className="w-4 h-4 md:w-6 md:h-6" /> },
              { t: "学术工作坊", d: "定制化课题研讨，模拟学术演讲，提升综合素养。", i: <Lightbulb className="w-4 h-4 md:w-6 md:h-6" /> },
              { t: "本科专业复盘课", d: "优秀学长学姐分享，助力入学后GPA管理与规划。", i: <GraduationCap className="w-4 h-4 md:w-6 md:h-6" /> }
            ].map((m, i) => (
              <div key={i} className="p-3 md:p-5 glass-card rounded-lg md:rounded-2xl flex flex-col items-center text-center">
                <div className="text-gold mb-2 md:mb-4">{m.i}</div>
                <h4 className="font-display text-[16px] md:text-[18px] font-bold text-white mb-2">{m.t}</h4>
                <p className="text-[14px] text-white/60 leading-tight font-light">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      <Slide id="core-value" accentColor="#0ea5e9">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
              <div className="md:col-span-8">
                <SectionTitle title="高中先修学分，毕业直升大二" subtitle="核心价值 / Core Value" />
                <div className="mb-6">
                  <h4 className="font-display italic text-transparent bg-clip-text bg-gradient-to-b from-[#b8860b] via-[#d4af37] to-[#8b6508] font-black text-[24px] mb-3 tracking-wider uppercase drop-shadow-sm">快、准、稳、省</h4>
                  <p className="text-white/70 text-[14px] leading-relaxed font-light">
                香港和新加坡作为主流热门留学目标选择，我们推出PPAC精英规划学术课程，针对高二在读及以上的学生，通过在线灵活学习完成后入读世界名校新加坡校区，如爱尔兰都柏林大学新加坡校区QS118名，科廷大学新加坡分校QS170名，英国考文垂大学新加坡校区。有意向赴香港的学生，可选择多所知名学府，如岭南大学、都会大学、树仁大学、香港高等教育科技学院等。
              </p>
            </div>
            <p className="text-white/90 text-[14px] leading-relaxed mb-4 md:mb-8 font-medium">
              高中在读期间学习本课程获得120学分，赴新加坡继续攻读本科大二最快1.5年毕业。
            </p>
            <div className="space-y-3 md:space-y-6">
              {[
                "免语言、免高考、国内学习3-9个月",
                "18岁上本科、20岁读硕士，领先同龄人3年入职场",
                "节省至少25万费用（省掉大一学费和生活费）",
                "精准指定即录取，无需多选、不赌概率。"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 md:gap-4"
                >
                  <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-cyan-400/20 flex items-center justify-center border border-cyan-400/30 shrink-0 mt-0.5 md:mt-1">
                    <Zap size={12} className="text-gold md:w-[18px] md:h-[18px]" />
                  </div>
                  <span className="text-[14px] text-white/80 leading-snug">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 relative">
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-6">
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-card p-3 md:p-10 rounded-xl md:rounded-[2.5rem] border-cyan-400/20 relative overflow-hidden group flex flex-col justify-center"
              >
                <div className="absolute -right-10 -bottom-10 w-24 md:w-40 h-24 md:h-40 bg-cyan-400/10 rounded-full blur-2xl md:blur-3xl group-hover:bg-cyan-400/20 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-[24px] md:text-[28px] font-black text-impact leading-none mb-1 md:mb-2 text-center md:text-left">1.5年</div>
                  <div className="text-gold text-[10px] md:text-[14px] uppercase tracking-[0.1em] md:tracking-[0.3em] font-bold text-center md:text-left">最快本科毕业</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-card p-3 md:p-8 rounded-xl md:rounded-[2rem] border-white/10 flex flex-col justify-center"
              >
                <div className="text-[24px] md:text-[28px] font-black text-impact mb-0.5 md:mb-1 text-center md:text-left">21岁</div>
                <div className="text-white/60 text-[10px] md:text-[14px] uppercase tracking-widest font-medium text-center md:text-left">研究生毕业</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-card p-3 md:p-8 rounded-xl md:rounded-[2rem] border-white/10 flex flex-col justify-center"
              >
                <div className="text-[24px] md:text-[28px] font-black text-impact mb-0.5 md:mb-1 text-center md:text-left">25万+</div>
                <div className="text-white/60 text-[10px] md:text-[14px] uppercase tracking-widest font-medium text-center md:text-left">节省留学费用</div>
              </motion.div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide id="junior-undergrad-path" accentColor="#0ea5e9">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
              <div className="md:col-span-8">
                <SectionTitle title="初中毕业直升新加坡本科" subtitle="Academic Curriculum" />
            <div className="mb-6">
              <h4 className="font-display italic text-transparent bg-clip-text bg-gradient-to-b from-[#b8860b] via-[#d4af37] to-[#8b6508] font-black text-[24px] mb-3 tracking-wider uppercase drop-shadow-sm">Premium Planning</h4>
              <div className="space-y-3 md:space-y-6">
                {[
                  { label: "学制", value: "3个月国内+6个月新加坡" },
                  { label: "对象", value: "年满16周岁，英文基础良好" },
                  { label: "优势", value: "中英双语教学，免雅思，100%升本科" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 md:gap-4"
                  >
                    <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-cyan-400/20 flex items-center justify-center border border-cyan-400/30 shrink-0 mt-0.5 md:mt-1">
                      <Zap size={12} className="text-gold md:w-[18px] md:h-[18px]" />
                    </div>
                    <span className="text-[14px] text-white/80 leading-snug">
                      <span className="text-gold font-bold mr-2">{item.label}：</span>{item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h5 className="font-display text-white font-bold text-[18px] mb-4 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-gold"></div>
                升学院校 (新加坡校区，学制 2-2.5年)
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  { n: "伯明翰大学", r: "QS76" },
                  { n: "都柏林大学学院", r: "QS118" },
                  { n: "科廷大学", r: "QS170" },
                  { n: "考文垂大学", r: "QS541" },
                  { n: "格林威治大学", r: "QS630" },
                  { n: "皇家墨尔本理工", r: "QS125" }
                ].map((u, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-3 md:p-4 rounded-xl border border-white/5 flex flex-col justify-center hover:border-gold/30 transition-all group"
                  >
                    <div className="text-white text-[14px] font-bold group-hover:text-gold transition-colors">{u.n}</div>
                    <div className="text-gold font-mono text-[14px] opacity-80">{u.r}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 relative">
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-6">
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-card p-3 md:p-10 rounded-xl md:rounded-[2.5rem] border-gold/20 relative overflow-hidden group flex flex-col justify-center"
              >
                <div className="absolute -right-10 -bottom-10 w-24 md:w-40 h-24 md:h-40 bg-gold/10 rounded-full blur-2xl md:blur-3xl group-hover:bg-gold/20 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-[24px] md:text-[28px] font-black text-impact leading-none mb-1 md:mb-2 text-center md:text-left">13.8万</div>
                  <div className="text-gold text-[10px] md:text-[14px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-center md:text-left">
                    项目费用 (RMB) <br/>
                    <span className="text-[10px] md:text-[14px] opacity-60 font-medium lowercase">(含国内3个月+新加坡6个月)</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-card p-3 md:p-8 rounded-xl md:rounded-[2rem] border-white/10 flex flex-col justify-center"
              >
                <div className="text-[16px] md:text-[28px] font-black text-impact mb-0.5 md:mb-1 text-center md:text-left whitespace-nowrap">1, 4, 7, 10月</div>
                <div className="text-white/60 text-[10px] md:text-[14px] uppercase tracking-widest font-medium text-center md:text-left">多批次灵活入学</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-card p-3 md:p-8 rounded-xl md:rounded-[2rem] border-white/10 flex flex-col justify-center"
              >
                <div className="text-[16px] md:text-[24px] font-black text-impact mb-0.5 md:mb-1 text-center md:text-left underline decoration-gold/30 underline-offset-4">中留服认证</div>
                <div className="text-white/60 text-[10px] md:text-[14px] uppercase tracking-widest font-medium text-center md:text-left">教育部官方认证</div>
              </motion.div>
            </div>
          </div>
        </div>
      </Slide>

      <UniversityModule />

      <Slide id="service-reqs" accentColor="#0ea5e9">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div id="service-flow" className="col-span-1 md:col-span-7 scroll-mt-[72px] md:scroll-mt-[84px]">
            <SectionTitle title="全流程管家式服务清单" subtitle="服务体系 / Service Ecosystem" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
              {[
                { t: "入学准备", s: ["选校规划", "选课规划", "课程跟进", "递交申请", "办理签证", "学分认证"] },
                { t: "学习支持", s: ["入学报到与注册", "建立沟通群组", "学业咨询", "邮箱托管"] },
                { t: "生活保障", s: ["接机服务", "本地顾问", "特殊协助"] },
                { t: "活动与技能提升", s: ["节日活动", "学习深造", "实习就业"] }
              ].map((cat, i) => (
                <div key={i} className="p-4 md:p-10 glass-card rounded-xl md:rounded-[2.5rem] border border-white/10">
                  <h4 className="font-display text-gold text-[28px] font-bold mb-4 md:mb-8 flex items-center gap-2 md:gap-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                    {cat.t}
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {cat.s.map((item, idx) => (
                      <span key={idx} className="text-[14px] bg-white/10 px-2 md:px-6 py-1 md:py-3 rounded-lg md:rounded-2xl border border-white/10 text-white/90 font-medium hover:bg-white/20 transition-all hover:scale-105 cursor-default shadow-sm">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="admission-reqs" className="col-span-1 md:col-span-5 scroll-mt-[72px] md:scroll-mt-[84px]">
            <SectionTitle title="申请要求" subtitle="准入标准 / Requirements" />
            <div className="space-y-4 md:space-y-6">
              {[
                { t: "学历背景", d: "高中在读或同等学历及以上学生", i: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" /> },
                { t: "综合素质", d: "身体健康，学习成绩良好，有较好团队合作精神", i: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
                { t: "语言能力", d: "英语能够进行沟通交流", i: <Globe className="w-5 h-5 md:w-6 md:h-6" /> },
                { t: "独立能力", d: "有良好的学习能力和独立自主的生活能力", i: <Zap className="w-5 h-5 md:w-6 md:h-6" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 glass-card rounded-xl md:rounded-2xl"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 text-gold flex items-center justify-center rounded-xl md:rounded-2xl shrink-0 border border-white/10">{item.i}</div>
                  <div>
                    <h5 className="font-display text-[20px] font-bold text-white mb-0.5 md:mb-1">{item.t}</h5>
                    <p className="text-[14px] text-white/50 font-light">{item.d}</p>
                  </div>
                </motion.div>
              ))}

              <motion.a
                href="https://p.topuni.com.cn/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full py-5 px-8 rounded-2xl font-display font-black text-[20px] tracking-[0.2em] text-[#003366] 
                           bg-gradient-to-b from-[#ffffff] via-[#e2e8f0] to-[#cbd5e1]
                           shadow-[0_10px_25px_rgba(0,0,0,0.4),inset_0_2px_1px_rgba(255,255,255,1)]
                           border border-white/40 flex items-center justify-center gap-3
                           relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <Search size={22} className="text-[#003366]/70" />
                费用查询
              </motion.a>
            </div>
          </div>
        </div>
      </Slide>
        </>
      )}

      {activeTab === 'masters' && (
        <Slide id="masters-path" accentColor="#f59e0b">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="" subtitle="硕士升学规划 / Master's Degree Planning" />
          
          <div className="mb-12">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-display text-[26px] md:text-[36px] font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gold to-gold/80 drop-shadow-2xl filter contrast-125 tracking-tight leading-tight"
              style={{ WebkitTextStroke: '0.5px rgba(255,215,0,0.05)' }}
            >
              TopUni 硕士留学路径
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[14px] text-white/90 leading-relaxed font-light"
            >
              我们为优秀的本科在读和毕业生提供最优硕士升学解决方案，不仅仅是被动的递交申请，更是通过<span className="text-gold font-bold">学术内推</span>、<span className="text-gold font-bold">学术背景提升</span>、<span className="text-gold font-bold">科研领域专注</span>、<span className="text-gold font-bold">定向大厂实习</span>等方式，让学生成为<span className="text-gold font-bold bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold/80 to-gold/60 drop-shadow-sm text-[24px]">“六边形战士”</span>，拿到最心仪的Offer。
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {[
              { r: "英联邦国家", d: "英国、澳大利亚、新西兰等英联邦 QS 前 100 知名大学", i: <Globe className="w-5 h-5 md:w-6 md:h-6" /> },
              { r: "港新地区", d: "新加坡国立大学、南洋理工大学、香港八大公立大学", i: <MapPin className="w-5 h-5 md:w-6 md:h-6" /> },
              { r: "马来西亚", d: "马来西亚五强公立大学及 QS 前列的私立大学", i: <Award className="w-5 h-5 md:w-6 md:h-6" /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-4 md:p-6 glass-card rounded-2xl border-t-2 border-gold/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gold shrink-0 scale-110">{item.i}</div>
                  <h5 className="text-white font-bold text-[18px] md:text-[22px] tracking-tight">{item.r}</h5>
                </div>
                <p className="text-white/60 text-[14px] leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 md:space-y-8 mb-16">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-display text-[26px] md:text-[36px] font-black mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-gold to-gold/80 drop-shadow-2xl filter contrast-125 tracking-tight leading-tight"
              style={{ WebkitTextStroke: '0.5px rgba(255,215,0,0.05)' }}
            >
              <span className="animate-pulse inline-block mr-2 text-white">🔥</span>特别推荐直录项目
            </motion.h4>

            {[
              {
                no: "No.1",
                school: "香港中文大学深圳校区",
                major: "可持续发展社会科学硕士",
                desc: "在全球积极推进可持续发展的浪潮中，社会各界对可持续发展专业人才的需求日益迫切。为响应这一时代号召，我们隆重推出可持续发展社会科学硕士项目，致力于为可持续发展领域精心培育一批具备跨学科视野与卓越实践能力的专业精英。",
                advantage: "深圳校区就读，无需出国出境，超一流认可度与含金量香港中文大学硕士。",
                icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />
              },
              {
                no: "No.2",
                school: "香港教育大学",
                major: "多元领域教育学硕士",
                desc: "日益增强的香港高等教育改革与多元化教育需求不断，香港教育大学作为香港唯一以师范教育为本的公立大学，依托其深厚的教育底蕴，提供多个高度专业化的教育学硕士方向。课程注重理论与实践紧密结合，多数方向包含实习或实地学习环节。",
                advantage: "香港公立八大名校之一，专注教育学相关专业。",
                icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8" />
              },
              {
                no: "No.3",
                school: "新加坡科技与设计大学",
                major: "科技与设计理学硕士",
                desc: "新加坡科技与设计大学（SUTD）作为与美国麻省理工学院（MIT）深度合作的新加坡公立大学，其科技与设计理学硕士项目旨在培养能够引领未来产业变革的科技设计精英。该项目以高强度、沉浸式的项目制学习为核心，强调从概念到原型的全流程实践。",
                advantage: "新加坡公立大学，与MIT合作创立，其工程教育在全球享有盛誉，提供全英文及双语授课方向。",
                icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />
              }
            ].map((proj, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden group scale-90 md:scale-100 origin-left"
              >
                <div className="absolute top-0 right-0 p-4 md:p-6 text-gold/10 group-hover:text-gold/20 transition-colors">
                  {proj.icon}
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="px-3 py-1 bg-gold/20 rounded-lg text-gold font-black text-[28px] border border-gold/30">
                        {proj.no}
                      </div>
                      <h5 className="text-white font-bold text-[18px] md:text-[22px] tracking-tight">{proj.school}</h5>
                    </div>
                    <div className="text-gold font-medium mb-3 md:mb-4 text-[14px]">{proj.major}</div>
                    <p className="text-white/60 text-[14px] leading-relaxed mb-4 md:mb-6">{proj.desc}</p>
                    <div className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-gold text-[14px] font-bold uppercase tracking-widest mb-1 md:mb-2">项目优势</div>
                      <div className="text-white/90 text-[14px]">{proj.advantage}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 md:p-8 glass-card rounded-2xl md:rounded-3xl border-2 border-gold/20 bg-gradient-to-br from-gold/5 to-transparent"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gold text-blue-900 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h4 className="text-[24px] md:text-[32px] font-bold text-white tracking-tight">申请条件</h4>
            </div>
            <p className="text-[14px] text-white/90 font-light leading-relaxed">
              具备<span className="text-gold font-bold">本科学历</span>，可<span className="text-gold font-bold">内推优化 GPA 门槛</span>，灵活的语言要求。<span className="text-gold font-bold ml-2 underline decoration-gold/30 underline-offset-4">不录取全额退款。</span>
            </p>
          </motion.div>
        </div>
        </Slide>
      )}

      {activeTab === 'academic' && (
        <>
          <Slide id="exams-certs" accentColor="#8b5cf6">
            <div className="max-w-6xl mx-auto">
              <SectionTitle title="语言考试与国际证书" subtitle="学术加持 / Language & Certificates" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-6 glass-card rounded-2xl border-l-4 border-gold"
                  >
                    <p className="text-[14px] text-white font-medium leading-relaxed">
                      我们不做交付不了结果的培训，我们是让学生努力了就有结果！
                    </p>
                    <p className="text-[14px] text-white/70 mt-4">
                      多种语言考试管理和国际证书为学生的战力加码！
                    </p>
                  </motion.div>
                  
                  <div className="space-y-4">
                    {[
                      { t: "🇨🇦 加高", d: "OSSD 白名单实体加高，证书+成绩单+推荐信，OEN学籍正规可查" },
                      { t: "🇺🇸 美高", d: "线上/线下，完整AP成绩单+推荐信，CEEB CODE可查" },
                      { t: "🇬🇧 英高", d: "A level预估分+成绩单+推荐信" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 p-4 glass-card rounded-xl border border-white/5"
                      >
                        <div className="text-gold font-bold text-[18px] md:text-[20px] shrink-0 tracking-wide">{item.t}</div>
                        <div className="text-[14px] md:text-[16px] text-white/60 leading-relaxed">{item.d}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="p-8 glass-card rounded-[2.5rem] border border-white/10 text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                  <h4 className="font-display text-[24px] md:text-[32px] font-bold text-impact mb-8">考试辅助团队助力出分</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { n: "雅思", i: <Languages className="w-4 h-4 md:w-5 md:h-5" /> },
                      { n: "托福", i: <Globe className="w-4 h-4 md:w-5 md:h-5" /> },
                      { n: "Duolingo", i: <Zap className="w-4 h-4 md:w-5 md:h-5" /> },
                      { n: "GRE", i: <BarChart3 className="w-4 h-4 md:w-5 md:h-5" /> },
                      { n: "ACT", i: <Monitor className="w-4 h-4 md:w-5 md:h-5" /> },
                      { n: "SAT", i: <BookOpen className="w-4 h-4 md:w-5 md:h-5" /> },
                      { n: "MUET", i: <FileText className="w-4 h-4 md:w-5 md:h-5" /> },
                      { n: "国际竞赛", i: <Trophy className="w-4 h-4 md:w-5 md:h-5" /> }
                    ].map((exam, i) => (
                      <div key={i} className="py-4 bg-white/5 rounded-xl border border-white/5 text-gold font-bold text-[16px] md:text-[20px] shadow-sm flex items-center justify-center gap-2 px-2">
                        <div className="text-gold/70">{exam.i}</div>
                        <span className="whitespace-nowrap">{exam.n}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[14px] md:text-[16px] text-white/40 mt-8 italic font-light">
                    Professional Support Team for Guaranteed Success
                  </p>
                </motion.div>
              </div>
            </div>
          </Slide>

          <Slide id="service-summary" accentColor="#0ea5e9" minHeight="min-h-0" padding="px-4 pt-4 pb-2 md:px-8 md:pt-6 md:pb-4">
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs md:text-sm font-bold tracking-widest uppercase mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                Global Excellence Since 2012
              </motion.div>
              
              <h2 className="font-display text-[28px] md:text-[72px] font-black leading-tight mb-4 text-impact">
                拓宽视野 · 优化未来<br/>
                <span className="text-[24px] md:text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold italic">TopUni Global Academy</span>
              </h2>
              <p className="text-[13px] md:text-[20px] text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto">
                致力于为卓越学子提供一站式国际化教育解决方案。<br/>
                从学术背景提升到顶尖名校规划，以专业精神筑梦未来全球领袖。
              </p>

              <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-8">
                {[
                  { v: "100+", t: "覆盖院校", s: "全球顶尖学府", i: <Globe size={20} className="text-gold" /> },
                  { v: "99%", t: "申请成功率", s: "历届录取保障", i: <CheckCircle2 size={20} className="text-gold" /> },
                  { v: "100+", t: "专业导师", s: "G5及名校背景", i: <Users size={20} className="text-gold" /> },
                  { v: "2000+", t: "累积学员", s: "遍布全球各地", i: <Award size={20} className="text-gold" /> }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-2 md:p-6 glass-card rounded-xl md:rounded-2xl border border-white/5 hover:border-gold/20 transition-all group"
                  >
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gold/10 flex items-center justify-center mb-2 md:mb-4 mx-auto group-hover:scale-110 transition-transform">
                      {stat.i}
                    </div>
                    <div className="text-[16px] md:text-[36px] font-black text-impact mb-1 md:mb-2">{stat.v}</div>
                    <div className="text-gold font-bold text-[10px] md:text-[16px] mb-1">{stat.t}</div>
                    <div className="hidden md:block text-white/40 text-[10px] md:text-[12px]">{stat.s}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Slide>

          <PricingSection 
            id="pricing-uk"
            country="UNITED KINGDOM"
            title="英国名校申请星级"
            subtitle="服务明细 / Service Pricing"
            tiers={[
              {
                tier: "S 级梯队",
                title: "G5 / 顶尖名校",
                price: "35.0 万起",
                tag: "TOP SELECTION",
                items: ["剑桥大学", "牛津大学", "帝国理工学院", "伦敦大学学院"]
              },
              {
                tier: "A 级梯队",
                title: "王牌名校",
                price: "25.0 万起",
                items: ["爱丁堡大学", "曼彻斯特大学", "伦敦国王学院", "伦敦政治经济学院", "布里斯托大学", "华威大学"]
              },
              {
                tier: "B 级梯队",
                title: "优选名校",
                price: "12.0 万起",
                items: ["格拉斯哥大学", "伯明翰大学", "南安普顿大学", "利兹大学", "杜伦大学", "圣安德鲁斯大学", "谢菲尔德大学", "诺丁汉大学", "伦敦大学玛丽皇后学院"]
              }
            ]}
          />

          <PricingSection 
            id="pricing-au"
            country="AUSTRALIA"
            title="澳洲名校及优选大学"
            subtitle="服务明细 / Service Pricing"
            tiers={[
              {
                tier: "S 级梯队",
                title: "澳洲八大 / 极优名校",
                price: "25.0 万起",
                tag: "TOP SELECTION",
                items: ["墨尔本大学", "悉尼大学", "新南威尔士大学", "蒙纳士大学", "昆士兰大学", "西澳大学"]
              },
              {
                tier: "A 级梯队",
                title: "王牌名校",
                price: "22.0 万起",
                items: ["澳大利亚国立大学", "阿德莱德大学"]
              },
              {
                tier: "B 级梯队",
                title: "优选名校",
                price: "9.8 万起",
                items: ["悉尼科技大学", "皇家墨尔本理工大学", "麦考瑞大学", "伍伦贡大学", "科廷大学", "纽卡斯尔大学", "迪肯大学"]
              }
            ]}
          />

          <PricingSection 
            id="pricing-my"
            country="MALAYSIA"
            title="马来西亚名校优选"
            subtitle="服务明细 / Service Pricing"
            tiers={[
              {
                tier: "公立梯队",
                title: "性价比之王 | 免语言",
                price: "15 万",
                tag: "TOP SELECTION",
                items: ["马来亚大学", "马来西亚理科大学", "马来西亚国民大学", "博特拉大学"]
              },
              {
                tier: "海外分校梯队",
                title: "英澳名校 | QS前100",
                price: "18 万起",
                items: ["南安普顿大学马来西亚校区", "诺丁汉大学马来西亚校区", "莫那什大学马来西亚校区"]
              },
              {
                tier: "私立梯队",
                title: "优选名校 | 免语言",
                price: "4.8 万",
                items: ["思特雅大学(UCSI)", "泰莱大学", "英迪大学", "亚太科技大学", "世纪大学", "马来西亚城市大学", "双威大学"]
              }
            ]}
          />

          <PricingSection 
            id="pricing-hk-sg"
            country="HONG KONG & SINGAPORE"
            title="香港与新加坡优选大学"
            subtitle="服务明细 / Service Pricing"
            tiers={[
              {
                tier: "S 级梯队",
                title: "港新硕士 / 极优选择",
                price: "25 万",
                tag: "TOP SELECTION",
                items: ["香港中文大学(深圳)", "香港岭南大学", "新加坡科技与设计大学"]
              },
              {
                tier: "A 级梯队",
                title: "香港本科优选",
                price: "18-25 万",
                items: ["香港都会大学", "树仁大学", "恒生大学", "高等教育科技学院", "东华学院", "珠海学院", "VTC资助项目 (专+本)"]
              },
              {
                tier: "B 级梯队",
                title: "快、准、稳、省",
                price: "13.8 万",
                priceSub: "免语言直入本科大二",
                items: ["都柏林大学学院 (18个月)", "科廷大学 (20个月)", "格林威治大学 (18个月)", "考文垂大学 (16个月)", "伦敦城市大学 (18个月)"]
              }
            ]}
          />
        </>
      )}

      {activeTab === 'intro' && (
        <>
          {/* Slide 7: Cases */}
          <Slide id="student-cases" accentColor="#1f2937">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="学生案例" subtitle="成功见证 / Student Success" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {[
              { n: "Z同学", d: "女，18岁入读爱尔兰都柏林大学学院（新加坡校区）商业分析专业，现20岁新加坡南洋理工大学硕士在读。" },
              { n: "T同学", d: "男，19岁入读爱尔兰都柏林大学学院（新加坡校区）商业分析专业，获得GPA3.7/4.2，现21岁香港大学硕士在读。" },
              { n: "W同学", d: "国际学校高二弃学加入本项目，在爱尔兰都柏林大学学院（新加坡校区）获得GPA3.3录取到南洋理工大学分析学硕士现已毕业获得新加坡EP就业准证新加坡工作。" },
              { n: "L同学", d: "女，初中毕业17岁加入本项目，现爱尔兰都柏林大学学院（新加坡校区）本科在读，已获得悉尼大学硕士录取。" },
              { n: "X同学", d: "男，18岁加入本项目，在爱尔兰都柏林大学学院（新加坡校区）就读，获得香港城市大学、香港理工大学录取，20岁已入学香港城市大学硕士。" },
              { n: "L同学", d: "高一弃学后加入本项目爱尔兰都柏林大学学院（新加坡校区）获得GPA3.8，录取到香港大学、南洋理工大学、新加坡国立大学硕士，现21岁已港大毕业获得IANG留港工作。" },
              { n: "H同学", d: "H同学，初中毕业后加入本项目国际预科完成后，18岁入学1.5年爱尔兰都柏林大学学院（新加坡校区），现在读已获得GPA3.2，已录取2026年墨尔本大学硕士。" },
              { n: "P同学", d: "男，国内3+1项目弃学入读本项目，GPA3.0申请到悉尼大学、新南威尔士大学硕士现22岁悉尼大学金融硕士毕业，留澳工作年薪11万澳币。" },
              { n: "Y同学", d: "女，中央民族大学2+2国际项目弃学后入读爱尔兰都柏林大学学院（新加坡校区），21岁毕业获得GPA3.3，现英国UCL（G5，伦敦大学学院）硕士在读。" },
              { n: "S同学", d: "高中毕业后在英国利兹大学就读国际大一，挂科退学后入读本项目，现21岁英国爱丁堡大学硕士在读。" },
              { n: "Y同学", d: "女，国内3+1项目入学英国金史密斯大学，遗憾退学后加入本项目，科廷大学新加坡校区在读中，现已录取到墨尔本大学、悉尼大学硕士。" },
              { n: "Y同学", d: "男，国内民办大学大一弃学后加入本项目 爱尔兰都柏林大学学院（新加坡校区），获得GPA3.2，现已毕业并录取到香港理工大学硕士在读，并且已落户上海。" }
            ].map((c, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.01 }}
                className="p-3 md:p-6 glass-card rounded-xl md:rounded-2xl relative group border border-white/5 hover:border-gold/30 transition-all"
              >
                <h5 className="font-display text-[22px] md:text-[28px] font-bold text-gold mb-2 md:mb-3 flex items-center gap-2">
                  {c.n}
                  <div className="h-px flex-1 bg-gold/20"></div>
                </h5>
                <p className="text-[14px] text-white/80 leading-relaxed font-light">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
        </Slide>

        {/* Final Slide: Contact */}
        <Slide className="min-h-[35vh]" accentColor="#0ea5e9">
        <div className="text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            className="inline-block bg-white/5 backdrop-blur-2xl border border-white/10 px-10 md:px-20 py-6 md:py-10 mb-8 md:mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2rem] md:rounded-[4rem] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <span className="relative z-10 font-display font-black text-[56px] md:text-[120px] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gold to-gold/80 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] filter contrast-125">
              TopUni
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gold/30 blur-sm rounded-full"></div>
          </motion.div>
          <h2 className="font-display text-[24px] font-bold mb-6 md:mb-10 text-impact">开启你的国际名校之旅</h2>
          <p className="text-[14px] text-white/70 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed font-light">
            致力于为优秀学子提供通往世界名校的桥梁，通过严谨的学术训练与全方位的升学指导，助力实现学术梦想。
          </p>
          <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto text-[20px] md:text-[24px] font-medium">
            <a 
              href="https://topuni.com.cn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 text-white hover:text-gold transition-colors cursor-pointer group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 glass-card rounded-full flex items-center justify-center border-white/20 shadow-2xl group-hover:scale-110 transition-transform"><Globe size={32} className="text-gold" /></div>
              <span className="tracking-widest">www.topuni.com.cn</span>
            </a>
          </div>
          <div className="mt-5 md:mt-8 pb-4 text-center">
            <p className="text-[14px] text-white/30 font-light tracking-widest">
              © 2026 TopUni Global Academy All rights Reserved.<br />
              <span className="block mt-1">鄂ICP备2026009611号</span>
            </p>
          </div>
        </div>
      </Slide>
        </>
      )}
    </div>
  );
}
