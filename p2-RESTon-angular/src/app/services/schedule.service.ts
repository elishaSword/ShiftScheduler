import { ScheduleInterface } from './../interfaces/schedule-interface';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  dummyData: Schedule[] = [
    {
      id: 1,
      startDate: '',
      shifts: [
        {
          id: 1,
          user: {
            id: 1,
            firstName: 'George',
            lastName: 'Yoo',
            email: 'g@g.com',
            password: null,
            isManager: false,
            phone: 12
          },
          shiftTime:  new Date(),
          position: {
            id: 1,
            name: 'Cook'
          },
          schedule: null
        },
        {
          id: 2,
          user: {
            id: 2,
            firstName: 'Dylan',
            lastName: 'Mahaffey',
            email: 'dylan@mail.com',
            password: null,
            isManager: false,
            phone: 13
          },
          shiftTime:  new Date(),
          position: {
            id: 1,
            name: 'Cook'
          },
          schedule: null
        },
        {
          id: 3,
          user: {
            id: 3,
            firstName: 'Will',
            lastName: 'He',
            email: 'will@mail.com',
            password: null,
            isManager: false,
            phone: 14
          },
          shiftTime:  new Date(),
          position: {
            id: 2,
            name: 'Waiter'
          },
          schedule: null
        },
        {
          id: 4,
          user: {
            id: 4,
            firstName: 'Calvin',
            lastName: 'Mak',
            email: 'calvin@mail.com',
            password: null,
            isManager: false,
            phone: 15
          },
          shiftTime:  new Date(),
          position: {
            id: 2,
            name: 'Waiter'
          },
          schedule: null
        },
      ]
    }
  ];

  schedules: BehaviorSubject<Schedule[]> = new BehaviorSubject<Schedule[]>([]);

  constructor() {
    this.schedules.next(this.dummyData);
    this.schedules.subscribe(s => {
      let myVar = s.filter(sch => sch.shifts);
    })

  }

  newShift(scheduleId: number) {
    // this.schedules.next(shift)
  }

  parseShifts(schedule: Schedule) {
    let shiftMap = {};
    schedule.shifts.map(shift => shiftMap[shift.position.name])
  }

}
