import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  models = ['gpt-3.5-turbo'];
  selectedModel = this.models[0];
  temperature = 1;
  topP = 1;
  messages:any = [];
  userInput = '';
  error = '';

  @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef;

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (!this.userInput.trim()) {
      return;
    }
  
    
    

    const messages = [
      ...this.messages.map((message: any) => ({ role: message.role, content: message.content })),
      { role: 'user', content: this.userInput },
    ];

    this.messages.push({ role: 'user', content: this.userInput });
  
    this.scrollToBottom();

    this.chatService.sendMessage(this.selectedModel, messages, this.temperature, this.topP).subscribe(
      (response: any) => {
        const chatbotMessage = response.choices[0].message.content.trim();
        this.messages.push({ role: 'assistant', content: chatbotMessage });
        this.scrollToBottom();
      },
      (error: any) => {
        console.error('Error:', error);
        this.error = error.error.message || 'An error occurred. Please try again.';
      }
    );
  
    this.userInput = '';
  }

  clearMessages() {
    this.messages = [];
  }

  scrollToBottom(): void {
    console.log('scrollToBottom');
    setTimeout(() => {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    }, 0);
  }
}
