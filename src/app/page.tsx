import { Suspense } from 'react'
import VoiceRecorder from '@/components/VoiceRecorder'
import NotesList from '@/components/NotesList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoadingNotes from '@/components/LoadingNotes'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        <VoiceRecorder />
        <Suspense fallback={<LoadingNotes />}>
          <NotesList />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
