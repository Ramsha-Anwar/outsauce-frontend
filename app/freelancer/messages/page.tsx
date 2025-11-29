'use client'

import React, { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Search, Send, Paperclip, MoreVertical, Phone, Video, UserCircle } from 'lucide-react'

export default function MessagesPage() {
    const [activeChat, setActiveChat] = useState(1)
    const [messageInput, setMessageInput] = useState('')

    const conversations = [
        {
            id: 1,
            name: 'Sarah Smith',
            company: 'TechCorp',
            avatar: null,
            lastMessage: 'That sounds great! When can you start?',
            time: '10:30 AM',
            unread: 2,
            online: true
        },
        {
            id: 2,
            name: 'Mike Johnson',
            company: 'StartupXYZ',
            avatar: null,
            lastMessage: 'Can you send over the updated designs?',
            time: 'Yesterday',
            unread: 0,
            online: false
        },
        {
            id: 3,
            name: 'Emily Davis',
            company: 'Creative Agency',
            avatar: null,
            lastMessage: 'Thanks for your application.',
            time: '2 days ago',
            unread: 0,
            online: false
        }
    ]

    const messages = [
        { id: 1, sender: 'them', content: 'Hi Alex, I reviewed your portfolio and I am really impressed with your work on the E-commerce dashboard.', time: '10:00 AM' },
        { id: 2, sender: 'me', content: 'Hi Sarah! Thank you so much. I really enjoyed working on that project.', time: '10:05 AM' },
        { id: 3, sender: 'them', content: 'We are looking for something similar for our internal tools. Do you have availability this month?', time: '10:15 AM' },
        { id: 4, sender: 'me', content: 'Yes, I have some capacity starting next week. I would love to hear more about what you need.', time: '10:20 AM' },
        { id: 5, sender: 'them', content: 'That sounds great! When can you start?', time: '10:30 AM' }
    ]

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault()
        if (messageInput.trim()) {
            // Add message logic here
            setMessageInput('')
        }
    }

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col md:flex-row gap-6">
            {/* Sidebar - Conversation List */}
            <div className="w-full md:w-80 flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {conversations.map(chat => (
                        <div
                            key={chat.id}
                            onClick={() => setActiveChat(chat.id)}
                            className={`p-4 flex items-start gap-3 cursor-pointer transition-colors border-b border-gray-50 last:border-0 ${activeChat === chat.id ? 'bg-primary-50' : 'hover:bg-gray-50'
                                }`}
                        >
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                    <UserCircle className="w-6 h-6" />
                                </div>
                                {chat.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className={`text-sm font-medium truncate ${activeChat === chat.id ? 'text-primary-900' : 'text-gray-900'}`}>
                                        {chat.name}
                                    </h3>
                                    <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{chat.time}</span>
                                </div>
                                <p className={`text-xs truncate ${chat.unread > 0 ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                                    {chat.lastMessage}
                                </p>
                            </div>
                            {chat.unread > 0 && (
                                <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center text-xs text-white font-medium">
                                    {chat.unread}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            <UserCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Sarah Smith</h3>
                            <p className="text-xs text-green-600 flex items-center">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                            <Phone className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                            <Video className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map(msg => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${msg.sender === 'me'
                                        ? 'bg-primary-600 text-white rounded-br-none'
                                        : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                                    }`}
                            >
                                <p className="text-sm">{msg.content}</p>
                                <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-primary-100' : 'text-gray-400'}`}>
                                    {msg.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200">
                    <form onSubmit={handleSend} className="flex items-center gap-2">
                        <button type="button" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                            <Paperclip className="w-5 h-5" />
                        </button>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                        />
                        <Button type="submit" size="sm" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
                            <Send className="w-4 h-4 ml-0.5" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
