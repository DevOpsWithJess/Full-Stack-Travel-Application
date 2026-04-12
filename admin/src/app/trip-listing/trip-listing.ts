import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trips } from '../data/trips';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, FormsModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {

  trips: any[] = trips;
  selectedTrip: any = null;

  constructor() { }

  ngOnInit(): void {}

  editTrip(trip: any): void {
    this.selectedTrip = trip;
    console.log('Selected trip:', trip);
  }

  saveTrip(): void {
    console.log('Saved trip:', this.selectedTrip);
    this.selectedTrip = null;
  }

  cancelEdit(): void {
    this.selectedTrip = null;
  }
}