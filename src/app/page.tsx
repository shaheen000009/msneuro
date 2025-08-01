import Header from './components/Header';
import EEGVisualization from './components/EEGVisualization';
import TopicCards from './components/TopicCards';
import ProcessingPipeline from './components/ProcessingPipeline';
import EEGTools from './components/EEGTools';
import BrainMonitor from './components/BrainMonitor';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 animate-pulse">
      <Header />
      <EEGVisualization />
      
      <main className="container mx-auto px-6 pb-16">
        <TopicCards />
        <ProcessingPipeline />
        <EEGTools />
        <BrainMonitor />
      </main>

      <Footer />
    </div>
  );
}
