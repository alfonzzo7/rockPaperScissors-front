import { Observable } from 'rxjs';
import { Round } from 'src/app/model/round.model';
import { Total } from 'src/app/model/total.model';


export abstract class IRoundRestService {
    /**
     * Plays a round
     * @return Round
     */
    abstract playRound(): Observable<Round>;

    /**
     * Gets the total of rounds played
     * @return Total
     */
     abstract getTotal(): Observable<Total>;

    /**
     * Delete the total of rounds played
     */
     abstract deleteTotal(): any;
}
