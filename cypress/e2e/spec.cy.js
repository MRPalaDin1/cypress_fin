describe('Тесты на hh.ru', () => {
  // it('Регистрация нового пользователя', () => {
  //   cy.visit('https://tomsk.hh.ru');
  //   cy.contains('Создать резюме').click();
  //   cy.get('input[name="login"]').type('efimovaekaterina310@gmail.com');
  //   cy.contains('Зарегистрироваться').click();
  //   cy.pause();
  //   cy.contains('Подтвердить').click().should('exist');
  // });
  //
  // it('Регистрация нового пользователя негативный сценарий', () => {
  //   cy.visit('https://tomsk.hh.ru');
  //   cy.contains('Создать резюме').click();
  //   cy.get('input[name="login"]').type('geroy tryda@mail.uganda');
  //   cy.contains('Зарегистрироваться').click();
  //   cy.wait(3000);
  // });
  //
  // it('Изменение пароля', () => {
  //   cy.visit('https://tomsk.hh.ru');
  //   cy.contains('Войти').click();
  //   cy.get('input[name="login"]').type('efimovaekaterina310@gmail.com');
  //   cy.contains('Войти с паролем').click();
  //   cy.get('input[aria-label="Введите пароль"]').type('123456');
  //   cy.get('button[data-qa="account-login-submit"]').click();
  //   cy.get('button[data-qa="mainmenu_applicantProfile"]').click();
  //   cy.get('.supernova-dropdown-section_main-content').contains('Настройки').click();
  //   cy.get('[data-qa="settings__password-edit"]').contains('Изменить').click();
  //   cy.get('input[data-qa="settings__password-password"]').type('123456789');
  //   cy.get('input[name="newPassword"]').type('123456');
  //   cy.get('input[name="newPasswordConfirm"]').type('123456');
  //   cy.get('input[data-qa="settings__password-submit"]').click().should('exist');
  // });
  //
  // it('Авторизация пользователя с помощью почты', () => {
  //   cy.visit('https://tomsk.hh.ru');
  //   cy.contains('Войти').click();
  //   cy.get('input[name="login"]').type('mrpaladin228322954@gmail.com');
  //   cy.contains('Продолжить').click();
  //   cy.pause();
  //   cy.contains('Подтвердить').click().should('exist');
  // });
  //
  //
  // it('Авторизация пользователя с паролем', () => {
  //   cy.visit('https://tomsk.hh.ru');
  //   cy.contains('Войти').click();
  //   cy.get('input[name="login"]').type('mrpaladin228322954@gmail.com');
  //   cy.contains('Войти с паролем').click();
  //   cy.get('input[aria-label="Введите пароль"]').type('228322954');
  //   cy.get('button[data-qa="account-login-submit"]').click().should('exist');
  // });
  //
  // it('Авторизация несуществующего пользователя', () => {
  //   cy.visit('https://tomsk.hh.ru');
  //   cy.contains('Войти').click();
  //   cy.get('input[name="login"]').type('mrpaladin@gmail.com');
  //   cy.contains('Войти с паролем').click();
  //   cy.get('input[aria-label="Введите пароль"]').type('mrpaladin');
  //   cy.get('button[data-qa="account-login-submit"]').click();
  //   cy.wait(3000);
  // });
  //
  // it('Навигация по сайту', () => {
  //   cy.visit('https://tomsk.hh.ru');
  //   cy.contains('Работодателям').click();
  //   cy.contains('Соискателям').click().should('exist');
  // });
  //
  // it('Поиск резюме', () => {
  //   cy.visit('https://hh.ru');
  //   cy.get('input[data-qa="search-input"]').type('дворник');
  //   cy.get('[data-qa="search-button"] button').click({ force: true }).should('exist');
  //   // cy.get('div[data-qa="bloko-modal-close"]').click({ force: true }).should('exist');
  //
  // });
  //
  // it('Проверка открытия деталей вакансии', () => {
  //   cy.visit('https://hh.ru');
  //   cy.get('input[data-qa="search-input"]').type('сварщик');
  //   cy.get('[data-qa="search-button"] button').click({ force: true });
  //   cy.pause();
  //   cy.get('div#a11y-main-content > div:nth-child(2) > div > div.vacancy-serp-item-body > div > div.vacancy-serp-item-company > div > div.bloko-v-spacing-container.bloko-v-spacing-container_base-2 > div > div.vacancy-serp-item__meta-info-company > a').click().should('exist');
  // });
  //
  // it('Проверка фильтров в поиске вакансий', () => {
  //   cy.visit('https://hh.ru');
  //   cy.get('.bloko-button[data-qa="advanced-search"]').click({force: true});
  //   cy.contains('в названии вакансии').click();
  //   cy.contains('Стажировка').click();
  //   cy.get('input[data-qa="vacancysearch__keywords-input"]').type('Дворник');
  //   cy.get('input[data-qa="vacancysearch__keywords-excluded-input"]').type('Сварщик');
  //   cy.get('input[data-qa="advanced-search-region-add"]').type('Сызрань');
  //   cy.get('input[data-qa="advanced-search-salary"]').type('52');
  //   cy.get('button[data-qa="advanced-search-submit-button"]').click({ force: true });
  // });
  //
  // it('Подтверждение города', () => {
  //   cy.visit('https://tomsk.hh.ru');
  //   cy.contains('Ваш регион — Томск?').should('be.visible');
  //   cy.contains('Всё верно').click().should('exist');
  // });
  //
  // it('Создание резюме', () => {
  //   cy.visit('https://tomsk.hh.ru');
  //   cy.contains('Войти').click();
  //   cy.get('input[name="login"]').type('mrpaladin228322954@gmail.com');
  //   cy.contains('Продолжить').click();
  //   cy.pause();
  //   cy.contains('Подтвердить').click().should('exist');
  //   cy.contains('Мои резюме').click().should('exist');
  //   cy.contains('Создать резюме').click({force: true});
  //   cy.get('input[data-qa="resume-profile-position-input"]').type('Дворник');
  //   cy.contains('Сохранить и продолжить').click().should('exist');
  //   cy.contains('Другое').click();
  //   cy.get('input[data-qa="bloko-tree-selector-input bloko-tree-selector-input-40"]').click({ force: true });
  //   cy.contains('Выбрать').click().should('exist');
  //   cy.contains('Мужской').click().should('exist');
  //   cy.contains('Сохранить и продолжить').click().should('exist');
  //   cy.get('input[data-qa="resume-profile-education-secondary-checkbox"]').click({ force: true });
  //   cy.contains('Нет опыта работы').click({ force: true });
  //   cy.get('button[data-qa="resume-profile-skills-recommend-close-button"]').click({ force: true });
  //   cy.contains('Сохранить и продолжить').click().should('exist');
  // });

  it('Редактирование резюме', () => {
    cy.visit('https://tomsk.hh.ru');
    cy.contains('Войти').click();
    cy.get('input[name="login"]').type('mrpaladin228322954@gmail.com');
    cy.contains('Продолжить').click();
    cy.pause();
    cy.contains('Подтвердить').click().should('exist');
    cy.contains('Мои резюме').click().should('exist');
    cy.contains('Сварщик').click().should('exist');
    cy.get('a[data-qa="resume-block-position-edit"]').click({ force: true });
    cy.get('input[data-qa="resume-salary-amount"]').type('100000');
    cy.contains('Сохранить').click().should('exist');
  });
});