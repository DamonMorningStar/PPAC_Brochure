import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, GraduationCap, Globe, Users, CheckCircle2, 
  Award, Clock, ShieldCheck, Briefcase, Zap, MapPin,
  Star, Search, Phone, Mail, ChevronRight, Shield, Copy
} from 'lucide-react';

const UNIVERSITY_DATA = [
  {
    name: "都柏林大学学院(新加坡校区)",
    englishName: "University College Dublin (Singapore Campus)",
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
    majors: [
      { cn: "计算机科学", en: "Bachelor of Science (Honours) in Computer Science", duration: "12-24 months", intake: "Jan, May, Sep", fee: "S$22,000" },
      { cn: "网络安全与网络", en: "Bachelor of Science (Honours) in Cyber Security and Networks", duration: "12-24 months", intake: "Jan, May, Sep", fee: "S$22,000" },
      { cn: "云计算", en: "Bachelor of Science (Honours) in Cloud Computing", duration: "12-24 months", intake: "Jan, May, Sep", fee: "S$22,000" },
    ]
  },
  {
    name: "格林威治大学(新加坡校区)",
    englishName: "University of Greenwich Singapore",
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
    majors: [
      { cn: "商学学士 (会计/金融)", en: "Bachelor of Commerce", duration: "12-28 months", intake: "Jan, May, Aug", fee: "S$25,506 - S$51,012" },
      { cn: "商业学士", en: "Bachelor of Business", duration: "12-28 months", intake: "Jan, May, Aug", fee: "S$25,506 - S$51,012" },
      { cn: "传播学学士", en: "Bachelor of Communication", duration: "12-28 months", intake: "Jan, May, Aug", fee: "S$25,506 - S$51,012" },
      { cn: "信息技术学士", en: "Bachelor of Information Technology", duration: "12-28 months", intake: "Jan, May, Aug", fee: "S$25,506 - S$51,012" },
      { cn: "电气与电子工程 (荣誉)", en: "Bachelor of Engineering (Honours) (Electrical and Electronic)", duration: "24-48 months", intake: "Jan, May, Aug", fee: "S$40,000+" },
      { cn: "机械工程 (荣誉)", en: "Bachelor of Engineering (Honours) (Mechanical)", duration: "24-48 months", intake: "Jan, May, Aug", fee: "S$40,000+" },
    ]
  }
];

const UniversityModule = () => {
  const [activeUni, setActiveUni] = React.useState(0);
  const [expandedMajor, setExpandedMajor] = React.useState<number | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Slide accentColor="#10b981">
      <SectionTitle 
        title="新加坡推荐院校" 
        subtitle="名校直通 / Recommended Universities" 
      />
      
      <div className="flex flex-nowrap md:flex-wrap gap-3 mb-10 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        {UNIVERSITY_DATA.map((uni, idx) => (
          <button
            key={idx}
            onClick={() => { setActiveUni(idx); setExpandedMajor(null); }}
            className={`px-6 py-3 rounded-full font-bold transition-all text-[14px] md:text-[16px] whitespace-nowrap shrink-0 ${
              activeUni === idx 
                ? "bg-gold text-blue-900 shadow-lg scale-105" 
                : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
            }`}
          >
            {uni.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {UNIVERSITY_DATA[activeUni].majors.map((major, idx) => (
          <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/5 group">
            <button
              onClick={() => setExpandedMajor(expandedMajor === idx ? null : idx)}
              className="w-full px-6 py-5 flex justify-between items-center hover:bg-white/5 transition-colors text-left"
            >
              <span className="text-[18px] md:text-[20px] font-bold text-white/90 group-hover:text-gold transition-colors">{major.cn}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${expandedMajor === idx ? "bg-gold text-blue-900" : "bg-white/10 text-gold"}`}>
                <ChevronRight 
                  className={`transition-transform duration-300 ${expandedMajor === idx ? "rotate-90" : ""}`} 
                  size={18} 
                />
              </div>
            </button>
            
            <motion.div
              initial={false}
              animate={{ height: expandedMajor === idx ? "auto" : 0, opacity: expandedMajor === idx ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 space-y-5 border-t border-white/5 bg-white/5">
                <div className="flex justify-between items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex-1">
                    <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2 font-bold">English Name</div>
                    <div className="text-[16px] text-white/80 font-display font-medium leading-tight">{major.en}</div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(major.en)}
                    className="p-2.5 bg-white/10 hover:bg-gold hover:text-blue-900 rounded-lg transition-all text-gold shrink-0 shadow-sm"
                    title="Copy English Name"
                  >
                    <Copy size={14} />
                  </button>
                </div>
                
                <div className="grid grid-cols-10 gap-4">
                  <div className="col-span-3 p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-white/40 uppercase tracking-[0.1em] mb-1 font-bold">Duration</div>
                    <div className="text-[13px] md:text-[14px] text-gold font-black">{major.duration}</div>
                  </div>
                  <div className="col-span-3 p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-white/40 uppercase tracking-[0.1em] mb-1 font-bold">Intake</div>
                    <div className="text-[13px] md:text-[14px] text-white/80 font-bold">{major.intake}</div>
                  </div>
                  <div className="col-span-4 p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-white/40 uppercase tracking-[0.1em] mb-1 font-bold">Tuition Fee</div>
                    <div className="text-[13px] md:text-[14px] text-white/80 font-bold leading-tight">{major.fee}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </Slide>
  );
};

const Slide = ({ children, className = "", accentColor = "rgba(255,255,255,0.05)" }: { children: React.ReactNode, className?: string, accentColor?: string }) => (
  <section className={`presentation-section text-white bg-[#003366] ${className} relative overflow-hidden flex flex-col justify-center min-h-screen px-4 py-12 md:px-8 md:py-12`}>
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
  <div className="mb-10">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 0.8, x: 0 }}
      className="font-display text-gold italic text-[18px] md:text-[20px] mb-2 tracking-[0.2em] uppercase font-bold"
    >
      {subtitle}
    </motion.h2>
    <motion.h3 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="font-display text-[32px] md:text-[48px] font-bold leading-tight text-impact"
    >
      {title}
    </motion.h3>
    <div className="w-20 h-1 bg-gold/50 mt-4 rounded-full"></div>
  </div>
);

export default function App() {
  return (
    <div className="no-scrollbar font-sans">
      {/* Slide 1: Hero */}
      <Slide className="relative" accentColor="#0ea5e9">
        <div className="absolute inset-0 opacity-5 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <h1 className="font-display text-[48px] md:text-[84px] font-black leading-[1.1] md:leading-[1] mb-2 text-impact">
            精英卓越规划<br/>
            <span className="text-[36px] md:text-[64px] font-bold opacity-90">国际本科升学课程</span>
          </h1>
          <div className="font-display italic text-white text-[24px] md:text-[32px] mb-4 tracking-widest uppercase font-light">Premium Planning Academic Curriculum</div>
          <p className="text-[16px] md:text-[22px] text-white/80 max-w-4xl mx-auto mb-16 leading-relaxed font-light tracking-wide">
            基于全球认证资历框架一站式国际升学课程<br/>
            <span className="font-medium text-white">注重培养综合学术能力与思维素养，助力直升世界名校本科</span>
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
                <div className="font-display text-[32px] md:text-[52px] font-bold text-impact mb-2">{v}</div>
                <div className="text-[10px] md:text-[12px] text-white/50 uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold">{t}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Slide>

      {/* New Slide: Core Value */}
      <Slide accentColor="#0ea5e9">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle title="快、准、稳、省" subtitle="核心价值 / Core Value" />
            <p className="text-white/90 text-[20px] md:text-[24px] leading-relaxed mb-8 font-medium">
              高中在读期间学习本课程，完成后即可赴新加坡诸多名校学习本科。
            </p>
            <div className="space-y-6">
              {[
                "免语言入学要求，减免最多120学分直入大二，最快1.5年本科毕业",
                "18岁入读本科，19.5岁毕业，21岁研究生毕业！",
                "节省至少25万费用（省掉大一学费和生活费）",
                "精准指定即录取，无需多选、不赌概率。"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center border border-cyan-400/30 shrink-0 mt-1">
                    <Zap size={18} className="text-gold" />
                  </div>
                  <span className="text-[18px] md:text-[20px] text-white/80 leading-snug">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <motion.div 
                whileHover={{ y: -10 }}
                className="col-span-2 glass-card p-8 md:p-10 rounded-[2.5rem] border-cyan-400/20 relative overflow-hidden group"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-[56px] md:text-[84px] font-black text-impact leading-none mb-2">1.5年</div>
                  <div className="text-gold text-[16px] md:text-[18px] uppercase tracking-[0.3em] font-bold">最快本科毕业</div>
                  <p className="text-white/40 text-[14px] mt-4 font-light">大幅缩短学制，抢占职场先机</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-card p-6 md:p-8 rounded-[2rem] border-white/10"
              >
                <div className="text-[36px] md:text-[48px] font-black text-impact mb-1">21岁</div>
                <div className="text-white/60 text-[12px] md:text-[14px] uppercase tracking-widest font-medium">研究生毕业</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-card p-6 md:p-8 rounded-[2rem] border-white/10"
              >
                <div className="text-[36px] md:text-[48px] font-black text-impact mb-1">25万+</div>
                <div className="text-white/60 text-[12px] md:text-[14px] uppercase tracking-widest font-medium">节省留学费用</div>
              </motion.div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 2: Introduction */}
      <Slide accentColor="#38bdf8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="col-span-1 md:col-span-5">
            <SectionTitle title="什么是 PPAC 国际升学课程？" subtitle="项目介绍 / Project Introduction" />
            <p className="text-white/80 text-[18px] md:text-[20px] leading-relaxed mb-10 font-light">
              PPAC 是一项基于全球认证资历框架的一站式国际升学课程。通过“认证课程+学术技能+实践训练”的三维框架，致力于帮助学生在获得权威文凭的同时，全面发展在英语学术环境中所必需的核心竞争力。
            </p>
            <div className="space-y-6">
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
                  className="flex items-center gap-4 text-[16px] md:text-[18px] font-medium text-white/90"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <CheckCircle2 size={18} className="text-gold" />
                  </div>
                  <span>{t}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "学术写作与学术英语", d: "训练符合高等教育规范的英文写作与表达，提升文献综述、论文撰写能力。", i: <BookOpen size={32} /> },
              { t: "协作与洞察", d: "通过小组课题与案例研讨，培养团队协作及对商业环境的深度洞察力。", i: <Users size={32} /> },
              { t: "分析方法论与批判思维", d: "引导学生掌握数据与信息分析基本方法，建立逻辑严谨、独立批判的思考模式。", i: <Zap size={32} /> },
              { t: "Academic Workshop", d: "提供定制化课题研讨、学术演讲模拟及研究方法指导，提升解决复杂问题能力。", i: <GraduationCap size={32} /> }
            ].map((m, i) => (
              <div key={i} className="p-8 md:p-10 glass-card rounded-[2rem]">
                <div className="text-gold mb-6">{m.i}</div>
                <h4 className="font-display text-[22px] md:text-[24px] font-bold text-white mb-4">{m.t}</h4>
                <p className="text-[14px] md:text-[16px] text-white/60 leading-relaxed font-light">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 3: Advantages */}
      <Slide accentColor="#60a5fa">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="col-span-1 md:col-span-4">
            <SectionTitle title="核心竞争优势" subtitle="项目优势 / Key Advantages" />
            <div className="space-y-6 md:space-y-8">
              {[
                { t: "高水平国际化师资", d: "由全球QS综合排名前50的院校教学专家领衔设计并全程参与指导。", i: <Users /> },
                { t: "专业机构与院校认证", d: "接受新加坡、澳大利亚、英国、中国香港等多国院校广泛认证。", i: <ShieldCheck /> },
                { t: "全流程入学后服务", d: "指派班主任全程跟进，提供签证、学分认证、入学注册等一站式保障。", i: <Briefcase /> }
              ].map((a, i) => (
                <div key={i} className="flex gap-6 p-6 md:p-8 glass-card rounded-2xl">
                  <div className="text-gold shrink-0">{a.i}</div>
                  <div>
                    <h4 className="font-display text-[20px] md:text-[22px] font-bold mb-3 text-white">{a.t}</h4>
                    <p className="text-[14px] md:text-[15px] text-white/50 leading-relaxed font-light">{a.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-8">
            <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 h-full">
              <div className="flex justify-between items-center mb-8 md:mb-10">
                <h4 className="font-display text-[24px] md:text-[32px] font-bold text-impact">全球主要合作院校分布</h4>
                <Globe className="text-gold animate-slow-spin" size={32} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { r: "🇸🇬 新加坡", s: ["新加坡国立大学 (QS 8)", "南洋理工大学 (QS 26)", "新加坡管理大学 (QS 560)", "新加坡理工大学 (QS 559)", "都柏林大学学院 (QS 171)", "科廷大学 (QS 183)", "考文垂大学 (QS 580)", "纽卡斯尔大学 (QS 173)", "詹姆斯库克大学 (QS 415)", "伦敦城市大学 (QS 328)", "伯明翰大学 (QS 84)", "皇家墨尔本理工大学 (QS 140)", "东伦敦大学 (QS 1000)", "格林威治大学 (QS 690)"] },
                  { r: "🇭🇰 中国香港", s: ["香港大学 (QS 17)", "香港中文大学 (QS 36)", "香港科技大学 (QS 47)", "香港城市大学 (QS 62)", "香港理工大学 (QS 57)", "香港浸会大学 (QS 252)", "香港教育大学 (QS 1000+)", "岭南大学 (QS 1000+)", "香港都会大学 (QS 1000+)", "香港树仁大学 (QS 1000+)", "香港恒生大学 (QS 1000+)", "香港珠海学院 (QS 1000+)", "东华学院 (QS 1000+)", "香港高等教育科技学院 (QS 1000+)"] },
                  { r: "🇦🇺 澳大利亚", s: ["墨尔本大学 (QS 14)", "悉尼大学 (QS 19)", "新南威尔士大学 (QS 19)", "澳国立大学 (QS 34)", "莫纳什大学 (QS 42)", "昆士兰大学 (QS 43)", "阿德莱德大学 (QS 89)", "西澳大学 (QS 72)", "悉尼科技大学 (QS 90)", "科廷大学 (QS 183)", "纽卡斯尔大学 (QS 173)", "皇家墨尔本理工大学 (QS 140)"] },
                  { r: "🇬🇧 英国", s: ["伦敦大学学院 (QS 9)", "爱丁堡大学 (QS 22)", "曼彻斯特大学 (QS 32)", "伦敦国王学院 (QS 40)", "布里斯托大学 (QS 55)", "华威大学 (QS 67)", "格拉斯哥大学 (QS 76)", "南安普顿大学 (QS 81)", "伯明翰大学 (QS 84)", "杜伦大学 (QS 78)", "利兹大学 (QS 75)", "诺丁汉大学 (QS 100)"] },
                  { r: "🇲🇾 马来西亚", s: ["马来亚大学 (QS 60)", "马来西亚理科大学 (QS 137)", "马来西亚国立大学 (QS 159)", "马来西亚博特拉大学 (QS 158)", "思特雅大学 (QS 260)", "马来西亚城市大学 (QS 680)", "泰莱大学 (QS 284)", "双威大学 (QS 1000)", "世纪大学 (QS 1000)"] }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <h5 className="font-display text-gold text-[18px] md:text-[20px] font-bold border-b border-white/10 pb-2 tracking-wider">{item.r}</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                      {item.s.map((school, sIdx) => (
                        <div key={sIdx} className="text-[14px] text-white/70 flex items-center gap-2 font-light leading-tight">
                          <div className="w-1 h-1 bg-gold rounded-full shrink-0"></div> {school}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Singapore Recommended Universities Module */}
      <UniversityModule />

      {/* Slide 4: Faculty */}
      <Slide accentColor="#1e40af">
        <SectionTitle title="顶尖名校教授领衔指导" subtitle="师资力量 / World-Class Faculty" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {[
            { n: "Helen Haste", s: "哈佛大学", t: "荣誉终身教授" },
            { n: "Samuel Kunes", s: "哈佛大学", t: "分子与细胞生物学教授" },
            { n: "John Emerson", s: "耶鲁大学", t: "统计和数据科学教授" },
            { n: "Manolis Kellis", s: "麻省理工学院", t: "计算机体系终身教授" },
            { n: "Pradeep Ravikumar", s: "卡内基梅隆大学", t: "计算机科学教授" },
            { n: "Ronaldo Borja", s: "斯坦福大学", t: "土木工程终身教授" },
            { n: "Nemit Shroff", s: "麻省理工学院", t: "终身教授" },
            { n: "Alexander Ploss", s: "普林斯顿大学", t: "分子生物学教授" },
            { n: "Joshua Winn", s: "普林斯顿大学", t: "天体物理终身教授" },
            { n: "Cheryl Phillips", s: "斯坦福大学", t: "传播学系教授" }
          ].map((p, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="p-6 md:p-8 glass-card rounded-2xl md:rounded-3xl text-center group"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full mx-auto mb-4 md:mb-6 overflow-hidden border-2 border-white/20 shadow-xl">
                <img src={`https://picsum.photos/seed/faculty${i}/200/200`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="font-display text-[18px] md:text-[22px] font-bold text-white mb-1 md:mb-2">{p.n}</div>
              <div className="text-[12px] md:text-[14px] text-gold font-bold mb-1 md:mb-2 tracking-widest uppercase">{p.s}</div>
              <div className="text-[10px] md:text-[12px] text-white/40 font-light">{p.t}</div>
            </motion.div>
          ))}
        </div>
      </Slide>

      {/* Slide 5: Curriculum Details */}
      <Slide accentColor="#f59e0b">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="col-span-1 md:col-span-5">
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
          <div className="col-span-1 md:col-span-7">
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
                    <h4 className="font-display text-gold text-[15px] md:text-[16px] font-bold">{item.t}</h4>
                    <span className="text-[10px] text-white/40 italic font-light">{item.p}</span>
                  </div>
                  <p className="text-[13px] text-white/70 leading-tight font-light">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 6: Service & Requirements */}
      <Slide accentColor="#0ea5e9">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="col-span-1 md:col-span-7">
            <SectionTitle title="全流程管家式服务清单" subtitle="服务体系 / Service Ecosystem" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {[
                { t: "入学准备", s: ["选校规划", "选课规划", "课程跟进", "递交申请", "办理签证", "学分认证"] },
                { t: "学习支持", s: ["入学报到与注册", "建立沟通群组", "学业咨询", "邮箱托管"] },
                { t: "生活保障", s: ["接机服务", "本地顾问", "特殊协助"] },
                { t: "活动与技能提升", s: ["节日活动", "学习深造", "实习就业"] }
              ].map((cat, i) => (
                <div key={i} className="p-8 md:p-10 glass-card rounded-[2rem] md:rounded-[2.5rem] border border-white/10">
                  <h4 className="font-display text-gold text-[22px] md:text-[28px] font-bold mb-6 md:mb-8 flex items-center gap-4">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                    {cat.t}
                  </h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {cat.s.map((item, idx) => (
                      <span key={idx} className="text-[14px] md:text-[16px] bg-white/10 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/10 text-white/90 font-medium hover:bg-white/20 transition-all hover:scale-105 cursor-default shadow-sm">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-5">
            <SectionTitle title="申请要求" subtitle="准入标准 / Requirements" />
            <div className="space-y-4 md:space-y-6">
              {[
                { t: "学历背景", d: "高中在读或同等学历及以上学生", i: <GraduationCap /> },
                { t: "综合素质", d: "身体健康，学习成绩良好，有较好团队合作精神", i: <Users /> },
                { t: "语言能力", d: "英语能够进行沟通交流", i: <Globe /> },
                { t: "独立能力", d: "有良好的学习能力和独立自主的生活能力", i: <Zap /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 md:gap-6 p-5 md:p-6 glass-card rounded-xl md:rounded-2xl"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 text-gold flex items-center justify-center rounded-xl md:rounded-2xl shrink-0 border border-white/10">{item.i}</div>
                  <div>
                    <h5 className="font-display text-[18px] md:text-[20px] font-bold text-white mb-1">{item.t}</h5>
                    <p className="text-[14px] md:text-[15px] text-white/50 font-light">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 7: Fees & Cases */}
      <Slide accentColor="#1f2937">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="col-span-1 md:col-span-6">
            <SectionTitle title="费用明细" subtitle="投资未来 / Expense Detail" />
            <div className="glass-card rounded-[1.5rem] md:rounded-[2rem] overflow-x-auto">
              <table className="w-full text-left text-[14px] md:text-[16px] min-w-[350px]">
                <thead>
                  <tr className="bg-white/5 text-white/40">
                    <th className="p-4 md:p-6 font-medium uppercase tracking-widest text-[10px] md:text-[12px]">名称/地区</th>
                    <th className="p-4 md:p-6 font-medium uppercase tracking-widest text-[10px] md:text-[12px]">课程费</th>
                    <th className="p-4 md:p-6 font-medium uppercase tracking-widest text-[10px] md:text-[12px]">合计</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["🇸🇬 新加坡(直入大二)", "138,000元", "198,000元"],
                    ["🇦🇺 澳大利亚(QS前100)", "138,000元", "198,000元"],
                    ["🇬🇧 英国A类(QS前50)", "138,000元", "398,000元"],
                    ["🇬🇧 英国B类", "138,000元", "198,000元"],
                    ["🇭🇰 香港B类", "138,000元", "298,000元"],
                    ["🇲🇾 马来西亚(英澳分校)", "138,000元", "198,000元"],
                    ["🇲🇾 马来西亚B类", "138,000元", "168,000元"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 md:p-6 font-bold text-white/90">{row[0]}</td>
                      <td className="p-4 md:p-6 text-white/50 font-light">{row[1]}</td>
                      <td className="p-4 md:p-6 text-impact font-black text-[18px] md:text-[20px]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[12px] md:text-[14px] text-white/30 italic font-light">* 成绩优秀者可减免学分直入大二，节省 1.5 年毕业时间。</p>
          </div>
          <div className="col-span-1 md:col-span-6">
            <SectionTitle title="学生案例" subtitle="成功见证 / Student Success" />
            <div className="grid grid-cols-2 gap-3 md:gap-4">
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
                  className="p-6 glass-card rounded-2xl relative group border border-white/5 hover:border-gold/30 transition-all"
                >
                  <h5 className="font-display text-[22px] font-bold text-gold mb-3 flex items-center gap-2">
                    {c.n}
                    <div className="h-px flex-1 bg-gold/20"></div>
                  </h5>
                  <p className="text-[14px] md:text-[15px] text-white/80 leading-relaxed font-light">{c.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Final Slide: Contact */}
      <Slide className="min-h-[70vh]" accentColor="#0ea5e9">
        <div className="text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 text-white font-display font-black text-[48px] md:text-[100px] px-8 md:px-16 py-4 md:py-6 mb-8 md:mb-12 shadow-2xl rounded-[1.5rem] md:rounded-[3rem]"
          >
            PPAC
          </motion.div>
          <h2 className="font-display text-[32px] md:text-[64px] font-bold mb-6 md:mb-10 text-impact">开启你的国际名校之旅</h2>
          <p className="text-[18px] md:text-[24px] text-white/70 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed font-light">
            致力于为优秀学子提供通往世界名校的桥梁，通过严谨的学术训练与全方位的升学指导，助力实现学术梦想。
          </p>
          <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto text-[20px] md:text-[24px] font-medium">
            <a 
              href="https://topuni.com.cn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 text-white hover:text-gold transition-colors cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 glass-card rounded-full flex items-center justify-center border-white/20 shadow-2xl"><Globe size={32} className="text-gold" /></div>
              <span className="tracking-widest">www.topuni.com.cn</span>
            </a>
          </div>
        </div>
      </Slide>
    </div>
  );
}
