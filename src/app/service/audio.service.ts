import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AudioRecord } from '../model/audio-record.model';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private readonly audioRecordsSubject$ = new BehaviorSubject<AudioRecord[]>([
    { id: 1, name: 'Sound 1', file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { id: 2, name: 'Sound 2', file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { id: 3, name: 'Sound 3', file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
  ])
  public readonly audioRecords = this.audioRecordsSubject$.asObservable()
}