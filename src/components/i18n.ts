
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        home: {
          header: {
            title: "We Are ",
            text: "We specialize in delivering innovative technology solutions to help businesses thrive in a dynamic digital landscape.",
            button: "Explore Our Portfolio"
          },
          whyUs: {
            title: "Why Choose Us?",
            text: "At Puentech, we are committed to empowering local businesses with personalized IT solutions that make a real difference. Here’s what sets us apart:",
            customSolutions: "Custom Solutions: ",
            customSolutions_text: "Designed to meet your specific goals.",
            clientCentric: "Client-Centric: ",
            clientCentric_text: "Dedicated to your success at every step.",
            accessibleSupport: "Accessible Support: ",
            accessibleSupport_text: "Always nearby for quick, hands-on assistance.",
            button: "Contact Us Now!"
          },
          secondHeader: {
            title: "Building bridges to a smarter, connected future.",
            button: "Learn More About Us"
          },
          services: {
            title: "Our Services",
            webDevelopment: {
              title: "Web Development",
              text: "Crafting responsive, user-friendly websites."
            },
            backendDevelopment: {
              title: "Backend Development",
              text: "Robust solutions for scalable applications."
            },
            frontendDesign: {
              title: "Frontend Design",
              text: "Visually appealing, interactive interfaces."
            },
            customSoftware: {
              title: "Custom Software",
              text: "Tailored solutions for your unique needs."
            },
            button: "Explore All Services"
          },
          reviews: {
            slide1: {
              author: "John D., Small Business Owner",
              text: "\"Working with PuenTech was an absolute pleasure! They transformed my outdated website into a sleek and modern platform that has already attracted more clients. Highly recommend their services!\""
            },
            slide2: {
              author: "Jane S., Freelancer",
              text: "\"PuenTech's team is incredibly talented and professional. They delivered a top-notch website that exceeded my expectations. I couldn't be happier with the results!\""
            },
            slide3: {
              author: "Michael R., Startup Founder",
              text: "\"From start to finish, the process was seamless. PuenTech not only brought my vision to life but also offered valuable suggestions that enhanced the final product. I'll definitely work with them again!\""
            },
            slide4: {
              author: "Emily S., Marketing Manager",
              text: "\"The team at PuenTech is amazing! They quickly understood our needs and built a website that perfectly showcases our brand. We’ve seen a noticeable increase in engagement since the launch.\""
            }
          }
        },
        about: {
          whoWeAre: "Who We Are?",
          description: "Puentech is a dynamic and innovative software development company dedicated to delivering cutting-edge solutions tailored to our clients’ needs. With a passion for technology and a commitment to excellence, we pride ourselves on crafting high-quality digital experiences that drive success.",
          frontendHeading: "Frontend Technologies",
          backendHeading: "Backend Technologies",
          ourExperienceHeading: "Our Experience",
          ourExperienceDescription: "Our team continually enhances its skills by participating in advanced IT training sessions. These training programs provide us with the latest industry insights and strengthen our ability to deliver innovative and reliable solutions.",
          futureTogetherHeading: "Building the Future Together",
          futureTogetherDescription: "We combine cutting-edge technology, innovative thinking, and a deep understanding of clients' needs to consistently deliver exceptional results.",
          whyChooseHeading: "Why Choose Puentech?",
          expertise: "Expertise Across Technologies:",
          expertise2: " Mastery of both modern and traditional technologies for diverse project requirements.",
          continuousGrowth: "Continuous Growth: ",
          continuousGrowth2: "We stay updated with the latest trends to ensure state-of-the-art solutions.",
          clientCentric: "Client-Centric Approach:",
          clientCentric2: "Collaborative projects to exceed expectations.",
        },
        header: {
            home: "Home",
            about: "About Us",
            services: "Services",
            portfolio: "Portfolio",
            contact: "Contact",
        },
        contact: {
            header: {
              title: "Let's Build Something Great Together!",
              subtitle:
                "Have questions or a project in mind? We're here to help. Reach out today!",
            },
            formSection: {
              heading: "Need a Website",
              heading2: "Let's Talk",
              description:
                "We specialize in turning ideas into stunning online experiences. Contact us now.",
              emailInfo: "Or contact us via",
              email: "puentechcompany@gmail.com"
            },
            faqHeading: "FAQ",
            faq: {
              q1: "How long does it take to build a website?",
              a1:
                "MenageUp is an ERP system designed to streamline your business processes and improve efficiency.",
              q2: "What technologies do you use for development?",
              a2:
                "MenageUp integrates key functionalities such as finance, HR, and operations into one seamless platform.",
              q3: "Do you offer maintenance services?",
              a3:
                "Yes, MenageUp is highly customizable to suit various business needs and workflows."
            },
            form: {
              name: "Name",
              lastName: "Last Name",
              email: "Email",
              message: "Message",
              submit: "Contact Us!"
            },
            cta: {
              title:
                "Not Sure Where to Begin? Schedule a Free Consultation!",
              button: "Book a Call"
            }
          },
          services: {
            header: {
              title: "Where Service Meets Excellence",
              subtitle:
                "Explore our wide range of services tailored to meet your business needs.",
              button: "Get a Free Consultation",
            },
            callToAction: {
              headline: "Let’s Bring Your Ideas to Life!",
              button: "Get in Touch with Us",
            },
            carousel: {
              slide1: {
                title: "Web Development",
                description:
                  "We craft responsive, user-friendly websites using modern frameworks and best practices.",
                keyFeatures: {
                  heading: "Key Features:",
                  feature1: "Full-stack development",
                  feature2: "Custom web solutions",
                  feature3: "Expertise in React.js, HTML, CSS",
                },
              },
              slide2: {
                title: "Backend Development",
                description:
                  "Robust and scalable backend solutions to power your applications.",
                keyFeatures: {
                  heading: "Key Features:",
                  feature1: "Database design and optimization",
                  feature2: "Technologies: PHP, SQL, MongoDB",
                },
              },
              slide3: {
                title: "Frontend Design",
                description:
                  "Create visually appealing and interactive user interfaces that captivate users.",
                keyFeatures: {
                  heading: "Key Features:",
                  feature1: "UX/UI design principles",
                  feature2: "Dynamic and responsive designs",
                  feature3: "Proficiency in TypeScript",
                },
              },
              slide4: {
                title: "Custom Software Development",
                description:
                  "Tailored software solutions built specifically for your business needs.",
                keyFeatures: {
                  heading: "Key Features:",
                  feature1: "End-to-end software design",
                  feature2: "Cross-platform compatibility",
                  feature3: "Agile methodologies",
                },
              },
            },
            howWeWork: {
              heading: "How We Work",
              discovery: {
                title: "Discovery",
                description: "Understanding your business needs.",
              },
              planning: {
                title: "Planning",
                description: "Designing a roadmap for success.",
              },
              development: {
                title: "Development",
                description: "Coding and creating the solution.",
              },
              launchSupport: {
                title: "Launch & Support",
                description: "Deploying and maintaining your product.",
              },
            },
          },
          portfolio: {
            header: {
              title: "Explore Our Portfolio",
              subtitle:
                "Discover the innovative solutions we've built to empower businesses like yours."
            },
            grid: {
              viewMore: "View More",
              modal: {
                technologies: "Technologies:",
                liveLink: "Visit Live Site",
                close: "Close"
              }
            },
            description: {
              w_ruchu: "Our website serves as an informative platform, providing easy access to news, events, and foundation projects. The site is built using HTML, CSS, JS, PHP, and MySQL, ensuring intuitive and fast content access. With a custom content management system powered by TinyMCE, administrators can easily update information and publications."
            }
          },
      },
    },
    pl: {
      translation: {
        home: {
        header: {
          title: "Jesteśmy ",
          text: "Specjalizujemy się w dostarczaniu innowacyjnych rozwiązań technologicznych, które pomagają firmom odnosić sukcesy w dynamicznym, cyfrowym świecie.",
          button: "Poznaj nasze portfolio"
        },
        whyUs: {
          title: "Dlaczego my?",
          text: "W Puentech angażujemy się w wspieranie lokalnych firm poprzez spersonalizowane rozwiązania IT, które naprawdę robią różnicę. Oto, co nas wyróżnia:",
          customSolutions: "Dedykowane rozwiązania: ",
          customSolutions_text: "Dopasowane do Twoich indywidualnych potrzeb.",
          clientCentric: "Orientacja na klienta: ",
          clientCentric_text: "Zawsze na każdym kroku dbamy o Twój sukces.",
          accessibleSupport: "Łatwo dostępne wsparcie: ",
          accessibleSupport_text: "Zawsze gotowi do szybkiej i praktycznej pomocy.",
          button: "Skontaktuj się z nami!"
        },
        secondHeader: {
          title: "Budujemy mosty do inteligentniejszej, połączonej przyszłości.",
          button: "Dowiedz się więcej o nas"
        },
        services: {
          title: "Nasze usługi",
          webDevelopment: {
            title: "Tworzenie stron WWW",
            text: "Projektujemy responsywne, przyjazne dla użytkownika strony internetowe."
          },
          backendDevelopment: {
            title: "Backend Development",
            text: "Solidne rozwiązania dla skalowalnych aplikacji."
          },
          frontendDesign: {
            title: "Projektowanie Frontendu",
            text: "Atrakcyjne wizualnie, interaktywne interfejsy użytkownika."
          },
          customSoftware: {
            title: "Oprogramowanie dedykowane",
            text: "Rozwiązania dopasowane do Twoich unikalnych potrzeb."
          },
          button: "Poznaj wszystkie usługi"
        },
        reviews: {
          slide1: {
            author: "John D., właściciel małej firmy",
            text: "\"Współpraca z PuenTech była czystą przyjemnością! Odnowili moją przestarzałą stronę, tworząc elegancki i nowoczesny serwis, który już przyciągnął więcej klientów. Gorąco polecam ich usługi!\""
          },
          slide2: {
            author: "Jane S., Freelancer",
            text: "\"Zespół PuenTech jest niezwykle utalentowany i profesjonalny. Dostarczyli stronę na najwyższym poziomie, która przerosła moje oczekiwania. Jestem bardzo zadowolona z efektów!\""
          },
          slide3: {
            author: "Michael R., założyciel startupu",
            text: "\"Od początku do końca cały proces przebiegał bezproblemowo. PuenTech nie tylko zrealizował moją wizję, ale także zaproponował cenne sugestie, które podniosły ostateczną jakość produktu. Z pewnością skorzystam z ich usług ponownie!\""
          },
          slide4: {
            author: "Emily S., menedżer ds. marketingu",
            text: "\"Zespół PuenTech jest niesamowity! Szybko zrozumieli nasze potrzeby i stworzyli stronę, która idealnie prezentuje naszą markę. Od momentu wdrożenia zauważyliśmy znaczący wzrost zaangażowania.\""
          }
        }
      },
        about: {
          whoWeAre: "Kim jesteśmy?",
          description: "Puentech to dynamiczna i innowacyjna firma zajmująca się tworzeniem oprogramowania, która dostarcza nowoczesne rozwiązania dostosowane do potrzeb klientów. Z pasją do technologii i zobowiązaniem do doskonałości, tworzymy wysokiej jakości cyfrowe doświadczenia, które przyczyniają się do sukcesu.",
          frontendHeading: "Technologie Frontend",
          backendHeading: "Technologie Backend",
          ourExperienceHeading: "Nasze Doświadczenie",
          ourExperienceDescription: "Nasz zespół nieustannie podnosi swoje kwalifikacje, uczestnicząc w zaawansowanych szkoleniach IT. Programy te dostarczają najnowszych informacji branżowych i wzmacniają naszą zdolność do dostarczania innowacyjnych oraz niezawodnych rozwiązań.",
          futureTogetherHeading: "Budujemy przyszłość razem",
          futureTogetherDescription: "Łączymy najnowocześniejszą technologię, innowacyjne podejście i głębokie zrozumienie potrzeb klientów, aby nieustannie dostarczać wyjątkowe rezultaty.",
          whyChooseHeading: "Dlaczego Puentech?",
          expertise: "Znajomość różnych technologii: ",
          expertise2: " Opanowanie zarówno nowoczesnych, jak i tradycyjnych technologii, co pozwala sprostać różnorodnym wymaganiom projektowym.",
          continuousGrowth: "Ciągły rozwój: ",
          continuousGrowth2: "Śledzimy najnowsze trendy, aby dostarczać rozwiązania na najwyższym poziomie.",
          clientCentric: "Podejście skoncentrowane na kliencie: ",
          clientCentric2: "Współpraca, która przekracza oczekiwania.",
        
        },
        header: {
            home: "Strona Główna",
            about: "O nas",
            services: "Usługi",
            portfolio: "Portfolio",
            contact: "Kontakt",
        },
        contact: {
              header: {
                title: "Zbudujmy razem coś wspaniałego!",
                subtitle:
                  "Masz pytania lub pomysł na projekt? Jesteśmy tu, aby pomóc. Skontaktuj się z nami już dziś!",
              },
              formSection: {
                heading: "Potrzebujesz strony internetowej",
                heading2: "Porozmawiajmy",
                description:
                  "Specjalizujemy się w przekształcaniu pomysłów w zachwycające doświadczenia online. Skontaktuj się z nami już teraz.",
                emailInfo: "Lub skontaktuj się z nami poprzez adres e-mail",
                email: "puentechcompany@gmail.com"
              },
              faqHeading: "FAQ",
              faq: {
                q1: "Jak długo trwa stworzenie strony internetowej?",
                a1:
                  "MenageUp to system ERP zaprojektowany, aby usprawnić procesy biznesowe i zwiększyć efektywność.",
                q2: "Jakich technologii używacie przy tworzeniu stron?",
                a2:
                  "MenageUp integruje kluczowe funkcjonalności, takie jak finanse, HR i operacje, w jedną spójną platformę.",
                q3: "Czy oferujecie usługi wsparcia dla wykonanych stron?",
                a3:
                  "Tak, MenageUp jest wysoce konfigurowalny, aby sprostać różnorodnym potrzebom biznesowym i procesom pracy."
              },
              form: {
                name: "Imię",
                lastName: "Nazwisko",
                email: "Email",
                message: "Wiadomość",
                submit: "Skontaktuj się z nami!"
              },
              cta: {
                title:
                  "Nie wiesz, od czego zacząć? Umów się na bezpłatną konsultację!",
                button: "Umów się teraz!"
              }
        },
        services: {
            header: {
              title: "Tam, gdzie usługa spotyka doskonałość",
              subtitle:
                "Poznaj naszą szeroką gamę usług dostosowanych do potrzeb Twojego biznesu.",
              button: "Uzyskaj bezpłatną konsultację",
            },
            callToAction: {
              headline: "Ożywmy Twoje pomysły!",
              button: "Skontaktuj się z nami",
            },
            carousel: {
              slide1: {
                title: "Tworzenie stron WWW",
                description:
                  "Projektujemy responsywne, przyjazne dla użytkownika strony internetowe, korzystając z nowoczesnych frameworków i najlepszych praktyk.",
                keyFeatures: {
                  heading: "Kluczowe cechy:",
                  feature1: "Rozwój full-stack",
                  feature2: "Dedykowane rozwiązania webowe",
                  feature3: "Technologie: React.js, HTML, CSS",
                },
              },
              slide2: {
                title: "Backend Development",
                description:
                  "Solidne i skalowalne rozwiązania backendowe, które napędzą Twoje aplikacje.",
                keyFeatures: {
                  heading: "Kluczowe cechy:",
                  feature1: "Projektowanie i optymalizacja baz danych",
                  feature2: "Technologie: PHP, SQL, MongoDB",
                },
              },
              slide3: {
                title: "Projektowanie Frontendu",
                description:
                  "Tworzymy atrakcyjne wizualnie i interaktywne interfejsy użytkownika, które przyciągają uwagę.",
                keyFeatures: {
                  heading: "Kluczowe cechy:",
                  feature1: "Zasady UX/UI",
                  feature2: "Dynamiczne i responsywne projekty",
                  feature3: "Znajomość TypeScript",
                },
              },
              slide4: {
                title: "Dedykowane oprogramowanie",
                description:
                  "Indywidualnie dopasowane rozwiązania programistyczne stworzone specjalnie dla Twojego biznesu.",
                keyFeatures: {
                  heading: "Kluczowe cechy:",
                  feature1: "Kompleksowy projekt oprogramowania",
                  feature2: "Kompatybilność międzyplatformowa",
                  feature3: "Metodyki Agile",
                },
              },
            },
            howWeWork: {
              heading: "Jak pracujemy",
              discovery: {
                title: "Poznawanie",
                description: "Poznanie potrzeb Twojego biznesu.",
              },
              planning: {
                title: "Planowanie",
                description: "Opracowanie planu działania.",
              },
              development: {
                title: "Programowanie",
                description: "Tworzenie i wdrażanie rozwiązań.",
              },
              launchSupport: {
                title: "Uruchomienie",
                description: "Uruchomienie i wsparcie Twojego produktu.",
              },
            },
          },
          portfolio: {
            header: {
              title: "Poznaj nasze portfolio",
              subtitle:
                "Odkryj innowacyjne rozwiązania, które stworzyliśmy, aby wspierać firmy takie jak Twoja."
            },
            grid: {
              viewMore: "Zobacz więcej",
              modal: {
                technologies: "Technologie:",
                liveLink: "Odwiedź stronę live",
                close: "Zamknij"
              }
            },
            description: {
              w_ruchu: "Nasza strona wizytówka to przejrzysta platforma informacyjna, umożliwiająca łatwy dostęp do aktualności, wydarzeń i projektów fundacji. Serwis został zbudowany w technologiach HTML, CSS, JS, PHP i MySQL, oferując intuicyjny i szybki dostęp do treści. Dzięki wbudowanemu systemowi zarządzania treścią z edytorem TinyMCE, administratorzy mogą wygodnie aktualizować informacje i publikacje."
            }
          },
      },
    },
  };

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;