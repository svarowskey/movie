import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '../../../../shared/services/destroy.service';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs';

@Component({
  selector: 'mv-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class SearchFieldComponent implements OnInit {
  public readonly form: FormGroup = this.fb.group({
    search: [null],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        map((params) => params['term'] || ''),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((search) =>
        this.form.patchValue({ search }, { emitEvent: false })
      );

    this.form
      .get('search')
      ?.valueChanges?.pipe(
        debounceTime(700),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.submit());
  }

  submit() {
    this.router.navigate(['/search'], {
      queryParams: { term: this.form.value.search || null },
    });
  }
}
