export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "نتزوج ونبني حياة جميلة معًا 💍",
  "نجلس على الشاطئ في الشتاء ونحتضن بشدة 🌊",
  "نسافر معًا إلى جميع وجهات أحلامنا ✈️",
  "نمشي في المطر ونحن متشابكان الأيدي ولا نفترق 🌧️",
  "نكبر معًا وأحبك أكثر كل يوم 🤍",
];

export const defaultLoveLetterParagraphs: string[] = [
 ` أمونتي، لا اعلم بماذا ابوح لك هل
أنني اعشق تفاصيلك الصغيره التي لا تكاد تُرى？ 
أم عينيك التي تأخذني لعالم لا يوجد به سوانا？ 
أريد أن اعيش بقية حياتي في عينيك
وسوف اكون ممتن لك.
أريد أن أقضي ايام عمري بين أحضانك
وأن استمع للموسيقى المفضله لي ضحكاتك.
وأن أرى وجهك الجميل كل صباح
ويالا سعدي بهذا الصباح
برؤيتك سوف يكون أسعد أيام حياتي
لن اسأم بتأملك ولن اسأم مهما مرت
ثواني ودقائق وساعات وأيام وشهورًا وسنوات
سأبقى أنظر لك وكأنها المره الاول ..`,
];

const ahmedGift: GiftData = {
  senderName: "Yahya",
  receiverName: "Amna",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Check out these awesome surprises made just for you, Amna! ✨",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "إلى الشخص الذي أحبه أكثر من أي شخص،",
  birthdayText:
    `كل عام وأنتِ كل السرور في عُمري 
كل عام والمسرة في عُمرك محبّة`,
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Happy 18th Birthday, Amna! 🎂✨",
  birthdayWishesMessage:
    `أ هو يوم اكتمال القمر؟
أم يوم مولدك يا حبي، يارفيقتي ويا نصفي الآخر
لا أدري هل كلماتي البسيطة تعد هدية تليق بيومك العظيم
فلو تعلم أن حبي لكِ لا يصفه شيء هيّن
حبي لك كبير، عميق، كالبحر بل أكثر
أحبك أنا في كل عام، في كل لحظة تمر علي من عمري
لم ولن تكونِ شخصًا عاديًا في حياتي، فالفارق بينك وبين بقية البشر
أنك كالنجمة تضيء عتمة أيامي
كان قدومك لحياتي خيرًا، ولا يزال كذلك
قدمت بيوم تحمل بيديك الفرح، والسكون
فأصبح هذا اليوم عمرًا مديدًا
كُل عام وانتِ بخير، كل عام وانتِ حبيبتي التي أهواها
كُل عام ونحن معًا في كل لحظات عمرنا
كُل عام وحبنا لا ينتهي
كل عام وانا لك الدفء والأمان ..`,
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "الأشياء الصغيرة التي أحبها فيك",
  loveLetterSubtitle: "",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "أغنيتنا الخاصة",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;