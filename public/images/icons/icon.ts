import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideHouse, LucideUser, LucideBook, LucideFileText, LucideCalendar, LucideBriefcase, LucideNotebookText, LucideShieldQuestionMark, LucideSettings } from '@lucide/angular';

export type IconName =
  | 'house'
  | 'courses'
  | 'disciplines'
  | 'contents'
  | 'events'
  | 'opportunities'
  | 'profile'
  | 'settings';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    CommonModule,
    LucideHouse,
    LucideUser,
    LucideBook,
    LucideFileText,
    LucideCalendar,
    LucideBriefcase,
    LucideNotebookText,
    LucideShieldQuestionMark,
    LucideSettings
],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  @Input() name!: IconName;
}
