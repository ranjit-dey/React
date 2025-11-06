import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { blogs } from "../data/blogsData";


export default function CreateBlog() {
    const navigate = useNavigate()

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: '',
    })

    const [submitted, setSubmitted] = useState(false)

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()

        // In real app: send to backend here
        // Instead of console.log, push to blogsData.js dynamically
        blogs.push({
            id: blogs.length + 1,
            ...formData,
            date: new Date().toISOString().split('T')[0],
        })

        setSubmitted(true)

        // Redirect after short delay
        setTimeout(() => navigate('/blogs'), 1500)
    }

    if (submitted) {
        return (
            <div className="max-w-md mx-auto text-center py-20">
                <h2 className="text-2xl font-semibold text-gray-800">
                    🎉 Blog Created Successfully!
                </h2>
                <p className="text-gray-600 mt-2">Redirecting you to all blogs...</p>
            </div>
        )
    }

    return (
        <section className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Create a New Blog</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
                {/* Title */}
                <div className="mb-6">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                        placeholder="Enter blog title"
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Short Description
                    </label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                        placeholder="Write a short summary"
                    />
                </div>

                {/* Content */}
                <div className="mb-8">
                    <label
                        htmlFor="content"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Blog Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        rows="8"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                        placeholder="Write your full blog content..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                    Publish Blog
                </button>
            </form>
        </section>
    )
}
