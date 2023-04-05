import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}

  sendMessage(model: string, messages: any[], temperature: number, topP: number): Observable<any> {
    const requestBody = {
      model,
      messages,
      temperature,
      top_p: topP,
    };

    return this.http.post<any>('/api/chat', requestBody);
  }
}
