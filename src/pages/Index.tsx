import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ClearingType {
  id: string;
  title: string;
  description: string;
  features: string[];
  examples: string[];
  icon: string;
}

const clearingTypes: Record<string, ClearingType> = {
  centralized: {
    id: 'centralized',
    title: 'Централизованный клиринг',
    description: 'Система расчётов с единым центральным контрагентом, который выступает посредником между всеми участниками сделок.',
    features: [
      'Центральный контрагент для всех сделок',
      'Снижение кредитного риска',
      'Стандартизированные процедуры',
      'Централизованное управление залогами'
    ],
    examples: [
      'Московская биржа (MOEX)',
      'LCH.Clearnet (Лондон)',
      'CME Clearing (США)'
    ],
    icon: 'Building2'
  },
  decentralized: {
    id: 'decentralized',
    title: 'Децентрализованный клиринг',
    description: 'Система расчётов на основе распределённых технологий, где операции выполняются без единого центра управления.',
    features: [
      'Технология блокчейн',
      'Смарт-контракты для автоматизации',
      'Отсутствие единого центра',
      'Прозрачность операций'
    ],
    examples: [
      'Ethereum DeFi протоколы',
      'Uniswap DEX',
      'Распределённые реестры банков'
    ],
    icon: 'Network'
  },
  interbank: {
    id: 'interbank',
    title: 'Межбанковский клиринг',
    description: 'Система взаимных расчётов между коммерческими банками для проведения платежей клиентов.',
    features: [
      'Взаимозачёт требований банков',
      'Снижение объёма переводов',
      'Ежедневные расчётные сессии',
      'Гарантии центрального банка'
    ],
    examples: [
      'Система ЦБ РФ',
      'BACS (Великобритания)',
      'ACH (США)'
    ],
    icon: 'Landmark'
  },
  domestic: {
    id: 'domestic',
    title: 'Местный клиринг',
    description: 'Клиринговые операции в рамках одной страны с использованием национальной платёжной инфраструктуры.',
    features: [
      'Национальная валюта',
      'Регулирование центральным банком',
      'Местные стандарты и правила',
      'Быстрые расчёты внутри страны'
    ],
    examples: [
      'Система быстрых платежей (СБП)',
      'Национальная платёжная система МИР',
      'BPAY (Австралия)'
    ],
    icon: 'MapPin'
  },
  global: {
    id: 'global',
    title: 'Глобальный клиринг',
    description: 'Международные клиринговые системы для расчётов между странами в различных валютах.',
    features: [
      'Многовалютные расчёты',
      'Международные стандарты',
      'Корреспондентская сеть',
      'Валютные риски и хеджирование'
    ],
    examples: [
      'SWIFT',
      'CLS Bank (валютный клиринг)',
      'Euroclear (европейские ценные бумаги)'
    ],
    icon: 'Globe'
  }
};

const Index = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Банковский клиринг
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Образовательный портал о современных системах расчётов
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-accent border-accent/50">
              Интерактивная схема
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Виды современного банковского клиринга
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Кликните на любой тип клиринга, чтобы узнать подробнее о его особенностях, примерах и применении
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="md:col-start-2 flex justify-center mb-8">
                <Card className="border-2 border-accent shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-3 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <Icon name="TrendingUp" size={32} className="text-accent" />
                    </div>
                    <CardTitle className="text-2xl">Банковский клиринг</CardTitle>
                    <CardDescription>Центральное понятие</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {Object.values(clearingTypes).map((type, index) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    selectedType === type.id ? 'ring-2 ring-accent shadow-xl' : ''
                  }`}
                  onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={type.icon} size={24} className="text-primary" />
                      </div>
                      <CardTitle className="text-xl flex-1">{type.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {selectedType && (
          <section className="animate-scale-in mb-16">
            <Card className="max-w-4xl mx-auto border-accent/50 shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Icon name={clearingTypes[selectedType].icon} size={32} className="text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl mb-2">
                        {clearingTypes[selectedType].title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {clearingTypes[selectedType].description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedType(null)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-accent" />
                    Характерные черты
                  </h3>
                  <ul className="space-y-2">
                    {clearingTypes[selectedType].features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Building" size={20} className="text-accent" />
                    Примеры систем
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {clearingTypes[selectedType].examples.map((example, i) => (
                      <Badge key={i} variant="secondary" className="text-sm py-1 px-3">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        <section className="animate-fade-in">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-accent border-accent/50">
              Обучение
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Курсы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Углубите свои знания в области банковского клиринга с нашими образовательными программами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Основы клиринга</CardTitle>
                <CardDescription>
                  Введение в базовые концепции и принципы работы клиринговых систем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">6 модулей • 12 часов</span>
                  <Button variant="outline" size="sm">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon name="LineChart" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Риск-менеджмент</CardTitle>
                <CardDescription>
                  Управление рисками в клиринговых операциях и финансовых расчётах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">8 модулей • 16 часов</span>
                  <Button variant="outline" size="sm">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon name="Blocks" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Blockchain в клиринге</CardTitle>
                <CardDescription>
                  Применение распределённых технологий в современных расчётных системах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">10 модулей • 20 часов</span>
                  <Button variant="outline" size="sm">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t mt-24 bg-card/50">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2024 Образовательный портал банковского клиринга</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
