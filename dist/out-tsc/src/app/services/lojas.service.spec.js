import { TestBed } from '@angular/core/testing';
import { LojasService } from './lojas.service';
describe('LojasService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LojasService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=lojas.service.spec.js.map