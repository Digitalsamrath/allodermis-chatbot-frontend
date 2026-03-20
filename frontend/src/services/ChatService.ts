import { Message } from '../types/chat';

/**
 * ChatService handles all communication with the backend.
 * Placeholders are provided for actual API implementation.
 */
export const ChatService = {
  /**
   * Sends a message to the AI backend and returns the response.
   */
  async sendMessage(content: string, history: Message[]): Promise<Partial<Message>> {
    console.log('API Placeholder: Sending message to backend...', { content, history });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // TODO: Implement actual fetch/axios call to your backend
    /*
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: content, history })
    });
    return response.json();
    */

    return {
      message: `This is a placeholder response for: "${content}"`,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
  },

  /**
   * Uploads an image for analysis.
   */
  async uploadImage(file: File): Promise<{ imageUrl: string; analysisId: string }> {
    console.log('API Placeholder: Uploading image...', file.name);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // TODO: Implement actual image upload
    /*
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    return response.json();
    */

    return {
      imageUrl: URL.createObjectURL(file), // Local fallback
      analysisId: 'analysis_' + Date.now()
    };
  }
};
