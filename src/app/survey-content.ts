import { Survey } from './survey';

export const SurveyContent: Survey[] = [
    {
        surveyId: 'ProfessorsResidence',
        pageCount: 6,
        surveyTitle: "مهمان سرا و استاد سراهای پردیس",
        pages: [
            {
                pageId: 1,
                questionCount: 5,
                pageTitle: "سیستم تاسیساتی - سرمایشی",
                questions: [
                    {
                        questionId: 1,
                        title: "دمای محیط و عملکرد سیستم سرمایشی",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 2,
                        title: "زمان رسیدگی نیروهای فنی پردیس پس از اعلام بروز مشکل در سیستم",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 3,
                        title: "میزان توانمندی نیروهای فنی پردیس در رفع مشکل",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 4,
                        title: "بطور کلی چه امتیازی به این بخش می دهید",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 5,
                        title: "در صورت تمایل انتقاد و پیشنهاد سازنده خود را، در کادر ذیل وارد نمایید:",
                        type: "comment",
                        answer: ""
                    }
                ]
            },
            {
                pageId: 2,
                questionCount: 5,
                pageTitle: "سیستم تاسیساتی – برقی (روشنایی و  اتصالات)",
                questions: [
                    {
                        questionId: 1,
                        title: "میزان و کیفیت نور محیط",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 2,
                        title: "زمان رسیدگی نیروهای فنی پردیس پس از اعلام بروز مشکل در سیستم",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 3,
                        title: "میزان توانمندی نیروهای فنی پردیس در رفع مشکل",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 4,
                        title: "بطور کلی چه امتیازی به این بخش می دهید",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 5,
                        title: "در صورت تمایل انتقاد و پیشنهاد سازنده خود را در رابطه با این سیستم، در کادر ذیل وارد نمایید:",
                        type: "comment",
                        answer: ""
                    }
                ]
            },
            {
                pageId: 3,
                questionCount: 6,
                pageTitle: "سیستم تاسیساتی – مکانیکی (شیرآلات و لوازم خانگی)",
                questions: [
                    {
                        questionId: 1,
                        title: "کیفیت تجهیزات و شیرآلات",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 2,
                        title: "کیفیت لوازم خانگی موجود شامل: گاز، یخچال، ماشین لباس شویی، ماکروفر، ابگرمکن و غیره",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 3,
                        title: "زمان رسیدگی نیروهای فنی پردیس پس از اعلام بروز مشکل در سیستم",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 4,
                        title: "میزان توانمندی نیروهای فنی پردیس در رفع مشکل",
                        type: "rating",
                        answer: ""
                    },                    
                    {
                        questionId: 5,
                        title: "بطور کلی چه امتیازی به این بخش می دهید",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 6,
                        title: "در صورت تمایل انتقاد و پیشنهاد سازنده خود را در رابطه با این سیستم، در کادر ذیل وارد نمایید:",
                        type: "comment",
                        answer: ""
                    }
                ]
            },
            {
                pageId: 4,
                questionCount: 6,
                pageTitle: "سیستم تاسیساتی – آسانسور",
                questions: [
                    {
                        questionId: 1,
                        title: "کیفیت عملکرد آسانسور",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 2,
                        title: "کیفیت کابین آسانسور",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 3,
                        title: "تعداد خرابی آسانسور در زمان مراجعه شما",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 4,
                        title: "زمان رسیدگی مسئول مهمان سرا پس از اعلام بروز مشکل در سیستم",
                        type: "rating",
                        answer: ""
                    },                    
                    {
                        questionId: 5,
                        title: "بطور کلی چه امتیازی به این بخش می دهید",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 6,
                        title: "در صورت تمایل انتقاد و پیشنهاد سازنده خود را در رابطه با این بخش، در کادر ذیل وارد نمایید:",
                        type: "comment",
                        answer: ""
                    }
                ]
            },
            {
                pageId: 5,
                questionCount: 7,
                pageTitle: "فن آوری اطلاعات",
                questions: [
                    {
                        questionId: 1,
                        title: "کیفیت ارائه خدمات اینترنت محل اقامت",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 2,
                        title: "در صورت ایجاد مشکل در اتصال به اینترنت کدام یک از عوامل زیر علت عدم برقراری ارتباط بوده است",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 3,
                        title: "نحوه اطلاع رسانی این واحد در مورد چگونگی اتصال به شبکه",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 4,
                        title: "زمان رسیدگی نیروهای فنی پردیس پس از اعلام بروز مشکل در سیستم",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 5,
                        title: "میزان توانمندی نیروهای فنی پردیس در رفع مشکل",
                        type: "rating",
                        answer: ""
                    },                    
                    {
                        questionId: 6,
                        title: "بطور کلی چه امتیازی به این بخش می دهید",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 7,
                        title: "در صورت تمایل انتقاد و پیشنهاد سازنده خود را در رابطه با این سیستم، در کادر ذیل وارد نمایید:",
                        type: "comment",
                        answer: ""
                    }
                ]
            },
            {
                pageId: 6,
                questionCount: 7,
                pageTitle: "واحد خدماتی",
                questions: [
                    {
                        questionId: 1,
                        title: "نحوه هماهنگی جهت ارائه سرویس های خدماتی و راهنمایی شما به محل اقامت",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 2,
                        title: "پاکیزگی و نظافت عمومی محل اقامت",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 3,
                        title: "در صورت عدم رضایت لطفا دلایل را در کادر زیر اعلان فرمایید:",
                        type: "comment",
                        answer: ""
                    },
                    {
                        questionId: 4,
                        title: "پاسخگویی و تعامل واحد خدمات در حین بروز مشکل",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 5,
                        title: "سرویس های خدماتی و تفریحی داخل محل اقامت خود شامل تخت خواب، تلویزیون، لوازم آشپزخانه و غیره را چگونه ارزیابی می نمایید.",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 6,
                        title: "زمان رسیدگی نیروهای خدماتی پردیس پس از اعلام بروز مشکل",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 7,
                        title: "آراستگی نیروهای خدمات",
                        type: "rating",
                        answer: ""
                    },                    
                    {
                        questionId: 8,
                        title: "بطور کلی چه امتیازی به این بخش می دهید",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 9,
                        title: "در صورت تمایل انتقاد و پیشنهاد سازنده خود را در رابطه با این واحد، در کادر ذیل وارد نمایید:",
                        type: "comment",
                        answer: ""
                    }
                ]
            }
        ]
    },
    {
        surveyId: 'StudentsResidence',
        pageCount: 2,
        surveyTitle: "خوابگاه های پردیس",
        pages: [
            {
                pageId: 1,
                questionCount: 5,
                pageTitle: "سیستم تاسیساتی - سرمایشی",
                questions: [
                    {
                        questionId: 1,
                        title: "دمای محیط و عملکرد سیستم سرمایشی",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 2,
                        title: "زمان رسیدگی نیروهای فنی پردیس پس از اعلام بروز مشکل در سیستم",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 3,
                        title: "میزان توانمندی نیروهای فنی پردیس در رفع مشکل",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 4,
                        title: "بطور کلی چه امتیازی به این بخش می دهید",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 5,
                        title: "در صورت تمایل انتقاد و پیشنهاد سازنده خود را در رابطه با این سیستم، در کادر ذیل وارد نمایید:",
                        type: "comment",
                        answer: ""
                    }
                ]
            },
            {
                pageId: 2,
                questionCount: 5,
                pageTitle: "سیستم تاسیساتی – برقی (روشنایی و  اتصالات)",
                questions: [
                    {
                        questionId: 1,
                        title: "میزان و کیفیت نور محیط",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 2,
                        title: "زمان رسیدگی نیروهای فنی پردیس پس از اعلام بروز مشکل در سیستم",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 3,
                        title: "میزان توانمندی نیروهای فنی پردیس در رفع مشکل",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 4,
                        title: "بطور کلی چه امتیازی به این بخش می دهید",
                        type: "rating",
                        answer: ""
                    },
                    {
                        questionId: 5,
                        title: "در صورت تمایل انتقاد و پیشنهاد سازنده خود را در رابطه با این سیستم، در کادر ذیل وارد نمایید:",
                        type: "comment",
                        answer: ""
                    }
                ]
            }

        ]
    }

]