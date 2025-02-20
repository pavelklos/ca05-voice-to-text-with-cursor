'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { getNotes, updateNote, deleteNote } from '@/lib/firebase/firebaseUtils'
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa'

interface Note {
  id: string
  content: string
  timestamp: string
  userId: string
}

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editContent, setEditContent] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      const loadNotes = async () => {
        const userNotes = await getNotes(user.uid)
        setNotes(userNotes)
      }
      loadNotes()
    }
  }, [user])

  const handleEdit = (note: Note) => {
    setEditingId(note.id)
    setEditContent(note.content)
  }

  const handleSave = async (noteId: string) => {
    if (user) {
      await updateNote(noteId, editContent)
      setNotes(notes.map(note => 
        note.id === noteId ? { ...note, content: editContent } : note
      ))
      setEditingId(null)
    }
  }

  const handleDelete = async (noteId: string) => {
    if (user) {
      await deleteNote(noteId)
      setNotes(notes.filter(note => note.id !== noteId))
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Recent Notes</h2>
      {notes.map((note) => (
        <div key={note.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-gray-500">
              {new Date(note.timestamp).toLocaleString()}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(note)}
                className="text-blue-500 hover:text-blue-600"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(note.id)}
                className="text-red-500 hover:text-red-600"
              >
                <FaTrash />
              </button>
            </div>
          </div>
          
          {editingId === note.id ? (
            <div className="space-y-2">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full p-2 border rounded"
                rows={4}
              />
              <button
                onClick={() => handleSave(note.id)}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                <FaSave /> Save
              </button>
            </div>
          ) : (
            <p className="text-gray-700">{note.content}</p>
          )}
        </div>
      ))}
    </div>
  )
} 