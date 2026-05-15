describe('Login Formu E2E Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173') 
  })

  it('Başarılı form doldurulduğunda buton aktif olmalı', () => {
    cy.get('input[name="email"]').type('test@proje.com')
    cy.get('input[name="password"]').type('Password123')
    cy.get('input[name="terms"]').check()
    cy.get('button').should('not.be.disabled')
  })

  it('Hatalı email girildiğinde hata mesajı görünmeli ve buton disabled kalmalı', () => {
    cy.get('input[name="email"]').type('yanlis-email')
    cy.get('.error').should('have.length', 1)
    cy.get('.error').should('contain', 'Geçerli bir email giriniz!')
    cy.get('button').should('be.disabled')
  })

  it('Email ve şifre yanlışsa 2 hata mesajı görünmeli', () => {
    cy.get('input[name="email"]').type('yanlis-email')
    cy.get('input[name="password"]').type('123')
    cy.get('.error').should('have.length', 2)
    cy.get('.error').last().should('contain', 'Şifre en az 8 karakter')
  })

  it('Email ve şifre doğru ama şartlar kabul edilmediyse buton disabled kalmalı', () => {
    cy.get('input[name="email"]').type('test@proje.com')
    cy.get('input[name="password"]').type('Password123')
    cy.get('button').should('be.disabled')
  })
})