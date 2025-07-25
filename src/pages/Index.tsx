import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [calcData, setCalcData] = useState({
    area: '',
    type: 'apartment',
    complexity: 'standard'
  });

  const services = [
    {
      icon: "HardHat",
      title: "Строительство домов",
      description: "Полный цикл строительства от фундамента до крыши",
      price: "от 45 000 ₽/м²"
    },
    {
      icon: "Wrench",
      title: "Ремонт квартир",
      description: "Качественный ремонт любой сложности",
      price: "от 8 000 ₽/м²"
    },
    {
      icon: "Building",
      title: "Коммерческие объекты",
      description: "Строительство офисов, магазинов, складов",
      price: "от 35 000 ₽/м²"
    },
    {
      icon: "Hammer",
      title: "Реконструкция",
      description: "Модернизация и перепланировка зданий",
      price: "от 15 000 ₽/м²"
    }
  ];

  const projects = [
    {
      image: "/img/57e65a53-3e38-4b8d-9506-19e96bced257.jpg",
      title: "ЖК «Современный»",
      description: "Многоэтажный жилой комплекс",
      area: "15 000 м²",
      year: "2024"
    },
    {
      image: "/img/1eaa4b3c-f7c5-4b6a-b7e8-dac561486733.jpg",
      title: "Элитные апартаменты",
      description: "Дизайнерский ремонт премиум-класса",
      area: "250 м²",
      year: "2024"
    },
    {
      image: "/img/84676bca-b29a-4ecd-bd1a-495fdb89e98d.jpg",
      title: "Бизнес-центр «Альфа»",
      description: "Современный офисный комплекс",
      area: "8 500 м²",
      year: "2023"
    }
  ];

  const team = [
    {
      name: "Александр Петров",
      position: "Главный архитектор",
      experience: "15 лет опыта"
    },
    {
      name: "Марина Козлова",
      position: "Руководитель проектов",
      experience: "12 лет опыта"
    },
    {
      name: "Дмитрий Волков",
      position: "Инженер-конструктор",
      experience: "10 лет опыта"
    }
  ];

  const reviews = [
    {
      name: "Екатерина М.",
      text: "Отличная работа! Сделали ремонт квартиры точно в срок и с высоким качеством.",
      rating: 5
    },
    {
      name: "Сергей К.",
      text: "Построили дом мечты. Команда профессионалов, рекомендую!",
      rating: 5
    },
    {
      name: "Анна Л.",
      text: "Реконструкция офиса прошла без проблем. Очень довольны результатом.",
      rating: 5
    }
  ];

  const calculatePrice = () => {
    const basePrice = calcData.type === 'apartment' ? 8000 : 
                     calcData.type === 'house' ? 45000 : 35000;
    const multiplier = calcData.complexity === 'premium' ? 1.5 : 
                      calcData.complexity === 'luxury' ? 2 : 1;
    const area = parseFloat(calcData.area) || 0;
    return Math.round(basePrice * multiplier * area);
  };

  return (
    <div className="min-h-screen bg-dark text-gray-light">
      {/* Header */}
      <header className="bg-dark border-b border-gray-dark sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building" size={32} className="text-orange" />
              <span className="text-2xl font-bold text-orange">СтройМастер</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="hover:text-orange transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-orange transition-colors">Портфолио</a>
              <a href="#about" className="hover:text-orange transition-colors">О нас</a>
              <a href="#team" className="hover:text-orange transition-colors">Команда</a>
              <a href="#reviews" className="hover:text-orange transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-orange transition-colors">Контакты</a>
            </nav>
            <Button className="bg-orange hover:bg-orange/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark via-gray-dark to-dark py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Строим будущее
              <span className="block text-orange">с профессионалами</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-medium mb-8 max-w-2xl mx-auto">
              Полный цикл строительных работ от проектирования до сдачи объекта под ключ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-lg px-8 py-4">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white text-lg px-8 py-4">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Предоставляем полный спектр строительных услуг высокого качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-dark border-gray-dark hover:border-orange transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-orange" />
                  </div>
                  <CardTitle className="text-xl text-gray-light">{service.title}</CardTitle>
                  <CardDescription className="text-gray-medium">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="bg-orange text-white">{service.price}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Портфолио проектов</h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Ознакомьтесь с нашими выполненными проектами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-dark border-gray-dark overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-light">{project.title}</CardTitle>
                  <CardDescription className="text-gray-medium">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-orange font-semibold">{project.area}</span>
                    <span className="text-gray-medium">{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
              <p className="text-xl text-gray-medium">
                Рассчитайте примерную стоимость вашего проекта
              </p>
            </div>
            <Card className="bg-dark border-gray-dark">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Площадь (м²)</label>
                    <Input
                      type="number"
                      placeholder="Введите площадь"
                      value={calcData.area}
                      onChange={(e) => setCalcData({...calcData, area: e.target.value})}
                      className="bg-gray-dark border-gray-dark text-gray-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип объекта</label>
                    <select 
                      className="w-full p-3 rounded-md bg-gray-dark border border-gray-dark text-gray-light"
                      value={calcData.type}
                      onChange={(e) => setCalcData({...calcData, type: e.target.value})}
                    >
                      <option value="apartment">Квартира</option>
                      <option value="house">Дом</option>
                      <option value="commercial">Коммерческий объект</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Уровень сложности</label>
                    <select 
                      className="w-full p-3 rounded-md bg-gray-dark border border-gray-dark text-gray-light"
                      value={calcData.complexity}
                      onChange={(e) => setCalcData({...calcData, complexity: e.target.value})}
                    >
                      <option value="standard">Стандартный</option>
                      <option value="premium">Премиум</option>
                      <option value="luxury">Люкс</option>
                    </select>
                  </div>
                  <div className="bg-orange/10 p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange mb-2">
                      {calculatePrice().toLocaleString()} ₽
                    </div>
                    <div className="text-gray-medium">Примерная стоимость проекта</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">О компании</h2>
            <p className="text-xl text-gray-medium mb-12 leading-relaxed">
              «СтройМастер» — это команда профессионалов с более чем 15-летним опытом в строительной индустрии. 
              Мы специализируемся на полном цикле работ: от проектирования до сдачи объекта под ключ.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">500+</div>
                <div className="text-gray-medium">Завершенных проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">15</div>
                <div className="text-gray-medium">Лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">100%</div>
                <div className="text-gray-medium">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Опытные специалисты, которые воплотят ваши идеи в жизнь
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-dark border-gray-dark text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="User" size={48} className="text-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-light mb-2">{member.name}</h3>
                  <p className="text-orange mb-2">{member.position}</p>
                  <p className="text-gray-medium">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-gray-dark border-gray-dark">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-orange fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-light mb-4">"{review.text}"</p>
                  <p className="text-orange font-semibold">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacts" className="py-20 bg-gray-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-gray-medium">
                Свяжитесь с нами для обсуждения вашего проекта
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <Card className="bg-dark border-gray-dark">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-gray-dark border-gray-dark text-gray-light"
                      />
                      <Input
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-gray-dark border-gray-dark text-gray-light"
                      />
                      <Input
                        placeholder="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-gray-dark border-gray-dark text-gray-light"
                      />
                      <Textarea
                        placeholder="Сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-gray-dark border-gray-dark text-gray-light min-h-32"
                      />
                      <Button className="w-full bg-orange hover:bg-orange/90">
                        Отправить заявку
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-orange" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-gray-medium">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-orange" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-medium">info@stroymaster.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-orange" />
                    </div>
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-gray-medium">г. Москва, ул. Строительная, д. 15</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={24} className="text-orange" />
                    </div>
                    <div>
                      <div className="font-semibold">Время работы</div>
                      <div className="text-gray-medium">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark border-t border-gray-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building" size={32} className="text-orange" />
                <span className="text-2xl font-bold text-orange">СтройМастер</span>
              </div>
              <p className="text-gray-medium">
                Профессиональное строительство и ремонт в Москве
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-medium">
                <li>Строительство домов</li>
                <li>Ремонт квартир</li>
                <li>Коммерческие объекты</li>
                <li>Реконструкция</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-medium">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Команда</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-medium">
                <div>+7 (495) 123-45-67</div>
                <div>info@stroymaster.ru</div>
                <div>г. Москва, ул. Строительная, д. 15</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-dark mt-8 pt-8 text-center text-gray-medium">
            <p>&copy; 2024 СтройМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;