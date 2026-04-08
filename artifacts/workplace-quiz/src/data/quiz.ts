export interface Question {
  id: number;
  text: string;
  options: { key: 'A' | 'B' | 'C'; text: string }[];
}

export interface PersonalityResult {
  title: string;
  rank: number;
  diagnosis: string;
  shortDiagnosis: string;
  icon: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: '老板在群里发了个有错别字的重要通知，你的反应是？',
    options: [
      { key: 'A', text: '立刻私信老板提醒（顺手做件好事）' },
      { key: 'B', text: '当没看见，反正不是我发的' },
      { key: 'C', text: '截图发小群，和同事一起嘲笑' },
    ],
  },
  {
    id: 2,
    text: '周五下午5点，老板突然@你说明天要一个方案，你的第一反应是？',
    options: [
      { key: 'A', text: '打开文档开始写，能做多少是多少' },
      { key: 'B', text: '已读不回，周一再说' },
      { key: 'C', text: '在心里把老板骂一顿，然后假装没看见' },
    ],
  },
  {
    id: 3,
    text: '开会的时候，老板突然问"大家有什么意见"，你通常会？',
    options: [
      { key: 'A', text: '直接开口，说自己的真实想法' },
      { key: 'B', text: '低头假装记笔记，等别人先说' },
      { key: 'C', text: '会说，但只说老板爱听的话' },
    ],
  },
  {
    id: 4,
    text: '同事在工作中犯了个错，老板追责，问"这件事谁负责"，你当时？',
    options: [
      { key: 'A', text: '主动说"我来承担一部分责任"' },
      { key: 'B', text: '立刻把视线移开，低头假装整理文件' },
      { key: 'C', text: '脑子里飞速想好甩锅台词，准备开口' },
    ],
  },
  {
    id: 5,
    text: '你在公司的核心价值是？',
    options: [
      { key: 'A', text: '解决问题的人，哪里有锅哪里有我' },
      { key: 'B', text: '完成本职工作，不多不少刚好及格' },
      { key: 'C', text: '让大家开心/让老板觉得一切尽在掌握' },
    ],
  },
  {
    id: 6,
    text: '同事在背后吐槽老板，你一般？',
    options: [
      { key: 'A', text: '参与其中，适度附和' },
      { key: 'B', text: '假装没听见，不参与也不制止' },
      { key: 'C', text: '记在心里，有一天拿出来用' },
    ],
  },
  {
    id: 7,
    text: '周一早上，你到公司的状态通常是？',
    options: [
      { key: 'A', text: '已经坐在工位泡好茶，刷了一下午工作消息' },
      { key: 'B', text: '踩点到，坐在工位才想起来今天周一' },
      { key: 'C', text: '还在路上，发消息给同事帮我带杯咖啡' },
    ],
  },
  {
    id: 8,
    text: '老板布置了一个明显完不成的任务，你会？',
    options: [
      { key: 'A', text: '立刻开始做，做到哪算哪，反正尽力了' },
      { key: 'B', text: '直接找老板说明情况，争取宽限时间' },
      { key: 'C', text: '先发个朋友圈吐槽，然后假装在努力工作' },
    ],
  },
];

export const personalityResults: Record<string, PersonalityResult> = {
  害群之马: {
    title: '害群之马',
    rank: 1,
    icon: '🐴',
    diagnosis:
      '你的存在本身就是一种信号——要么团队变好，要么你走人。老板怕你，同事防你，但你从不在乎。你是那种开会全程不说话，散会后说一句"我觉得不行"然后全员重做的人。',
    shortDiagnosis: '开会不说话，散会一句话全员重做',
  },
  甩锅宗师: {
    title: '甩锅宗师',
    rank: 2,
    icon: '🥷',
    diagnosis:
      '你的人生信条是：这事跟我没关系。这句话你说过无数遍，而且每次都脸不红心不跳。同事集体踩过的坑里，一定有你的脚印；功劳簿上，从来没有你的名字。',
    shortDiagnosis: '功劳簿上没你名字，但锅里一定有你脚印',
  },
  人形摆烂机: {
    title: '人形摆烂机',
    rank: 3,
    icon: '🛌',
    diagnosis:
      '你对工作的最高期待就是"别找我"。周一的事周五做，老板催就假装网络不好。你的人生哲学是：能躺着绝不坐着，能周五绝不周四。绩效面谈时你一脸无辜，其实心里早就在想假期去哪玩了。',
    shortDiagnosis: '能躺着绝不坐着，绩效面谈心里已订好假期',
  },
  汇报表演艺术家: {
    title: '汇报表演艺术家',
    rank: 4,
    icon: '🎭',
    diagnosis:
      '你不是来干活的，你是来演"在干活"的。开会永远第一个冲进去发言，PPT永远做得比内容还长，老板问进展你就开始临场发挥。你不是没有能力，你的能力全部用在了表演上。',
    shortDiagnosis: 'PPT做得比内容还长，能力全用在表演上',
  },
  御用背锅人: {
    title: '御用背锅人',
    rank: 5,
    icon: '🪣',
    diagnosis:
      '每次团队出事，你都是第一个被叫进会议室的。不是因为你技术最差，是因为你最好说话。你默默背着别人的KPI，心态稳得像广场舞大妈，其实内心早就有一万只草泥马在奔腾。',
    shortDiagnosis: '心态稳如广场舞大妈，内心一万只草泥马奔腾',
  },
  开会幽灵: {
    title: '开会幽灵',
    rank: 6,
    icon: '👻',
    diagnosis:
      '你的隐身术已经练到出神入化。群消息永远"已读无回复"，开会永远在线但从不发言。你在工位上，但你的灵魂早已下班。你的存在感约等于零，但你的工资照发，这就是你的生存之道。',
    shortDiagnosis: '人在工位灵魂早已下班，存在感为零工资照发',
  },
  永动打工人: {
    title: '永动打工人',
    rank: 7,
    icon: '⚙️',
    diagnosis:
      '你不加班谁加班？你不卷谁卷？周末不请自来，早上8点已在工位，晚上10点还在发工作消息。你不是热爱工作，你只是不知道怎么停下来。升职加薪你总是第一个被提名，但你的黑眼圈也是全组最深的。',
    shortDiagnosis: '升职第一名，黑眼圈也是全组最深',
  },
  人形复读机: {
    title: '人形复读机',
    rank: 8,
    icon: '🦜',
    diagnosis:
      '老板说的话你原封不动转给全组，不加工、不消化、不判断。老板说往东你就往东，老板说向西你就贴公告说向西要绕路。你是职场传导链上最忠实的一环，也是最没有灵魂的那一环。',
    shortDiagnosis: '老板说什么你传什么，最忠实也最没灵魂',
  },
};

export function calculateResult(answers: ('A' | 'B' | 'C')[]): string {
  const q1 = answers[0];
  const q3 = answers[2];
  const q4 = answers[3];
  const q6 = answers[5];

  if (q3 === 'B' && q4 === 'C') return '开会幽灵';
  if (q1 === 'C' && q6 === 'C') return '害群之马';

  const counts = { A: 0, B: 0, C: 0 };
  answers.forEach((a) => counts[a]++);

  const maxKey = (Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]) as 'A' | 'B' | 'C';

  if (maxKey === 'A') {
    const aCount = counts.A;
    const bCount = counts.B;
    const cCount = counts.C;
    if (aCount >= 5) return '永动打工人';
    if (aCount >= 4 && bCount <= 2) return '害群之马';
    return '御用背锅人';
  }
  if (maxKey === 'B') {
    const bCount = counts.B;
    if (bCount >= 5) return '人形摆烂机';
    if (bCount >= 4) return '开会幽灵';
    return '人形复读机';
  }
  if (maxKey === 'C') {
    const cCount = counts.C;
    if (cCount >= 5) return '甩锅宗师';
    if (cCount >= 4) return '汇报表演艺术家';
    return '甩锅宗师';
  }

  return '人形摆烂机';
}
