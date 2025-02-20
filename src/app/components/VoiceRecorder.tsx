'use client'

import { useState, useEffect } from 'react'
import { useDeepgram } from '@/lib/contexts/DeepgramContext'
import { useAuth } from '@/lib/hooks/useAuth'
import { addNote } from '@/lib/firebase/firebaseUtils'
import { FaMicrophone, FaStop } from 'react-icons/fa'

export default function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const { createLiveMicrophone } = useDeepgram()
  const { user } = useAuth()

  const startRecording = async () => {
    try {
      const microphone = await createLiveMicrophone()
      
      microphone.addListener('transcriptReceived', (transcription) => {
        setTranscript((prev) => prev + ' ' + transcription.text)
      })

      setIsRecording(true)
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }

  const stopRecording = async () => {
    setIsRecording(false)
    if (user && transcript.trim()) {
      await addNote({
        userId: user.uid,
        content: transcript.trim(),
        timestamp: new Date().toISOString(),
      })
    }
    setTranscript('')
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`rounded-full p-6 transition-colors ${
            isRecording 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isRecording ? (
            <FaStop className="w-8 h-8 text-white" />
          ) : (
            <FaMicrophone className="w-8 h-8 text-white" />
          )}
        </button>
        
        {isRecording && (
          <div className="w-full max-w-2xl mt-4">
            <div className="animate-pulse bg-gray-100 rounded-lg p-4">
              <p className="text-gray-700">{transcript || 'Listening...'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 