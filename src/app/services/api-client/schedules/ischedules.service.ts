import { Observable } from "rxjs";
import * as scheduleModels from "./schedule.model";

export interface IScheduleService {

    save(request: scheduleModels.SaveScheduleRequest): Observable<scheduleModels.SaveScheduleResponse>

    delete(id: number): Observable<void>

    listInMonth(year: number, month: number): Observable<scheduleModels.ScheduleAppointmentMonthResponse>

}
