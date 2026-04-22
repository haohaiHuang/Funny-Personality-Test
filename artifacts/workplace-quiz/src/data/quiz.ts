export interface Question {
  id: number;
  text: string;
  options: { key: 'A' | 'B' | 'C'; text: string }[];
}

export interface Character {
  id: string;
  name: string;
  era: string;
  role: string;
  avatar: string;
  viewpointType: 'philosophical' | 'social' | 'unexpected';
}

export interface Verdict {
  character: Character;
  opening: string;
  viewpoint: string;
  quote: string;
  summary: string;
}

export interface PersonalityResult {
  title: string;
  rank: number;
  diagnosis: string;
  shortDiagnosis: string;
  icon: string;
  summary: string;
  suggestions: string[];
  trialVerdicts: Verdict[];
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
      { key: 'A', text: '已经坐在工位泡好茶，刷了一小时工作消息' },
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
    summary: '三位法官一致认为，你是团队秩序的破坏者。你的行为不仅影响团队效率，更破坏了团队的信任基础。虽然你可能认为自己只是在坚持原则，但方式方法确实需要改进。',
    suggestions: [
      '学会在会议中及时表达意见，而不是会后发难',
      '考虑团队整体利益，而不仅仅是个人观点',
      '培养协作精神，学会与他人共同解决问题'
    ],
    trialVerdicts: [
      {
        character: {
          id: 'confucius',
          name: '孔子',
          era: '春秋',
          role: '哲学家',
          avatar: '孔子',
          viewpointType: 'philosophical'
        },
        opening: '汝之行为，恰如害群之马，破坏集体秩序',
        viewpoint: '君子喻于义，小人喻于利。汝之行为，只为一己之见，不顾团队和谐。团队者，如同一车之轮，需协调一致方能前行。',
        quote: '君子喻于义，小人喻于利',
        summary: '你的存在本身就是对团队秩序的威胁'
      },
      {
        character: {
          id: 'hobbes',
          name: '霍布斯',
          era: '17世纪',
          role: '政治哲学家',
          avatar: '霍布斯',
          viewpointType: 'social'
        },
        opening: '在自然状态中，人如狼对人',
        viewpoint: '你之行为，如同自然状态中的狼，只考虑自身利益，破坏群体秩序。社会之所以存在，正是为了约束这种本能。',
        quote: '人对人是狼',
        summary: '你是群体秩序的破坏者'
      },
      {
        character: {
          id: 'darwin',
          name: '达尔文',
          era: '19世纪',
          role: '生物学家',
          avatar: '达尔文',
          viewpointType: 'unexpected'
        },
        opening: '从进化论的角度看，你的行为不利于群体生存',
        viewpoint: '在生物进化中，群体合作是生存的关键。你的行为模式在进化中会被自然选择淘汰，因为它不利于群体的延续。',
        quote: '物竞天择，适者生存',
        summary: '你是被自然选择淘汰的类型'
      }
    ]
  },
  甩锅宗师: {
    title: '甩锅宗师',
    rank: 2,
    icon: '🥷',
    diagnosis:
      '你的人生信条是：这事跟我没关系。这句话你说过无数遍，而且每次都脸不红心不跳。同事集体踩过的坑里，一定有你的脚印；功劳簿上，从来没有你的名字。',
    shortDiagnosis: '功劳簿上没你名字，但锅里一定有你脚印',
    summary: '三位法官认为，你的甩锅行为不仅损害了个人信誉，也破坏了团队的责任文化。真正的职场成功需要承担责任，而不是逃避责任。',
    suggestions: [
      '尝试主动承担一个小任务，培养责任意识',
      '记录自己的工作贡献，建立个人品牌',
      '学会说"这个问题我有责任"，而不是推诿',
      '与同事建立互信关系，共同面对挑战'
    ],
    trialVerdicts: [
      {
        character: {
          id: 'nietzsche',
          name: '尼采',
          era: '19世纪',
          role: '哲学家',
          avatar: '尼采',
          viewpointType: 'philosophical'
        },
        opening: '你的行为是虚无主义的逃避',
        viewpoint: '你逃避责任，就像逃避生命的意义。真正的强者敢于承担责任，创造自己的价值。',
        quote: '杀不死我的使我更强大',
        summary: '你在逃避生命的重量'
      },
      {
        character: {
          id: 'machiavelli',
          name: '马基雅维利',
          era: '15世纪',
          role: '政治思想家',
          avatar: '马基雅维利',
          viewpointType: 'social'
        },
        opening: '政治短期主义的典型',
        viewpoint: '即使从权谋的角度看，你的行为也是短视的。长期来看，失去信任比承担一时责任代价更大。',
        quote: '君主必须学会如何不做好人',
        summary: '你的权谋手段是短视的'
      },
      {
        character: {
          id: 'freud',
          name: '弗洛伊德',
          era: '20世纪',
          role: '精神分析学家',
          avatar: '弗洛伊德',
          viewpointType: 'unexpected'
        },
        opening: '超我的缺席',
        viewpoint: '你的行为反映了超我的缺失，本我过度膨胀。你需要培养道德意识，学会自我约束。',
        quote: '本我所在，自我相依',
        summary: '你缺乏道德约束'
      }
    ]
  },
  人形摆烂机: {
    title: '人形摆烂机',
    rank: 3,
    icon: '🛌',
    diagnosis:
      '你对工作的最高期待就是"别找我"。周一的事周五做，老板催就假装网络不好。你的人生哲学是：能躺着绝不坐着，能周五绝不周四。绩效面谈时你一脸无辜，其实心里早就在想假期去哪玩了。',
    shortDiagnosis: '能躺着绝不坐着，绩效面谈心里已订好假期',
    summary: '三位法官认为，你的摆烂行为不仅浪费了个人潜能，也影响了团队的整体效率。适当的休息是必要的，但过度的摆烂会阻碍个人成长。',
    suggestions: [
      '设定小目标，逐步恢复工作状态',
      '找到工作中的兴趣点，增加工作动力',
      '建立良好的时间管理习惯',
      '与积极的同事交流，获取工作灵感'
    ],
    trialVerdicts: [
      {
        character: {
          id: 'camus',
          name: '加缪',
          era: '20世纪',
          role: '哲学家',
          avatar: '加缪',
          viewpointType: 'philosophical'
        },
        opening: '荒谬中的消极抵抗',
        viewpoint: '你在工作中体现的是荒谬中的消极抵抗，但真正的反抗是在荒谬中创造意义，而不是逃避。',
        quote: '真正严肃的哲学问题只有一个，就是自杀',
        summary: '你在逃避生活的荒谬'
      },
      {
        character: {
          id: 'hanfei',
          name: '韩非子',
          era: '战国',
          role: '法家代表',
          avatar: '韩非子',
          viewpointType: 'social'
        },
        opening: '法家视角的怠工',
        viewpoint: '从法家角度看，你的行为是对规则的藐视。一个有序的社会需要每个人都履行自己的职责。',
        quote: '法者，天下之程式也，万事之仪表也',
        summary: '你藐视规则，破坏秩序'
      },
      {
        character: {
          id: 'drucker',
          name: '彼得·德鲁克',
          era: '20世纪',
          role: '管理学家',
          avatar: '德鲁克',
          viewpointType: 'unexpected'
        },
        opening: '效率视角的毒瘤',
        viewpoint: '从管理角度看，你的行为是组织效率的毒瘤。有效的组织需要每个成员都发挥自己的作用。',
        quote: '管理就是界定企业的使命，并激励和组织人力资源去实现这个使命',
        summary: '你是组织效率的毒瘤'
      }
    ]
  },
  汇报表演艺术家: {
    title: '汇报表演艺术家',
    rank: 4,
    icon: '🎭',
    diagnosis:
      '你不是来干活的，你是来演"在干活"的。开会永远第一个冲进去发言，PPT永远做得比内容还长，老板问进展你就开始临场发挥。你不是没有能力，你的能力全部用在了表演上。',
    shortDiagnosis: 'PPT做得比内容还长，能力全用在表演上',
    summary: '三位法官认为，你的表演能力是一种天赋，但应该用在正确的地方。真正的职场成功需要实质内容，而不仅仅是表面功夫。',
    suggestions: [
      '将表演能力转化为实际工作成果',
      '注重内容质量，而不仅仅是形式',
      '学会倾听他人意见，而不是独自表演',
      '建立真实的工作业绩，而非虚假的表演'
    ],
    trialVerdicts: [
      {
        character: {
          id: 'plato',
          name: '柏拉图',
          era: '古希腊',
          role: '哲学家',
          avatar: '柏拉图',
          viewpointType: 'philosophical'
        },
        opening: '洞穴中的表演者',
        viewpoint: '你就像洞穴中的表演者，只关注影子的表演，而忽视了真实的本质。真正的价值在于实质，而非表象。',
        quote: '洞穴寓言',
        summary: '你沉迷于表象，忽视实质'
      },
      {
        character: {
          id: 'goffman',
          name: '戈夫曼',
          era: '20世纪',
          role: '社会学家',
          avatar: '戈夫曼',
          viewpointType: 'social'
        },
        opening: '拟剧理论的讽刺',
        viewpoint: '你将职场视为舞台，过度表演。虽然印象管理重要，但过度表演会失去真实性。',
        quote: '人生是一场表演',
        summary: '你过度表演，失去真实'
      },
      {
        character: {
          id: 'chaplin',
          name: '卓别林',
          era: '20世纪',
          role: '喜剧演员',
          avatar: '卓别林',
          viewpointType: 'unexpected'
        },
        opening: '表演者的自嘲',
        viewpoint: '作为表演者，我理解你的才华，但职场不是舞台。真正的喜剧来自于真实的生活，而不是虚假的表演。',
        quote: '生活就是一部喜剧',
        summary: '职场不是舞台，真实才是关键'
      }
    ]
  },
  御用背锅人: {
    title: '御用背锅人',
    rank: 5,
    icon: '🪣',
    diagnosis:
      '每次团队出事，你都是第一个被叫进会议室的。不是因为你技术最差，是因为你最好说话。你默默背着别人的KPI，心态稳得像广场舞大妈，其实内心早就有一万只草泥马在奔腾。',
    shortDiagnosis: '心态稳如广场舞大妈，内心一万只草泥马奔腾',
    summary: '三位法官认为，你的善良和宽容是优点，但过度的背锅会损害个人利益和职业发展。你需要学会保护自己，建立健康的边界。',
    suggestions: [
      '学会说"不"，建立健康的工作边界',
      '明确责任分工，避免替他人承担责任',
      '提升自我价值，增强职场竞争力',
      '与同事建立平等的合作关系'
    ],
    trialVerdicts: [
      {
        character: {
          id: 'jesus',
          name: '耶稣',
          era: '公元1世纪',
          role: '宗教领袖',
          avatar: '耶稣',
          viewpointType: 'philosophical'
        },
        opening: '替罪羊原型',
        viewpoint: '你扮演了替罪羊的角色，但真正的救赎不是无原则地承担他人的罪过，而是帮助他人认识并承担自己的责任。',
        quote: '爱你的邻居',
        summary: '你的善良被他人利用'
      },
      {
        character: {
          id: 'arendt',
          name: '阿伦特',
          era: '20世纪',
          role: '政治理论家',
          avatar: '阿伦特',
          viewpointType: 'social'
        },
        opening: '平庸之恶的参与者',
        viewpoint: '你的行为体现了平庸之恶——通过沉默和顺从参与了不公正的系统。你需要勇敢地站出来，拒绝成为他人的替罪羊。',
        quote: '平庸之恶',
        summary: '你参与了不公正的系统'
      },
      {
        character: {
          id: 'nietzsche2',
          name: '尼采',
          era: '19世纪',
          role: '哲学家',
          avatar: '尼采',
          viewpointType: 'unexpected'
        },
        opening: '奴隶道德的胜利',
        viewpoint: '你的行为体现了奴隶道德——将自我牺牲视为美德。真正的主人道德是创造自己的价值，而不是为他人牺牲。',
        quote: '超人哲学',
        summary: '你被奴隶道德束缚'
      }
    ]
  },
  开会幽灵: {
    title: '开会幽灵',
    rank: 6,
    icon: '👻',
    diagnosis:
      '你的隐身术已经练到出神入化。群消息永远"已读无回复"，开会永远在线但从不发言。你在工位上，但你的灵魂早已下班。你的存在感约等于零，但你的工资照发，这就是你的生存之道。',
    shortDiagnosis: '人在工位灵魂早已下班，存在感为零工资照发',
    summary: '三位法官认为，你的隐身策略虽然能暂时避免麻烦，但长期来看会阻碍职业发展。职场需要积极参与，而不是消极逃避。',
    suggestions: [
      '尝试在会议中发表至少一次意见',
      '主动参与团队讨论，展示个人价值',
      '建立良好的职场人际关系',
      '找到工作的意义和目标'
    ],
    trialVerdicts: [
      {
        character: {
          id: 'heidegger',
          name: '海德格尔',
          era: '20世纪',
          role: '哲学家',
          avatar: '海德格尔',
          viewpointType: 'philosophical'
        },
        opening: '存在的遗忘',
        viewpoint: '你在工作中体现了存在的遗忘——没有真正地参与和投入。存在的意义在于此在的展开，而不是消极的逃避。',
        quote: '此在的存在',
        summary: '你遗忘了存在的意义'
      },
      {
        character: {
          id: 'parkinson',
          name: '帕金森',
          era: '20世纪',
          role: '管理学家',
          avatar: '帕金森',
          viewpointType: 'social'
        },
        opening: '官僚定律的体现',
        viewpoint: '你的行为符合帕金森定律——在官僚机构中，人们会找到逃避工作的方法。但这种行为最终会损害组织的效率。',
        quote: '帕金森定律',
        summary: '你是官僚主义的产物'
      },
      {
        character: {
          id: 'kafka',
          name: '卡夫卡',
          era: '20世纪',
          role: '作家',
          avatar: '卡夫卡',
          viewpointType: 'unexpected'
        },
        opening: '荒诞体制的幽灵',
        viewpoint: '你就像我小说中的人物，在荒诞的体制中失去了自我。但即使在荒诞中，也应该保持自我的存在。',
        quote: '变形记',
        summary: '你在荒诞中失去了自我'
      }
    ]
  },
  永动打工人: {
    title: '永动打工人',
    rank: 7,
    icon: '⚙️',
    diagnosis:
      '你不加班谁加班？你不卷谁卷？周末不请自来，早上8点已在工位，晚上10点还在发工作消息。你不是热爱工作，你只是不知道怎么停下来。升职加薪你总是第一个被提名，但你的黑眼圈也是全组最深的。',
    shortDiagnosis: '升职第一名，黑眼圈也是全组最深',
    summary: '三位法官认为，你的工作态度值得肯定，但过度的工作会损害身心健康。平衡工作和生活，才能实现可持续的职业发展。',
    suggestions: [
      '设定工作时间边界，避免过度加班',
      '学会放松和休息，恢复精力',
      '培养工作之外的兴趣爱好',
      '关注工作质量，而不仅仅是工作时间'
    ],
    trialVerdicts: [
      {
        character: {
          id: 'marx',
          name: '马克思',
          era: '19世纪',
          role: '哲学家',
          avatar: '马克思',
          viewpointType: 'philosophical'
        },
        opening: '异化劳动的标本',
        viewpoint: '你体现了异化劳动的特征——劳动从手段变成了目的，你被劳动所控制。真正的自由是劳动成为人的本质力量的展现。',
        quote: '异化劳动',
        summary: '你被劳动所异化'
      },
      {
        character: {
          id: 'weber',
          name: '韦伯',
          era: '19世纪',
          role: '社会学家',
          avatar: '韦伯',
          viewpointType: 'social'
        },
        opening: '铁笼中的囚徒',
        viewpoint: '你被困在理性化的铁笼中，被工作的理性逻辑所控制。你需要找到突破铁笼的方法，实现真正的自由。',
        quote: '理性化的铁笼',
        summary: '你被困在理性化的铁笼中'
      },
      {
        character: {
          id: 'sisyphus',
          name: '西西弗斯',
          era: '古希腊',
          role: '神话人物',
          avatar: '西西弗斯',
          viewpointType: 'unexpected'
        },
        opening: '徒劳的永恒',
        viewpoint: '你像我一样，每天重复着看似徒劳的工作。但真正的意义在于面对徒劳时的态度，而不是工作本身。',
        quote: '西西弗斯的神话',
        summary: '你在徒劳中寻找意义'
      }
    ]
  },
  人形复读机: {
    title: '人形复读机',
    rank: 8,
    icon: '🦜',
    diagnosis:
      '老板说的话你原封不动转给全组，不加工、不消化、不判断。老板说往东你就往东，老板说向西你就贴公告说向西要绕路。你是职场传导链上最忠实的一环，也是最没有灵魂的那一环。',
    shortDiagnosis: '老板说什么你传什么，最忠实也最没灵魂',
    summary: '三位法官认为，你的忠实是优点，但缺乏独立思考会阻碍个人成长。职场需要的是有思想的执行者，而不是简单的复读机。',
    suggestions: [
      '培养独立思考能力，对信息进行分析和判断',
      '在执行前先理解任务的目的和意义',
      '提出自己的见解和建议',
      '不断学习和提升自己的专业能力'
    ],
    trialVerdicts: [
      {
        character: {
          id: 'wittgenstein',
          name: '维特根斯坦',
          era: '20世纪',
          role: '哲学家',
          avatar: '维特根斯坦',
          viewpointType: 'philosophical'
        },
        opening: '语言游戏的玩偶',
        viewpoint: '你只是在玩语言游戏，没有真正理解语言背后的意义。语言的意义在于使用，而不仅仅是重复。',
        quote: '语言游戏',
        summary: '你只是语言的玩偶'
      },
      {
        character: {
          id: 'huxley',
          name: '赫胥黎',
          era: '20世纪',
          role: '作家',
          avatar: '赫胥黎',
          viewpointType: 'social'
        },
        opening: '美丽新世界的复制品',
        viewpoint: '你像《美丽新世界》中的公民，被社会规则所规训，失去了独立思考的能力。真正的自由来自于独立的思想。',
        quote: '美丽新世界',
        summary: '你被社会规训所控制'
      },
      {
        character: {
          id: 'foucault',
          name: '福柯',
          era: '20世纪',
          role: '哲学家',
          avatar: '福柯',
          viewpointType: 'unexpected'
        },
        opening: '规训权力下的产物',
        viewpoint: '你是规训权力的产物，被职场的权力关系所塑造。你需要认识到权力的存在，才能突破它的限制。',
        quote: '规训与惩罚',
        summary: '你被权力关系所塑造'
      }
    ]
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
