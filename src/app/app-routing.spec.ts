import { GradePipe } from './pipes/grade.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { waitForAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe("App Routing", () => {
    let router: Router
    let fixture: ComponentFixture<AppComponent>;
    let homeFixture: ComponentFixture<HomeComponent>;
    let infoFixture: ComponentFixture<InfoComponent>;
    let location: Location;
    let el: DebugElement;
    let btnEl: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [AppComponent, HomeComponent, InfoComponent, GradePipe],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }))

    beforeEach(() => {
        router = TestBed.inject(Router);
        location = TestBed.inject(Location)
        router.initialNavigation();
        fixture = TestBed.createComponent(AppComponent)
        homeFixture = TestBed.createComponent(HomeComponent)
        infoFixture = TestBed.createComponent(InfoComponent)
        el = homeFixture.debugElement;
        btnEl = homeFixture.debugElement;
    })

    it("should navigate to default path home", waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(location.path()).toBe('/home');
        })
    }))

    it("should navigate to info on clicking the link of home component", waitForAsync(() => {
        homeFixture.detectChanges()
        let links = el.queryAll(By.css('a'));
        links[0].nativeElement.click();
        homeFixture.whenStable().then(() => {
            expect(location.path()).toBe('/info');
        })
    }))

    it("should navigate to home on clicking the button in info component", waitForAsync(() => {
        infoFixture.detectChanges()
        let btns = btnEl.queryAll(By.css('button'));
        btns[0].nativeElement.click();
        infoFixture.whenStable().then(() => {
            expect(location.path()).toBe('/home');
        })
    }))
})