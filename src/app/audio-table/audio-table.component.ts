import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AudioService } from '../service/audio.service';

@Component({
  selector: 'app-audio-table',
  templateUrl: './audio-table.component.html',
  styleUrls: ['./audio-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioTableComponent {
  public readonly audioService = inject(AudioService)

  displayedColumns: string[] = ['id', 'name', 'file'];
  selectedAudio: string | null = null;

  playAudio(file: string): void {
    this.selectedAudio = file;
  }
}