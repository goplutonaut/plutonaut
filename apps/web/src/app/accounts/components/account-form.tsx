'use client';

import { SectionBox } from '@plutonaut/web/src/components/section-box';
import { SectionTitle } from '@plutonaut/web/src/components/section-title';
import {
  Field,
  FieldGroup,
  FieldLabel,
} from '@plutonaut/web/src/components/ui/field';
import { Input } from '@plutonaut/web/src/components/ui/input';
import { ACCOUNT_TYPES_KEYS } from '@plutonaut/web/src/types/account';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@plutonaut/web/src/components/ui/select';
import { Textarea } from '@plutonaut/web/src/components/ui/textarea';
import { Button } from '@plutonaut/web/src/components/ui/button';

function AccountForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData =
      e.currentTarget instanceof HTMLFormElement
        ? new FormData(e.currentTarget)
        : null;
    const data = Object.fromEntries(formData?.entries() || []);
    console.log('Form submitted', data);
  };

  return (
    <>
      <SectionTitle title="Add Account" />

      <SectionBox className="mb-8">
        <form onSubmit={handleSubmit}>
          <FieldGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Field>
              <FieldLabel htmlFor="account-number">Number</FieldLabel>
              <Input id="account-number" placeholder="e.g. 1000" />
            </Field>
            <Field>
              <FieldLabel htmlFor="account-name">Name</FieldLabel>
              <Input id="account-name" placeholder="e.g. Cash" />
            </Field>
            <Field>
              <FieldLabel htmlFor="account-type">Type</FieldLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {ACCOUNT_TYPES_KEYS.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field className="col-span-1 sm:col-span-2 md:col-span-3">
              <FieldLabel htmlFor="account-description">Description</FieldLabel>
              <Textarea
                id="account-description"
                placeholder="Optional description"
              />
            </Field>
            <Field orientation="horizontal">
              <Button type="submit">Save</Button>
            </Field>
          </FieldGroup>
        </form>
      </SectionBox>
    </>
  );
}

export default AccountForm;
